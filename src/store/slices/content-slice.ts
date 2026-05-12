import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from '@reduxjs/toolkit';
import { Content } from '@/models/content';
import { ContentService } from '@/services/content.service';

interface ContentState {
  content: Content;
  isLoading: boolean;
  error: string | null;
}

const initialState: ContentState = {
  content: {
    siteContent: {
      home: {},
      about: {},
      services: {},
      powerflex: {},
      contact: {},
    },
    systemSettings: {
      siteName: '',
      siteLogo: '',
      siteIcon: '',
      siteUrl: '',
      siteSlogan: '',
      siteGraphImage: '',
      siteKeywords: [],
      siteDescription: '',
      siteAuthor: '',
      siteLocale: '',
      siteType: '',
      ogTitle: '',
      ogDescription: '',
      ogImage: '',
      ogImageAlt: '',
      twitterCard: '',
      twitterSite: '',
      twitterCreator: '',
      twitterTitle: '',
      twitterDescription: '',
      twitterImage: '',
      maintenanceMode: false,
      headerLinks: [],
      footerLinks: [],
      socialLinks: [],
      contact: {
        email: '',
        phones: [],
        whatsappPhone: '',
        addresses: [],
        map: '',
      },
    },
  },
  isLoading: true,
  error: null,
};

// Async thunks
export const fetchSiteContent = createAsyncThunk(
  'content/fetchSiteContent',
  async (_, { rejectWithValue }) => {
    try {
      return await ContentService.getContent();
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Failed to fetch site content';
      return rejectWithValue(message);
    }
  }
);

export const updateSiteContent = createAsyncThunk(
  'content/updateSiteContent',
  async ({ content }: { content: Partial<Content> }, { rejectWithValue }) => {
    try {
      return await ContentService.updateContent(content);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Failed to update site content';
      return rejectWithValue(message);
    }
  }
);

// Content Slice
const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    setSiteContent: (state, action: PayloadAction<Content>) => {
      state.content = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Fetch System Settings
    builder.addCase(fetchSiteContent.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchSiteContent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.content = action.payload;
    });
    builder.addCase(fetchSiteContent.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
    // Update Site Content
    builder.addCase(updateSiteContent.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(updateSiteContent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.content = action.payload;
    });
    builder.addCase(updateSiteContent.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export const { setSiteContent } = contentSlice.actions;

export default contentSlice.reducer;

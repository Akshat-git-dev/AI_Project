import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Safe fallback URL prevents createClient from crashing if env vars are not set
const validUrl = (supabaseUrl && supabaseUrl.startsWith('http'))
  ? supabaseUrl
  : 'https://placeholder-project.supabase.co';
const validKey = supabaseAnonKey || 'placeholder-anon-key';

if (!supabaseUrl || !supabaseAnonKey) {
  console.info(
    'ℹ️ Running with local browser StorageService (VITE_SUPABASE_URL not configured).'
  );
}

export const supabase = createClient(validUrl, validKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
});
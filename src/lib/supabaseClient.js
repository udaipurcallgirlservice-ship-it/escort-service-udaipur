import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dqvrpdufzyjvufqepblx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxdnJwZHVmenlqdnVmcWVwYmx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1NzYxMTgsImV4cCI6MjA2NTE1MjExOH0.1N3Crv6G8CbNVOSwN1uALsEfOfDP7uspvceFhqs-kEI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

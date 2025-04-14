
import { createClient } from '@supabase/supabase-js';

// These should be available as environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://pzthdzkjcrhxbqkzlcxp.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6dGhkemtqY3JoeGJxa3psY3hwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ1NjY5OTAsImV4cCI6MjA2MDE0Mjk5MH0.bQFMOxvoFZWNfLkgnR7huOS5JyeYr6sjX5SlIkCMSJY';

if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
  console.log('Using default Supabase URL and anon key because environment variables are not set.');
}

// Cria o cliente Supabase para o frontend
export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);


import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Cria o cliente Supabase com as credenciais do ambiente
// These need to be set in your environment
// For local development, you can use a .env file
// For production, set these in your hosting environment
const supabaseUrl = process.env.SUPABASE_URL || 'https://pzthdzkjcrhxbqkzlcxp.supabase.co';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6dGhkemtqY3JoeGJxa3psY3hwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ1NjY5OTAsImV4cCI6MjA2MDE0Mjk5MH0.bQFMOxvoFZWNfLkgnR7huOS5JyeYr6sjX5SlIkCMSJY';
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6dGhkemtqY3JoeGJxa3psY3hwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDU2Njk5MCwiZXhwIjoyMDYwMTQyOTkwfQ.qLXBzSWOxECjL80gLK-2YiBz6wETY3HGwWK9h5YTSAQ';

// Log that we're using default values if environment variables are not set
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
  console.log('Using default Supabase URL and anon key because environment variables are not set.');
}

// Cliente para operações com a chave anônima (seguro para usar no lado do cliente)
export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

// Cliente com a chave de serviço (apenas para uso no servidor, com privilégios elevados)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

// Configuração especial para contornar o RLS (Row Level Security)
export const getRLSBypassClient = (): SupabaseClient => {
  if (!supabaseServiceRoleKey) {
    console.error('Service role key is required for RLS bypass client');
    // Return regular client as fallback
    return supabaseClient;
  }
  
  return createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    },
    global: {
      headers: {
        'X-Client-Info': 'supabase-js/2.x',
        // Headers especiais para contornar o RLS
        'Authorization': `Bearer ${supabaseServiceRoleKey}`,
        'X-Supabase-Auth': 'service_role',
        'Prefer': 'return=representation'
      },
    },
  });
};

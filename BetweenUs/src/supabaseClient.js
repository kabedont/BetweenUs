import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://reabppamdimggxsbhcfa.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlYWJwcGFtZGltZ2d4c2JoY2ZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1MTIzODMsImV4cCI6MjA5MDA4ODM4M30.piC35mslUl_ReiyxQWkcmMUIf4Zb5lXRBrhFr_p2IF0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
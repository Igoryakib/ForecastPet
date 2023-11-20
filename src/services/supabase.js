import { createClient } from "@supabase/supabase-js";

const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqZG9obXdpeWNobGlpaG1ya3dmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4MDI4MDEsImV4cCI6MjAxNDM3ODgwMX0.y2C60-Ac2j7q6gW7-sU_qt829e4_jl7an_jCpJOzSyI";
const SUPABASE_URL = "https://bjdohmwiychliihmrkwf.supabase.co";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;

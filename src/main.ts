import { supabase } from './services/supabaseClient'

async function testConnection() {
  const { data, error } = await supabase.from('meal_logs').select('*')

  if (error) {
    console.error('Error fetching meal_logs:', error)
  } else {
    console.log('Fetched meal_logs:', data)
  }
}

testConnection()
export const env = {
  // RailRadar - server-side only
  RAILRADAR_API_KEY: process.env.RAILRADAR_API_KEY || "",
  RAILRADAR_BASE_URL:
    process.env.RAILRADAR_BASE_URL || "https://api.railradar.in/v1",

  // MapTiler - public/client-safe API key
  MAPTILER_API_KEY: process.env.NEXT_PUBLIC_MAPTILER_API_KEY || "",

  // OpenWeather - server-side only
  OPENWEATHER_API_KEY: process.env.OPENWEATHER_API_KEY || "",

  // OpenTopography - server-side only
  OPENTOPOGRAPHY_API_KEY: process.env.OPENTOPOGRAPHY_API_KEY || "",
};

// Client-safe config
export const clientEnv = {
  MAPTILER_API_KEY: process.env.NEXT_PUBLIC_MAPTILER_API_KEY || "",
};
export type SunriseSunset = {
  results: {
    sunrise: string;
    sunset: string;
    solar_noon: string;
    day_length: string;
    civil_twilight_begin: string;
    civil_twilight_end: string;
    nautical_twilight_begin: string;
    nautical_twilight_end: string;
    astronomical_twilight_begin: string;
    astronomical_twilight_end: string;
  };
  status: string;
};

export interface Weather {
  data: WeatherData;
}

export interface WeatherData {
  timelines: WeatherTimeline[];
}

export interface WeatherTimeline {
  timestep: string;
  endTime: string;
  startTime: string;
  intervals: WeatherInterval[];
}

export interface WeatherInterval {
  startTime: string;
  values: WeatherIntervalValues;
}

export interface WeatherIntervalValues {
  cloudCover: number;
  dewPoint: number;
  humidity: number;
  precipitationProbability: number;
  pressureSeaLevel: number;
  temperature: number;
  temperatureApparent: number;
  weatherCode: number;
  windDirection: number;
  windGust: number;
  windSpeed: number;
}

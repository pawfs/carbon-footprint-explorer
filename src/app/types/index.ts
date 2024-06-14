export type EmissionFactor = {
  id: string;
  activity_id: string;
  access_type: "private" | "public";
  name: string;
  category: string;
  sector: string;
  source: string;
  source_link: string;
  uncertainty: number | null;
  year: number;
  year_released: number;
  region: string;
  region_name: string;
  description: string;
  unit_type: string;
  unit: string;
  source_lca_activity: string;
  supported_calculation_methods: string[];
  factor: number | null;
  factor_calculation_method: "ar4" | "ar5" | "ar6" | null;
  factor_calculation_origin: "climatiq" | "source" | null;
  constituent_gases: Record<string, number>;
}

export type EmissionFactorSearchResult = {
  results: EmissionFactor[];
  current_page: number;
  last_page: number;
  total_results: number;
  possible_filters: Record<string, unknown>;
}
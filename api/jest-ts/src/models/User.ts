import { ActivityLevels, HeightUnits, SexUnits, WeightUnits } from "../Units";

export type TUser = {
  id?: number;
  name?: string;
  email?: string;
  email_verified_at?: string;
  must_verify_email_until?: string;
  created_at?: string;
  new_email?: string;
};

export type TProfile = {
  date_of_birth?: string; //"2005-01-25"
  weight?: {
    unit: WeightUnits;
    value: number;
  };
  height?: {
    unit: HeightUnits;
    value: number;
  };
  sex?: SexUnits;
  target_weight?: {
    unit: WeightUnits;
    value: number;
  };
  activity_level?: ActivityLevels;
};

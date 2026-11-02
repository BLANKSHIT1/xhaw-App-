export type BookingData = {
  packageName: string;
  playerCount: number;
  hours: number;
  isFullDay: boolean;
  subtotal: string;
  discountAmount: string;
  totalEstimate: string;
};

export type RootStackParamList = {
  Home: undefined;
  Homepage: undefined;
  About: undefined;
  AboutUS: undefined;
  Overview: undefined;
  Payment: { bookingData?: BookingData } | undefined;
  Contact: undefined;
  ContactUS: undefined;
  FAQ: undefined;
  CalculateFees: undefined;
  Signup: undefined;
  SignUp: undefined;
  Venues: undefined;
  Plans: undefined;
};
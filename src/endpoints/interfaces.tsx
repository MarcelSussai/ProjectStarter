export interface Mock01Data {
  status: number;
  results: {
    id: number;
    date: string;
    description: string;
    monetaryValue: number;
    percentage: number;
    text: string;
  }[];
}
export type IIgnore = {
  id: number;
  value: string;
  type: "Domain" | "Pattern";
  categories?: string[];
};

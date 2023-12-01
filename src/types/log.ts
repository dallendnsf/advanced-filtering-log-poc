export type ILog = {
  id: number;
  time: string;
  destination: string;
  reason: string;
  result: "Blocked" | "Allowed";
  site: string;
  deployment: string;
  localUserNameOrIpAddress: string;
  categories: string[];
};

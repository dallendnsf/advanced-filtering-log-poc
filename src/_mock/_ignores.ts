import { IIgnore } from "@/types/ignore";

export const _ignores: IIgnore[] = [
  {
    id: 1,
    value: "slack.com",
    type: "Domain",
    categories: ["Business", "Business: Slack"],
  },
  {
    id: 2,
    value: "slackb.com",
    type: "Domain",
    categories: ["Business", "Business: Slack"],
  },
  {
    id: 3,
    value: "*.slack.com",
    type: "Pattern",
  },
  {
    id: 4,
    value: "youtube.com",
    type: "Domain",
  },
];

import { ILog } from "@/types/log";
import { USERS } from "./_users";

export const _logs: ILog[] = [
  {
    id: 1,
    time: "10/25/23 14:12:30",
    destination: "reddit.com",
    reason: "reddit.com/r/*",
    result: "Blocked",
    site: USERS[0].site,
    deployment: USERS[0].deployment,
    localUserNameOrIpAddress: USERS[0].userName,
  },
  {
    id: 2,
    time: "10/25/23 14:12:20",
    destination: "app.slack.com",
    reason: "*.slack.com",
    result: "Blocked",
    site: USERS[1].site,
    deployment: USERS[1].deployment,
    localUserNameOrIpAddress: USERS[1].userName,
  },
  {
    id: 3,
    time: "10/25/23 14:12:15",
    destination: "events.launchdarkly.com",
    reason: "*.launchdarkly.com",
    result: "Allowed",
    site: USERS[1].site,
    deployment: USERS[1].deployment,
    localUserNameOrIpAddress: USERS[1].userName,
  },
  {
    id: 4,
    time: "10/25/23 14:12:05",
    destination: "ssl.gstatic.com",
    reason: "ssl.gstatic.com/*",
    result: "Allowed",
    site: USERS[0].site,
    deployment: USERS[0].deployment,
    localUserNameOrIpAddress: USERS[0].userName,
  },
  {
    id: 5,
    time: "10/25/23 14:11:54",
    destination: "mail.google.com",
    reason: "*.google.com/*",
    result: "Blocked",
    site: USERS[0].site,
    deployment: USERS[0].deployment,
    localUserNameOrIpAddress: USERS[0].userName,
  },
  {
    id: 6,
    time: "10/25/23 14:11:51",
    destination: "mail.google.com",
    reason: "*.google.com/*",
    result: "Blocked",
    site: USERS[0].site,
    deployment: USERS[0].deployment,
    localUserNameOrIpAddress: USERS[0].userName,
  },
  {
    id: 7,
    time: "10/25/23 14:11:43",
    destination: "reddit.com",
    reason: "reddit.com/r/*",
    result: "Blocked",
    site: USERS[1].site,
    deployment: USERS[1].deployment,
    localUserNameOrIpAddress: USERS[1].userName,
  },
  {
    id: 8,
    time: "10/25/23 14:11:25",
    destination: "www.googleapis.com",
    reason: "googleapis.com/*",
    result: "Allowed",
    site: USERS[0].site,
    deployment: USERS[0].deployment,
    localUserNameOrIpAddress: USERS[0].userName,
  },
  {
    id: 9,
    time: "10/25/23 14:11:20",
    destination: "edgeapi.slack.com",
    reason: "*.slack.com",
    result: "Allowed",
    site: USERS[1].site,
    deployment: USERS[1].deployment,
    localUserNameOrIpAddress: USERS[1].userName,
  },
  {
    id: 10,
    time: "10/25/23 14:11:16",
    destination: "app.slack.com",
    reason: "*.slack.com",
    result: "Blocked",
    site: USERS[0].site,
    deployment: USERS[0].deployment,
    localUserNameOrIpAddress: USERS[0].userName,
  },
  {
    id: 11,
    time: "10/25/23 14:11:12",
    destination: "ssl.gstatic.com",
    reason: "ssl.gstatic.com/*",
    result: "Allowed",
    site: USERS[0].site,
    deployment: USERS[0].deployment,
    localUserNameOrIpAddress: USERS[0].userName,
  },
  {
    id: 12,
    time: "10/25/23 14:11:05",
    destination: "www.googleapis.com",
    reason: "googleapis.com/*",
    result: "Allowed",
    site: USERS[0].site,
    deployment: USERS[0].deployment,
    localUserNameOrIpAddress: USERS[0].userName,
  },
  {
    id: 13,
    time: "10/25/23 14:10:57",
    destination: "reddit.com",
    reason: "reddit.com/r/*",
    result: "Blocked",
    site: USERS[1].site,
    deployment: USERS[1].deployment,
    localUserNameOrIpAddress: USERS[1].userName,
  },
  {
    id: 14,
    time: "10/25/23 14:10:55",
    destination: "mail.google.com",
    reason: "*.google.com/*",
    result: "Blocked",
    site: USERS[0].site,
    deployment: USERS[0].deployment,
    localUserNameOrIpAddress: USERS[0].userName,
  },
  {
    id: 15,
    time: "10/25/23 14:10:52",
    destination: "ssl.gstatic.com",
    reason: "ssl.gstatic.com/*",
    result: "Blocked",
    site: USERS[0].site,
    deployment: USERS[0].deployment,
    localUserNameOrIpAddress: USERS[0].userName,
  },
  {
    id: 16,
    time: "10/25/23 14:10:44",
    destination: "reddit.com",
    reason: "reddit.com/r/*",
    result: "Blocked",
    site: USERS[0].site,
    deployment: USERS[0].deployment,
    localUserNameOrIpAddress: USERS[0].userName,
  },
  {
    id: 17,
    time: "10/25/23 14:10:41",
    destination: "app.slack.com",
    reason: "*.slack.com",
    result: "Blocked",
    site: USERS[1].site,
    deployment: USERS[1].deployment,
    localUserNameOrIpAddress: USERS[1].userName,
  },
  {
    id: 18,
    time: "10/25/23 14:10:30",
    destination: "events.launchdarkly.com",
    reason: "*.launchdarkly.com",
    result: "Allowed",
    site: USERS[1].site,
    deployment: USERS[1].deployment,
    localUserNameOrIpAddress: USERS[1].userName,
  },
  {
    id: 19,
    time: "10/25/23 14:10:26",
    destination: "ssl.gstatic.com",
    reason: "ssl.gstatic.com/*",
    result: "Allowed",
    site: USERS[0].site,
    deployment: USERS[0].deployment,
    localUserNameOrIpAddress: USERS[0].userName,
  },
  {
    id: 20,
    time: "10/25/23 14:10:23",
    destination: "mail.google.com",
    reason: "*.google.com/*",
    result: "Blocked",
    site: USERS[0].site,
    deployment: USERS[0].deployment,
    localUserNameOrIpAddress: USERS[0].userName,
  },
  {
    id: 21,
    time: "10/25/23 14:10:18",
    destination: "mail.google.com",
    reason: "*.google.com/*",
    result: "Blocked",
    site: USERS[0].site,
    deployment: USERS[0].deployment,
    localUserNameOrIpAddress: USERS[0].userName,
  },
  {
    id: 22,
    time: "10/25/23 14:10:09",
    destination: "reddit.com",
    reason: "reddit.com/r/*",
    result: "Blocked",
    site: USERS[1].site,
    deployment: USERS[1].deployment,
    localUserNameOrIpAddress: USERS[1].userName,
  },
  {
    id: 23,
    time: "10/25/23 14:10:01",
    destination: "www.googleapis.com",
    reason: "googleapis.com/*",
    result: "Allowed",
    site: USERS[0].site,
    deployment: USERS[0].deployment,
    localUserNameOrIpAddress: USERS[0].userName,
  },
  {
    id: 24,
    time: "10/25/23 14:09:58",
    destination: "edgeapi.slack.com",
    reason: "*.slack.com",
    result: "Allowed",
    site: USERS[1].site,
    deployment: USERS[1].deployment,
    localUserNameOrIpAddress: USERS[1].userName,
  },
  {
    id: 25,
    time: "10/25/23 14:09:51",
    destination: "app.slack.com",
    reason: "*.slack.com",
    result: "Blocked",
    site: USERS[0].site,
    deployment: USERS[0].deployment,
    localUserNameOrIpAddress: USERS[0].userName,
  },
  {
    id: 26,
    time: "10/25/23 14:09:46",
    destination: "ssl.gstatic.com",
    reason: "ssl.gstatic.com/*",
    result: "Allowed",
    site: USERS[0].site,
    deployment: USERS[0].deployment,
    localUserNameOrIpAddress: USERS[0].userName,
  },
  {
    id: 27,
    time: "10/25/23 14:09:26",
    destination: "www.googleapis.com",
    reason: "googleapis.com/*",
    result: "Allowed",
    site: USERS[0].site,
    deployment: USERS[0].deployment,
    localUserNameOrIpAddress: USERS[0].userName,
  },
  {
    id: 28,
    time: "10/25/23 14:09:15",
    destination: "reddit.com",
    reason: "reddit.com/r/*",
    result: "Blocked",
    site: USERS[1].site,
    deployment: USERS[1].deployment,
    localUserNameOrIpAddress: USERS[1].userName,
  },
  {
    id: 29,
    time: "10/25/23 14:09:12",
    destination: "mail.google.com",
    reason: "*.google.com/*",
    result: "Blocked",
    site: USERS[0].site,
    deployment: USERS[0].deployment,
    localUserNameOrIpAddress: USERS[0].userName,
  },
  {
    id: 30,
    time: "10/25/23 14:08:59",
    destination: "ssl.gstatic.com",
    reason: "ssl.gstatic.com/*",
    result: "Blocked",
    site: USERS[0].site,
    deployment: USERS[0].deployment,
    localUserNameOrIpAddress: USERS[0].userName,
  },
  {
    id: 31,
    time: "10/25/23 14:08:47",
    destination: "reddit.com",
    reason: "reddit.com/r/*",
    result: "Blocked",
    site: USERS[0].site,
    deployment: USERS[0].deployment,
    localUserNameOrIpAddress: USERS[0].userName,
  },
  {
    id: 32,
    time: "10/25/23 14:08:34",
    destination: "app.slack.com",
    reason: "*.slack.com",
    result: "Blocked",
    site: USERS[1].site,
    deployment: USERS[1].deployment,
    localUserNameOrIpAddress: USERS[1].userName,
  },
  {
    id: 33,
    time: "10/25/23 14:08:22",
    destination: "events.launchdarkly.com",
    reason: "*.launchdarkly.com",
    result: "Allowed",
    site: USERS[1].site,
    deployment: USERS[1].deployment,
    localUserNameOrIpAddress: USERS[1].userName,
  },
  {
    id: 34,
    time: "10/25/23 14:08:12",
    destination: "ssl.gstatic.com",
    reason: "ssl.gstatic.com/*",
    result: "Allowed",
    site: USERS[0].site,
    deployment: USERS[0].deployment,
    localUserNameOrIpAddress: USERS[0].userName,
  },
  {
    id: 35,
    time: "10/25/23 14:08:04",
    destination: "mail.google.com",
    reason: "*.google.com/*",
    result: "Blocked",
    site: USERS[0].site,
    deployment: USERS[0].deployment,
    localUserNameOrIpAddress: USERS[0].userName,
  },
  {
    id: 36,
    time: "10/25/23 14:07:51",
    destination: "mail.google.com",
    reason: "*.google.com/*",
    result: "Blocked",
    site: USERS[0].site,
    deployment: USERS[0].deployment,
    localUserNameOrIpAddress: USERS[0].userName,
  },
  {
    id: 37,
    time: "10/25/23 14:07:39",
    destination: "reddit.com",
    reason: "reddit.com/r/*",
    result: "Blocked",
    site: USERS[1].site,
    deployment: USERS[1].deployment,
    localUserNameOrIpAddress: USERS[1].userName,
  },
  {
    id: 38,
    time: "10/25/23 14:07:30",
    destination: "www.googleapis.com",
    reason: "googleapis.com/*",
    result: "Allowed",
    site: USERS[0].site,
    deployment: USERS[0].deployment,
    localUserNameOrIpAddress: USERS[0].userName,
  },
  {
    id: 39,
    time: "10/25/23 14:07:24",
    destination: "edgeapi.slack.com",
    reason: "*.slack.com",
    result: "Allowed",
    site: USERS[1].site,
    deployment: USERS[1].deployment,
    localUserNameOrIpAddress: USERS[1].userName,
  },
  {
    id: 40,
    time: "10/25/23 14:07:20",
    destination: "app.slack.com",
    reason: "*.slack.com",
    result: "Blocked",
    site: USERS[0].site,
    deployment: USERS[0].deployment,
    localUserNameOrIpAddress: USERS[0].userName,
  },
  {
    id: 41,
    time: "10/25/23 14:07:16",
    destination: "ssl.gstatic.com",
    reason: "ssl.gstatic.com/*",
    result: "Allowed",
    site: USERS[0].site,
    deployment: USERS[0].deployment,
    localUserNameOrIpAddress: USERS[0].userName,
  },
  {
    id: 42,
    time: "10/25/23 14:07:14",
    destination: "www.googleapis.com",
    reason: "googleapis.com/*",
    result: "Allowed",
    site: USERS[0].site,
    deployment: USERS[0].deployment,
    localUserNameOrIpAddress: USERS[0].userName,
  },
  {
    id: 43,
    time: "10/25/23 14:06:59",
    destination: "reddit.com",
    reason: "reddit.com/r/*",
    result: "Blocked",
    site: USERS[1].site,
    deployment: USERS[1].deployment,
    localUserNameOrIpAddress: USERS[1].userName,
  },
  {
    id: 44,
    time: "10/25/23 14:06:52",
    destination: "mail.google.com",
    reason: "*.google.com/*",
    result: "Blocked",
    site: USERS[0].site,
    deployment: USERS[0].deployment,
    localUserNameOrIpAddress: USERS[0].userName,
  },
  {
    id: 45,
    time: "10/25/23 14:06:40",
    destination: "ssl.gstatic.com",
    reason: "ssl.gstatic.com/*",
    result: "Blocked",
    site: USERS[0].site,
    deployment: USERS[0].deployment,
    localUserNameOrIpAddress: USERS[0].userName,
  },
];

import { IUser } from "@/types/user";

export const USERS: IUser[] = [
  {
    site: "Headquarters",
    deployment: "DNSF-110-JSMITH",
    userName: "John Smith",
  },
  {
    site: "Location with a really long name that will exceed width",
    deployment: "DNSF-110-LONG_USERNAME_SHOULD_ELLIPSIS",
    userName: "PersonWithAReallyLongNameThatWillGetCutOff",
  },
];

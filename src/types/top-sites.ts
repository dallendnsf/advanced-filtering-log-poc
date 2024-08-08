export type ITopSites = {
  network_name: string;
  network_external_id?: string;
  total_requests: number;
  total_blocked_requests: number;
  threats_blocked: number;
  content_blocked: number;
};

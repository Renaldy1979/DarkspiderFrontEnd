import { ReactNode } from 'react';

export default interface IProject {
  id: string;
  code: string;
  name: string;
  initiative: string;
  segment_priority: string;
  portfolio: string;
  effort: string;
  brief_description: string;
  justification: string;
  request_date: string;
  scope_date: string;
  shipping_date: string;
  post_date: string;
  rollout_date: string;
  expectation_date: string;
  validated_scope: string;
  responsible_status: string;
  requester_id: string;
  status_id: string;
  created_at: string;
  updated_at: string;
  status: { id: string; description: string };
  requester: { id: string; name: string; avatar_url: string };
  creater: { id: string; name: string };
  updater: { id: string; name: string };
  children: ReactNode;
}

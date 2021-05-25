import { ReactNode } from 'react';
import IUser from './IUser';
import IStatus from './IStatus';

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
  status: IStatus;
  requester: IUser;
  creater: IUser;
  updater: IUser;
  children: ReactNode;
}

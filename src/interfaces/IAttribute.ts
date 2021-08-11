import IWorkflow from './IWorkflow';

export default interface IAttribute {
  id: string;
  segment_id: string;
  segment: {
    id: string;
    description: string;
  };
  origin: {
    id: string;
    description: string;
  };
  requester_id: string;
  requester: {
    id: string;
    name: string;
    avatar_url: string;
  };
  attribute_name: string;
  business_rule: string;
  calculation_rule: string;
  exception_rule: string;
  use_case: string;
  domain: string;
  is_null: string;
  in_use: string;
  segment_review: string;
  status_id: string;
  status: {
    id: string;
    description: string;
    color: string;
  };
  details_status_mkt: string;
  sprints: {
    id: string;
    description: string;
    status_id: string;
    status: { description: string };
    created_at: string;
    sprintsDates: {
      id: string;
      date_id: string;
      date: string;
      dates: { description: string };
    }[];
  }[];
  production_date: string;
  source: string;
  no_rules: string;
  frequency: string;
  more_details: string;
  workflows: IWorkflow[];
}

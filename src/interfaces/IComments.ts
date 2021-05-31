export default interface IComments {
  id: string;
  description: string;
  project_id: string;
  type_id: string;
  creater_id: string;
  creater: { id: string; name: string };
  type: { id: string; description: string; component: string; color: string };
  created_at: string;
  updated_at: string;
}

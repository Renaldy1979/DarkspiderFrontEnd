export default interface IWorkflow {
  id: string;
  status: {
    id: string;
    is_error: string;
  };
}

export default interface IAttributeInfDatabase {
  id: string;
  attribute_id: string;
  format: string;
  var_name: string;
  type: {
    id: string;
    description: string;
  };
  size: string;
  position: string;
  sprint_add: string;
  sprint_remove: string;
}

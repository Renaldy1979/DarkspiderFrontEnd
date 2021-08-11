export default interface IUser {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
  roles: [
    {
      id: string;
      description: string;
    },
  ];
}

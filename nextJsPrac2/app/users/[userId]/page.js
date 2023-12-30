import getUsers from "@/services/getuserData";

const page = async ({ params }) => {
  const users = await getUsers();
  const currentuserId = params.userId;
  const currentUserData = users[currentuserId - 1];
  return (
    <div>
      <h1>user docs</h1>
      <h2>{currentuserId}</h2>
      <h3>{currentUserData.name}</h3>
      <h3>{currentUserData.website}</h3>
    </div>
  );
};

export default page;

export async function generateStaticParams() {
  const users = await getUsers();
  return users.map((user) => {
    userId: user.id.toString();
  });
}

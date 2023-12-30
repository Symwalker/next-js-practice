import getUsers from "@/services/getuserData";
import Link from "next/link";

const page = async () => {
  const users = await getUsers();
  console.log(users);

  return (
    <div>
      <h1>User List</h1>

      {users.map((el) => (
        <h2 key={el.id}>
          <Link href={`/users/${el.id}`}>{el.name}</Link>   
        </h2>
      ))}
    </div>
  );
};

export default page;

async function userList() {
  let data = await fetch("https://dummyjson.com/users");
  data = await data.json();
  return data.users;
}

export default async function Page() {
  let users = await userList();
  return <div>
    {

       users.map((el,i)=>(
        <h1>{el.firstName}</h1>
       ))
    }
  </div>;
}

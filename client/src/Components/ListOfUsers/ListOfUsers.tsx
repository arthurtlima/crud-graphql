import { GET_ALL_USERS } from "../../Graphql/Queries";
import { useQuery } from "@apollo/client";

export function ListOfUsers() {
  const { data } = useQuery(GET_ALL_USERS);

  if (data) {
    console.log(data)
  }

  return (
    <div>
        {data && data.getAllUsers.map((user: any) => {
            return (
                <div key={user.id}>
                    <p>{user.name} / {user.username}</p>
                </div>
            )
        })}
    </div>
  );
}
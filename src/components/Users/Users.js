import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetUser } from "../../context/UserProvider";
import "./Users.css";

export default function Users() {
  //can be batched using useReducer hook
  const user = useGetUser();
  const [isLoading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const endPoint = "http://206.189.91.54//api/v1/users";
    const options = {
      headers: user,
    };

    //Immediately invoked function expressions
    (async () => {
      try {
        setLoading(true);
        const response = await fetch(endPoint, options);
        const jsonData = await response.json();

        if (response.status === 200) {
          // console.log(jsonData);
          setUsers(jsonData.data);
          setLoading(false);
        } else {
          //catch will get this error
          throw { custom: "failed to get users" };
        }
      } catch (err) {
        console.log(err);
        //if other than custom error, must be something else
        setError(err?.custom || "something went wrong");
        setLoading(false);
      }
    })(); //invocation here
  }, []);

  return (
    <div className="users-wrapper">
      <p>{error || ""}</p>
      {(!isLoading && (
        <ul className="users__list">
          {users.map(({ id, uid }) => {
            return (
              <Link to={`/client/User/${id}`} key={id}>
                <i className="fas fa-user iconic"></i>
                {uid}
              </Link>
            );
          })}
        </ul>
      )) ||
        "...LOADING"}
    </div>
  );
}

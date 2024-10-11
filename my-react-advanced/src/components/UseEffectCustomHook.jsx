import { useGlobalConext } from "./globalcontext/context";
import { useFetch } from "./hooks/useFetch";

const url = "https://api.github.com/users";
export const UseEffectCustomHook = () => {
  const { appName } = useGlobalConext();
  const { isLoading, isError, data: users } = useFetch(url); // Calling custom hook
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>There was an error...</h2>;
  }

  return (
    <section>
      <h3>{appName}: github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

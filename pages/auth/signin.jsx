import InputHandler from "../../hooks/inputHandler";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import useRequest from "../../hooks/use-request";
export default function SignUp() {
  const email = InputHandler();
  const password = InputHandler();
  const router = useRouter();

  // const [error, setError] = useState([]);
  const { doRequest, error } = useRequest({
    url: "https://ticketing.dev/api/users/signin",
    method: "post",
    body: {
      email: email.value,
      password: password.value,
    },
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = await doRequest();
    router.push("/");
  };
  return (
    <div className="container_wrap">
      <form className="container" onSubmit={onSubmit}>
        {error}
        <input type="email" placeholder="email" {...email} />
        <input type="password" placeholder="password" {...password} />
        <button>signin</button>
      </form>
      <style jsx>{`
        .container_wrap {
          display: grid;
          place-items: center;
        }
        .container {
          width: 50vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }
        input {
          border: 1px solid black;
          outline: none;
          padding: 10px;
          border-radius: 4px;
        }
        button {
          padding: 10px;
          //   align-self: flex-start;
          outline: none;
          border-radius: 4px;

          border: none;
          background: blue;
          color: white;
        }
        .error {
          color: red;
        }
      `}</style>
    </div>
  );
}

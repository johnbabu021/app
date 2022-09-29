import axios from "axios";
import { useState } from "react";

export default function useRequest({ url, method, body, onSucces = () => {} }) {
  const [error, setError] = useState([]);
  return {
    error,
    doRequest: async () => {
      await axios({
        method,
        url,
        data: body,
      })
        .then((response) => {
          onSucces();
          return response.data;
        })

        .catch((err) => {
          console.log(err);
          setError(
            err.response.data.errors.map((item, index) => {
              return (
                <p
                  key={index}
                  className="error"
                  style={{
                    color: "red",
                  }}
                >
                  {item?.message}
                </p>
              );
            })
          );

          throw err;
        });
    },
  };
}

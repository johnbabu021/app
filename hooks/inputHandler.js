import { useState } from "react";

export default function InputHandler() {
  const [state, setState] = useState("");
  return {
    value: state,
    onChange: (e) => {
      setState(e.target.value);
    },
  };
}

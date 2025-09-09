import { useEffect, useState } from "react";

export default function Forms() {
  //const [email, setEmail] = useState("sachin@gmail.com"); // initial value
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);

  function handleSubmit() {
    console.log(
      `the details have been stored in the database ie ${name} and ${email}`
    );
  }

  // ignore for logging purpose only
  // useEffect(() => {
  //   console.log(email, name);
  // }, [email, name]);

  return (
    <div>
      <h3>Newsletter Forms</h3>
      <form>
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />

        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name} // state to input
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

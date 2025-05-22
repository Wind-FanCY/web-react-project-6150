import { useState } from "react";

function Content({ username, onLogout }) {
  const [name, setName] = useState('');
  const catify = () => { // "wrapper" around setName
    setName('Jorts');
  };
  return (
    <>
      Hello {username}
      <button onClick={onLogout}>Logout</button>
      <p>Name is {name}</p>
      <CatifyButton catify={catify} />
    </>
  );
}

function CatifyButton({ catify }) {
  return (
    <button onClick={catify}>Catify!</button>
  );
}



export default Content;

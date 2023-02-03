import { useEffect } from "react";

const AI = () => {
  const getRandomUser = () => {
    return fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => console.log(data));
    }

  useEffect(() => {
    getRandomUser();
  }, [getRandomUser]);
  
  return (
    <div className="Art-Generator">
      <p>Art Generator Component</p>
      <p>Random Word: {getRandomUser}</p>
      <button onClick="getRandomUser()"></button>
    </div>
  )
}

export default AI
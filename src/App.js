import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const endpoint = `http://localhost:1337/auth/local`;
    const senha = {
      identifier: "Afonso",
      password: "Minhasenha@@",
    };
    const fecthData = async () => {
      const result = await axios.post(endpoint, senha);
      setUser(result.data.user);
      console.log(result.data.user.avatar);
    };
    fecthData();
  }, []);

  return (
    <div className="App">
      <h1>{`asd`}</h1>
    </div>
  );
}

export default App;

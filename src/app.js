import React, { useState } from "react";

import Movielist from "./components/Movielist.js";
const App = () => {
  const [selectedMovie,setSelectedMovie] = useState(null)

  return (
    <div>
<h1>Movies App</h1>
<Movielist/>
    </div>
  );
};

export default App;

import React from "react";
import Userelement from "./Userelement";

const User = ({ list }) => {
  console.log(list);
  return (
    <div>
      {list.map((element) => (
        <Userelement E={element} />
      ))}
    </div>
  );
};

export default User;

import React from "react";
import "../css/admin.css";

const Admin = () => {
  return (
    <div className="admin-about">
      Contact the admin here <br />
      <div className="color">
        <b>Sahil Palshetkar</b>
        <br />
        <u
          onClick={() =>
            (window.location.href = "mailto:sahilpalshetkar125@gmail.com")
          }
        >
          sahilpalshetkar125@gmail.com
        </u>
      </div>
    </div>
  );
};

export default Admin;

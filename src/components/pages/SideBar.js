import React, { useState, useEffect } from "react";
import classNames from "classnames";
//import "antd/dist/antd.css";
import "./Sidebar.css";
import AVVPlogo from '../../assets/images/AVVPlogo.png'
import { useNavigate } from "react-router-dom";

function Sidebar(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [channels, setChannels] = useState([]);
const navigate = useNavigate()

  return (
    <div className={classNames("sidebar", { nonVisible: !sidebarOpen })}>
      <div className="logo d-flex justify-content-between">
        <div className="logo-name" onClick={() => window.open("https://aumscb.amrita.edu/cas/login")} >
          <img
            src={AVVPlogo}
            alt=""
          />
        </div>
        {/* <img
          onClick={() => setSidebarOpen(true)}
          src="https://cdn.glitch.com/af45ea57-cc17-431c-a29e-191393077cfe%2Fcross.svg?v=1596721763254"
          alt=""
        /> */}
      </div>
      <div className="vertical-menu pt-2">
        <ul>
          <li>
            <img
              src="https://cdn.glitch.com/af45ea57-cc17-431c-a29e-191393077cfe%2Ficons8-menu-rounded-50.png?v=1596541736150"
              alt=""
            />
            <span>Inbox</span>
          </li>
          <li>
            <img
              src="https://cdn.glitch.com/af45ea57-cc17-431c-a29e-191393077cfe%2Fconversation.svg?v=1596542126344"
              alt=""
            />
            <span>Sent Items</span>
          </li>
          <li>
            <img
              src="https://cdn.glitch.com/af45ea57-cc17-431c-a29e-191393077cfe%2Fcopy.svg?v=1596543073128"
              alt=""
            />
            <span>Drafts</span>
          </li>
          <li>
            <img
              src="https://cdn.glitch.com/af45ea57-cc17-431c-a29e-191393077cfe%2Fbookmark.svg?v=1596542475338"
              alt=""
            />
            <span>Spam</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

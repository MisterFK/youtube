import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { userRequest } from "../Tools/requestMethods";
import AvatarInitial from "../miniComponents/AvatarInitial";
import { converDate } from "../../Tools/tools";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("user/?new=true");
        setUsers(res.data);
      } catch (error) {}
    };
    getUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Nouveaux Membres</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <AvatarInitial user={user} />
            {/* <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          /> */}
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
              <span className="widgetSmUserTitle">
                {converDate(user.createdAt)}
              </span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Détails
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

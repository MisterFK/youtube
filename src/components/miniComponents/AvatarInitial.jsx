import React from "react";

const AvatarInitial = ({ user }) => {
  const initial = user.username.slice(0, 2).toUpperCase();
  const encodedId = (string) => {
    var number = "0x";
    var length = string.length;
    for (var i = 0; i < length; i++)
      number += string.charCodeAt(i).toString(16);
    return number;
  };

  var color = Math.floor(Math.abs(Math.sin(encodedId(user._id)) * 16777215));
  color = color.toString(16);
  // pad any colors shorter than 6 characters with leading 0s
  while (color.length < 6) {
    color = "0" + color;
  }
  return (
    <span className="topAvatar" style={{ backgroundColor: "#" + color }}>
      {initial}
    </span>
  );
};

export default AvatarInitial;

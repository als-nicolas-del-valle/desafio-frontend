import React from "react";

function Avatar({ url, alt = "Avatar", size = "w-32 h-32", className = "" }) {
  return (
    <div
      className={`rounded-full overflow-hidden bg-gray-200 ${size} ${className}`}
    >
      <img src={url} alt={alt} className="object-cover w-full h-full" />
    </div>
  );
}

export default Avatar;

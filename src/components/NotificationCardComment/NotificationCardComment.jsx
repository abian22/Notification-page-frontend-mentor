import React from "react";

function NotificationCardComment({ imgSrc, content, timestamp, comment }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <img
          src={imgSrc}
          alt="Avatar"
          style={{ verticalAlign: "top", marginTop: "10px" }}
        />
      </div>
      <span
        style={{
          marginLeft: "70px",
          maxWidth: "90%",
          maxHeight: "110%",
          overflow: "hidden",
          wordWrap: "break-word",
          marginBottom: "20px",
          marginTop: "7px",
        }}
      >
        {content}
        <br />
        <span style={{ color: "grey", marginTop: "5px" }}>{timestamp}</span>
        <div className="comment" style={{ marginTop: "5px" }}>
          {comment}
        </div>
      </span>
    </>
  );
}

export default NotificationCardComment;

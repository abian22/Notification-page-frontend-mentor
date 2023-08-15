import React from 'react'

function NotificationCardPicture({ imgSrc, content, timestamp, picture }) {
  return (
   <>
         <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <img src={imgSrc} alt="Avatar" style={{ verticalAlign: "top", marginTop:"10px" }} />
            </div>
            <span
              style={{
                  marginLeft: "70px",
                  maxWidth: "50%",
                  maxHeight: "110%",
                  overflow: "hidden",
                  wordWrap: "break-word",
                  marginBottom: "20px",
                  marginTop:"7px",

              }}
            >
                  <img src={picture} style={{marginTop:"4px", right:"20%"}}/>
             {content}
              <br />
              <span style={{ color: "grey", marginTop: "5px" }}>{timestamp}</span>

            </span>
   </>
  )
}

export default NotificationCardPicture
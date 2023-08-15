import "./App.css";
import mark from "../src/assets/images/avatar-mark-webber.webp";
import angela from "../src/assets/images/avatar-angela-gray.webp";
import jacob from "../src/assets/images/avatar-jacob-thompson.webp";
import rizky from "../src/assets/images/avatar-rizky-hasanuddin.webp";
import kimberly from "../src/assets/images/avatar-kimberly-smith.webp";
import nathan from "../src/assets/images/avatar-nathan-peterson.webp";
import anna from "../src/assets/images/avatar-anna-kim.webp";
import picture from "../src/assets/images/image-chess.webp";
import CircleNotification from "./components/CircleNotification/circleNotification";
import NotificationCardPicture from "./components/NotificationCardPicture/NotificationCardPicture";
import NotificationCard from "./components/NotificationCard/NotificationCard";
import NotificationCardComment from "./components/NotificationCardComment/NotificationCardComment";
import { useState, useEffect } from "react";
function App() {
  const [isNotificatedMark, setIsNotificatedMark] = useState(true);
  const [isNotificatedAngela, setIsNotificatedAngela] = useState(true);
  const [isNotificatedJacob, setIsNotificatedJacob] = useState(true);
  const [count, setCount] = useState(0);

  function markAllRead() {
    setIsNotificatedMark(false);
    setIsNotificatedAngela(false);
    setIsNotificatedJacob(false);
  }

  useEffect(() => {
    setCount(
      (isNotificatedMark ? 1 : 0) +
        (isNotificatedAngela ? 1 : 0) +
        (isNotificatedJacob ? 1 : 0)
    );
  }, [isNotificatedMark, isNotificatedAngela, isNotificatedJacob]);

  return (
    <>
      <div className="container-fluid p-0 card" style={{ height: "auto" }}>
        <span style={{ right: "0" }}>
          {" "}
          <strong style={{ color: "black", marginLeft:"10px" }}>
            Notifications{" "}
            <span
              className="notiCounter"
              style={{
                border: "solid",
                color: "white",
                borderColor: "blue",
                borderRadius: "7px",
                backgroundColor: "blue",
                width: "20px",
                height: "18px",
                display: "inline-block",
                textAlign: "center",
                marginTop: "5px",
              }}
            >
              {" "}
              {count}{" "}
            </span>
          </strong>
          <span
            className="readButton"
            style={{ marginLeft: "42%", cursor: "pointer" }}
            onClick={() => markAllRead()}
          >
            {" "}
            mark all as read
          </span>
          <div className="row">
            <div
              className=" col-12 col-md-6 noticardstyle"
              style={{
                marginLeft: "25px",
                marginTop: "20px",
                height: "70px",
                width: "90%",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                backgroundColor:
                  isNotificatedMark === true ? " hsl(211, 68%, 94%)" : "white",
              }}
              onClick={() => setIsNotificatedMark(false)}
            >
              <NotificationCard
                imgSrc={mark}
                content={
                  <>
                    <strong style={{ color: "black" }}>Mark Webber</strong>{" "}
                    reacted to your recent post{" "}
                    <strong style={{ color: "hsl(219, 12%, 42%)" }}>
                      My first tournament today!{" "}
                    </strong>
                    {isNotificatedMark && <CircleNotification />}
                  </>
                }
                timestamp="1m ago"
              />
            </div>
            <div
              className="noti col-12 col-md-6 noticardstyle"
              style={{
                marginLeft: "25px",
                marginTop: "20px",
                height: "70px",
                width: "90%",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                backgroundColor:
                  isNotificatedAngela === true
                    ? " hsl(211, 68%, 94%)"
                    : "white",
              }}
              onClick={() => setIsNotificatedAngela(false)}
            >
              <NotificationCard
                imgSrc={angela}
                content={
                  <>
                    <strong style={{ color: "black" }}>Angela Gray</strong>{" "}
                    followed you {isNotificatedAngela && <CircleNotification />}
                  </>
                }
                timestamp="5m ago"
              />
            </div>
            <div
              className="col-12 col-md-6 noticardstyle"
              style={{
                marginLeft: "25px",
                marginTop: "20px",
                height: "70px",
                width: "90%",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                backgroundColor:
                  isNotificatedJacob === true ? " hsl(211, 68%, 94%)" : "white",
              }}
              onClick={() => setIsNotificatedJacob(false)}
            >
              <NotificationCard
                imgSrc={jacob}
                content={
                  <>
                    <strong style={{ color: "black" }}>Jacob Thompson</strong>{" "}
                    followed your group
                    <strong style={{ color: "darkblue" }}> Chess Club </strong>
                    {isNotificatedJacob && <CircleNotification />}
                  </>
                }
                timestamp="1 day ago"
              />
            </div>

            <div
              className="col-12 col-md-6 noticardstyle"
              style={{
                marginLeft: "25px",
                marginTop: "20px",
                height: "auto",
                width: "90%",
                borderRadius: "10px",
                display: "flex",
              }}
            >
              <NotificationCardComment
                imgSrc={rizky}
                content={
                  <>
                    {" "}
                    <strong style={{ color: "black" }}>
                      Rizky Hasanuddin
                    </strong>{" "}
                    sent you a private message{" "}
                  </>
                }
                timestamp="5 days ago"
                comment="Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and i´m already having lots of fun and improving my game."
              />
            </div>
            <div
              className="col-12 col-md-6 noticardstyle"
              style={{
                marginLeft: "25px",
                marginTop: "20px",
                height: "auto",
                width: "90%",
                borderRadius: "10px",
                display: "flex",
              }}
            >
              <NotificationCardPicture
                imgSrc={kimberly}
                content={
                  <>
                    {" "}
                    <strong style={{ color: "black" }}>
                      Kimberly Smith
                    </strong>{" "}
                    commented on your picture{" "}
                  </>
                }
                picture={picture}
                timestamp="1 week ago"
              />
            </div>
            <div
              className="col-12 col-md-6 noticardstyle"
              style={{
                marginLeft: "25px",
                marginTop: "20px",
                height: "70px",
                width: "90%",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <NotificationCard
                imgSrc={nathan}
                content={
                  <>
                    <strong style={{ color: "black" }}>Nathan Peterson</strong>{" "}
                    reacted to your recent post
                    <strong>
                      {" "}
                      5 end-game strategies to increase your win rate
                    </strong>
                  </>
                }
                timestamp="2 weeks ago"
              />
            </div>
            <div
              className="col-12 col-md-6 noticardstyle"
              style={{
                marginLeft: "25px",
                marginTop: "20px",
                height: "70px",
                width: "90%",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <NotificationCard
                imgSrc={anna}
                content={
                  <>
                    <strong style={{ color: "black" }}>Anna Kim</strong> left
                    the group
                    <strong style={{ color: "darkblue" }}> Chess Club</strong>
                  </>
                }
                timestamp="2 weeks ago"
              />
            </div>
          </div>
        </span>
      </div>
    </>
  );
}

export default App;

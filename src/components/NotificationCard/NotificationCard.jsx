

const NotificationCard = ({ imgSrc, content, timestamp }) => {
  return (
    <div className='col-12 col-md-6 ' style={{ marginLeft: "25px", marginTop: "20px", border: "solid", height: "70px", width: "90%", borderRadius: "10px", display: "flex", alignItems: "center" }}>
      <img src={imgSrc} alt="Avatar" />
      <span style={{ marginLeft: "70px", maxWidth: "90%", maxHeight: "100%", overflow: "hidden", wordWrap: "break-word", marginBottom: "12px" }}>
        {content}
        <br />
        <span style={{ color: "grey", marginTop: "5px" }}>
          {timestamp}
        </span>
      </span>
    </div>
  );
};

export default NotificationCard;
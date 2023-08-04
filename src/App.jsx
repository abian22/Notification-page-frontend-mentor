import './App.css'
import mark from "../src/assets/images/avatar-mark-webber.webp"
import angela from "../src/assets/images/avatar-angela-gray.webp"
import jacob from "../src/assets/images/avatar-jacob-thompson.webp"
import NotificationCard from './components/NotificationCard/NotificationCard'

function App() {
  return (
<>
      <div className="container-fluid p-0 card" style={{ height:"100vh",}}>
        <div className="row">
          <div className="col-12 col-md-6 noticardstyle" >
            <NotificationCard
            imgSrc={mark}
            content={<><strong>Mark Webber</strong> reacted to your recent post <strong style={{color:"hsl(219, 12%, 42%)"}}>My first tournament today!</strong></>}
            timestamp="1m ago"
          />
          </div>
          <div className="col-12 col-md-6 noticardstyle" >
            <NotificationCard
            imgSrc={angela}
            content={<><strong>Angela Gray</strong> followed you</>}
            timestamp="5m ago"
          />
          </div>
          <div className="col-12 col-md-6 noticardstyle" >
            <NotificationCard
            imgSrc={jacob}
            content={<><strong>Jacob Thompson</strong> followed your group <strong style={{color:"darkblue"}}>Chess Club</strong></>}
            timestamp="1 day ago"
          />
          </div>

          <div className='col-12 col-md-6 ' style={{ marginLeft: "25px", marginTop: "20px", border: "solid", height: "70px", width: "90%", borderRadius: "10px", display: "flex", alignItems: "center" }}>
      <img src={mark} alt="Avatar" />
      <span style={{ marginLeft: "70px", maxWidth: "90%", maxHeight: "100%", overflow: "hidden", wordWrap: "break-word", marginBottom: "4px" }}>
        contenido
        <br />
        <span style={{ color: "grey", marginTop: "5px" }}>
          tiempo
        </span>
        <div className="comment" style={{marginTop:"5px"}}>asdsad</div>
      </span>
    </div>
        </div>
   </div>
    </>
  )
}

export default App

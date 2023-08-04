import './App.css'
import mark from "../src/assets/images/avatar-mark-webber.webp"

function App() {
  return (
<>
      <div className="container-fluid p-0" style={{ height:"95vh"}}>
        <div className="row">
          <div className="col-12 col-md-6 card">
            <div className='col-12 col-md-6' style={{marginLeft:"25px", marginTop:"20px", border:"solid", height:"80px",width:"90%", borderRadius:"10px", display:"flex", alignItems:"center"}}>
              <img src={mark} />
              <span style={{ marginLeft:"70px",maxWidth: "90%", maxHeight: "100%", overflow: "hidden", wordWrap: "break-word", marginBottom:"22px" }}>
                aqui va el contenido de cada notificación
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

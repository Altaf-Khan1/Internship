import "./App.css";
import interior from "./images/interior.bmp";
function App() {
  return (
    <div className="App">
      <div className="footer">
        <button>Home</button>
        <button>About Us</button>
        <button>Goa Decor</button>
        <button>Projects</button>
        <button>Contact Us</button>
      </div>
      <div className="slideshow">
        <div className="slide">
          <img
            src="https://media.istockphoto.com/id/1190440285/photo/eclectic-living-room-interior-with-comfortable-velvet-corner-sofa-with-pillows.jpg?s=612x612&w=0&k=20&c=T87OfLSfrChREiVaDLJA4LIM2qvrc7UaosmxH75RY98="
            alt="img"
          ></img>
          <button className="contact">Contact Us</button>
        </div>
        <div className="slide">
          <img
            src="https://media.istockphoto.com/id/1182454657/photo/bohemian-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=qw37MGIiTL_jML3_Tbm4bM-jNLCrocSWj7DanhBr_bY="
            alt="img"
          ></img>
          <button className="contact">Contact Us</button>
        </div>
        <div className="slide">
          <img
            src="https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt="img"
          ></img>
          <button className="contact">Contact Us</button>
        </div>
        <div className="slide">
          <img
            src="https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?cs=srgb&dl=pexels-designecologist-1005058.jpg&fm=jpg"
            alt="img"
          ></img>
          <button className="contact">Contact Us</button>
        </div>
      </div>
      <div className="briefnote">
        <img
          src={interior}
          alt="Hall Interior"
          style={{
            width: "35%",
            height: "35%",
            padding: "5%",
            borderRadius: "18%",
            marginLeft: "15%",
          }}
        ></img>
        <p>
          ‘Criativo – The Design Lounge’ is a design studio with a co-working
          team of talented designers and artists. At Criativo, our architectural
          and interior designs aim at providing solutions that incorporate
          user-friendliness, cost-effectiveness and optimal utilisation of space
          in a single design. <br/>
          Ar. Roopa N.K.<br/>
          Proprietor and Director <br/>
          <button className="smallButton">About Us</button>
        </p>
      </div>
    </div>
  );
}

export default App;

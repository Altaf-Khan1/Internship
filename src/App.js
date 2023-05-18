import './App.css';

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
        <div class="slide">
          <img src="https://media.istockphoto.com/id/1190440285/photo/eclectic-living-room-interior-with-comfortable-velvet-corner-sofa-with-pillows.jpg?s=612x612&w=0&k=20&c=T87OfLSfrChREiVaDLJA4LIM2qvrc7UaosmxH75RY98=" alt="img"></img>
          <button className="contact">Contact Us</button>
        </div>
        <div class="slide">
          <img src="https://media.istockphoto.com/id/1182454657/photo/bohemian-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=qw37MGIiTL_jML3_Tbm4bM-jNLCrocSWj7DanhBr_bY=" alt="img">
          </img>
        </div>
        <div class="slide">
          <img src="https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="img"></img>
        </div>
        <div class="slide">
          <img src="https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?cs=srgb&dl=pexels-designecologist-1005058.jpg&fm=jpg" alt="img"></img>
        </div>
      </div>
    </div>
  );
}

export default App;

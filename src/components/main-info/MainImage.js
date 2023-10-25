import mainphoto from "../../photos/mainphoto.png";

const MainImage = () => {
  return (
    <section
      className="d-flex flex-column gap-3"
      style={{ position: "relative", textAlign: "center", color: "white" }}
    >
      <img
        className="img-fluid rounded"
        style={{ filter: "brightness(70%)" }}
        src={mainphoto}
        alt="mainphoto"
      />
      
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h1 className="fw-bold">TRAVEL TO EXPLORE</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies
          mi eget mauris
        </p>




        <div
          className="border border-0 rounded d-flex gap-4 p-2 justify-content-between align-items-center"
          style={{ backgroundColor: "white", opacity:"0.9", width:"140%", position: "absolute", left:"-120px" }}
        >
          <div className="d-flex flex-column">
            <h6 style={{ color: "black" }}>Where You Want to go</h6>
            <div className="input-group flex-nowrap">
              <span className="input-group-text" id="addon-wrapping">
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search your Location"
                aria-label="Search your Location"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>



          <div className="d-flex flex-column">
            <h6 style={{ color: "black" }}>Check-in</h6>
            <div className="input-group flex-nowrap">

              <input
                type="date"
                className="form-control"
                placeholder="Add Date"
                aria-label="Add Date"
              />
            </div>
          </div>


          <div className="d-flex flex-column">
            <h6 style={{ color: "black" }}>Check-out</h6>
            <div className="input-group flex-nowrap">
              <input
                type="date"
                className="form-control"
                placeholder="Add Date"
                aria-label="Add Date"
              />
            </div>
          </div>

          <div>
          <button className="btn btn-primary py-4 " type="submit" style={{backgroundColor:"#4468E2"}}>Explore Now</button>
          </div>


        </div>
      </div>
    </section>
  );
};
export default MainImage;

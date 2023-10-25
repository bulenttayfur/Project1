import { DestinationDatas } from "../../services/datas/DestinationData";
import "bootstrap/dist/js/bootstrap.min.js";
import inprogress from "../../photos/inprogress.jpeg"

function Destinations() {
  return (
    <>
      <section className="d-grid gap-3">
        <h2 className="text-center">Recommended Destination</h2>
        <nav>
          <div
            className="nav nav-tabs justify-content-center"
            id="nav-tab"
            role="tablist"
          >
            <button
              className="nav-link text-secondary active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              The Weekend Break
            </button>
            <button
              className="nav-link text-secondary"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              The Package Holiday
            </button>
            <button
              className="nav-link text-secondary"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              The Group Tour
            </button>
            <button
              className="nav-link text-secondary"
              id="nav-disabled-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-disabled"
              type="button"
              role="tab"
              aria-controls="nav-disabled"
              aria-selected="false"
            >
              Long Term Slow Travel
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
            tabIndex="0"
          >
            <div
              className="d-grid gap-4"
              style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
            >
              {DestinationDatas.map((data, id) => {
                id = crypto.randomUUID();
                return (
                  <div className="d-inline-flex" key={id}>
                    <div className="d-grid gap-3 justify-content-between border border-0 shadow p-3 bg-body rounded ">
                      <img
                        className="rounded w-100"
                        src={data.photo}
                        alt={data.title}
                        width={100}
                        height={200}
                      />
                      <div className="d-grid gap-1">
                        <h4 className="m-0">{data.title}</h4>
                        <p className="m-0">{data.info}</p>
                      </div>
                      <div className="d-grid gap-2">
                        <div className="d-flex justify-content-between">
                          <span className="d-flex gap-2">
                            <img src={data.icon1} alt={data.title} width={33} height={33} />
                            <img src={data.icon2} alt={data.title} width={33} height={33} />
                            <img src={data.icon3} alt={data.title} width={33} height={33} />
                          </span>
                          <span>{data.price}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span>{data.km}</span>
                          <span>{data.trip}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
            tabIndex="0"
          >
            <img src={inprogress} alt="in progress" width={"100%"} />
          </div>
          <div
            className="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
            tabIndex="0"
          >
            <img src={inprogress} alt="in progress" width={"100%"} />
          </div>
          <div
            className="tab-pane fade"
            id="nav-disabled"
            role="tabpanel"
            aria-labelledby="nav-disabled-tab"
            tabIndex="0"
          >
            <img src={inprogress} alt="in progress" width={"100%"} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Destinations;

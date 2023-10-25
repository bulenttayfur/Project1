import { BlogDatas } from "../../services/datas//BlogData";

function Blogs() {
  const firstElement = BlogDatas[0];
  const otherElements = BlogDatas.slice(1);

  return (
    <>
      <section className="d-grid gap-3">
        <h2 className="text-center">Blogs</h2>
        <div
          className="d-grid gap-2"
          style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
        >
          <div className="d-inline-flex">
            <div className="position-relative">
              <img
                className="rounded opacity-75"
                src={firstElement.photo}
                alt={firstElement.title}
                style={{ width: "100%", height: "100%" }}
              />
              <div className="d-flex align-items-center card-img-overlay text-white text-center position-absolute top-50 start-50 translate-middle">
                <h5>{firstElement.title}</h5>
              </div>
            </div>
          </div>
          <div className="d-grid gap-2">
            {otherElements.map((item, index) => (
              <div className="d-inline-flex" key={index}>
                <div className="position-relative">
                  <img
                    className="rounded opacity-75"
                    src={item.photo}
                    alt={item.title}
                    style={{ width: "100%", height: "100%" }}
                  />
                  <div className="d-flex align-items-center card-img-overlay text-white text-center position-absolute top-50 start-50 translate-middle">
                    <h5>{item.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;

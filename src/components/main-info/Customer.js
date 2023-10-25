import { CustomerDatas } from "../../services/datas//CustomerData";
import tick from "../../photos/tick.png";

function Customers() {
  return (
    <>
      <section className="d-grid gap-3">
        <h2 className="text-center">Happy Customers</h2>
        <div className="d-flex gap-5">
          {CustomerDatas.map((data, id) => {
            id = crypto.randomUUID();
            return (
              <div className="d-flex gap-3 shadow p-4 rounded" key={id}>
                <div className="d-flex align-items-start">
                  <img src={tick} alt="" width={60} />
                </div>
                <div>
                  <p>{data.comment}</p>
                  <div className="d-flex align-items-center gap-3">
                    <img
                      className="rounded-circle"
                      src={data.photo}
                      alt={data.name}
                      width={70}
                    />
                    <div>
                      <h6 className="m-0">{data.name}</h6>
                      <p className="m-0">{data.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Customers;

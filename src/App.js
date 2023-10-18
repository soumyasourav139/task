import MyChart from "./myChart";
import "./App.css";

function App(){
	const data = [
		{ month: 'January', value: 100 },
		{ month: 'February', value: 200 },
		{ month: 'March', value: 300 },
		{ month: 'April', value: 400 },
		{ month: 'May', value: 500 },
		{ month: 'June', value: 600 },
		{ month: 'July', value: 700 },
		{ month: 'August', value: 800 },
		{ month: 'September', value: 900 },
		{ month: 'October', value: 1000 },
		{ month: 'November', value: 1100 },
		{ month: 'December', value: 1200 },
	  ];
  return (
    <>
      <div className="column side">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <a href="">
                  <i className="bi bi-house-door-fill me-2"></i>
                  <span>Home</span>
                  <i className=" bi bi-caret-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #4
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #5
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #6
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="column rightSide">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <h1>right side</h1>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
            </form>
          </div>
        </nav>
        <div class="container ">
          <div class="row align-items-start g-4">
            <div class="col-3">
              <div className="headingFig">
                <div className=" row align-items-center">
                  <div className="col-6">
                    <span className="balance1 alignright">
                      <i class="bi bi-currency-dollar"></i>
                    </span>
                  </div>
                  <div className="col-6">
                    <span className="spanCmn spanMuted">Earning</span>
                    <span className="spanCmn spanFig">$198K</span>
                    <span className="spanCmn spanMon">
                      <span>
                        {" "}
                        <i class="bi bi-arrow-up"></i>37.8 %
                      </span>
                      this month
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-3">
              <div className="headingFig">
                <div className=" row align-items-center">
                  <div className="col-6">
                    <span className="balance1 order">
                      <i class="bi bi-border-all"></i>
                    </span>
                  </div>
                  <div className="col-6">
                    <span className="spanCmn spanMuted">orders</span>
                    <span className="spanCmn spanFig">$2.4K</span>
                    <span className="spanCmn spandown">
                      <span>
                        {" "}
                        <i class="bi bi-arrow-down"></i>2 %
                      </span>
                      this month
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-3">
              <div className="headingFig">
                <div className=" row align-items-center">
                  <div className="col-6">
                    <span className="balance1 balance">
                      <i class="bi bi-wallet2"></i>
                    </span>
                  </div>
                  <div className="col-6">
                    <span className="spanCmn spanMuted">Balance</span>
                    <span className="spanCmn spanFig">$2.4K</span>
                    <span className="spanCmn spandown">
                      <span>
                        {" "}
                        <i class="bi bi-arrow-down"></i>2 %
                      </span>
                      this month
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-3">
              <div className="headingFig">
                <div className=" row align-items-center">
                  <div className="col-6">
                    <span className="balance1 sales">
                      <i class="bi bi-duffle"></i>
                    </span>
                  </div>
                  <div className="col-6">
                    <span className="spanCmn spanMuted">Total sales </span>
                    <span className="spanCmn spanFig">$89K</span>
                    <span className="spanCmn spanMon">
                      <span>11 %</span>this week
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div className="MonthlyEarning">
			  <MyChart data={data} />
			  </div>
            </div>
            <div className="col-12">
              <h3>product</h3>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
              </form>
              <div className="product">
                <table className="customers">
                  <tr>
                    <th>
                      <span className="spanCmn spanMuted"> Product name </span>{" "}
                    </th>
                    <th>
                      <span className="spanCmn spanMuted">Stock</span>
                    </th>
                    <th>
                      <span className="spanCmn spanMuted"> Price</span>
                    </th>
                    <th>
                      <span className="spanCmn spanMuted"> Total Price </span>
                    </th>
                  </tr>
                  <tr>
                    <td>image</td>
                    <td>32 in stocks</td>
                    <td>$ 45.99</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>image</td>
                    <td>32 in stocks</td>
                    <td>$ 45.99</td>
                    <td>20</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  }

export default App;

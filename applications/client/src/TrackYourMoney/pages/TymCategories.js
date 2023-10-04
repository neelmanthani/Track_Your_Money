import React from "react";
import settings from "../../icons/catSet.svg";
import deleteIcon from "../../icons/delete.png";
import ".././css/tymcategories.css";
import SideBarComponent from "../components/SideBarComponent";
const TymCategories = () => {
  return (
    <div className="main-container-home">
      <section className="navbar">
        <div>
          <SideBarComponent />
        </div>
        <div className="settings">
          <img src={settings} alt="" />
        </div>
      </section>

      <div className="mainSection">
        <h1 style={{ fontWeight: 600, paddingBottom: "20px" }}>Categories</h1>
        <section class="fieldset">
          <h1>Current</h1>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tr>
              <td style={{ border: "1px solid #000", padding: "15px",width:"200px" }}>
                <h4 style={{ fontWeight: 500, margin: "5px" }}>Income</h4>
                <ul style={{paddingInline:"20px"}}>
                  <li>
                    <div
                      style={{
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Cash
                      <span style={{ marginLeft: "5px", marginTop: "5px" }}>
                        <img src={deleteIcon} alt="" width={15} />
                      </span>
                    </div>
                  </li>
                  <li>
                    <div
                      style={{
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Tips
                      <span style={{ marginLeft: "5px", marginTop: "5px" }}>
                        <img src={deleteIcon} alt="" width={15} />
                      </span>
                    </div>
                  </li>
                  <li>
                    <div
                      style={{
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Paycheck
                      <span style={{ marginLeft: "5px", marginTop: "5px" }}>
                        <img src={deleteIcon} alt="" width={15} />
                      </span>
                    </div>
                  </li>
                </ul>
              </td>
              <td style={{ border: "1px solid #000", padding: "10px" }}>
                <h4 style={{ fontWeight: 500, margin: "5px" }}>Expenses</h4>
                <ul style={{marginBlock:0,paddingInline:"20px"}}>
                  <li>
                    <div
                      style={{
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Rent
                      <span style={{ marginLeft: "5px", marginTop: "5px" }}>
                        <img src={deleteIcon} alt="" width={15} />
                      </span>
                    </div>
                  </li>
                  <li>
                    <div
                      style={{
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Subscriptions
                      <span style={{ marginLeft: "5px", marginTop: "5px" }}>
                        <img src={deleteIcon} alt="" width={15} />
                      </span>
                    </div>
                  </li>
                  <li>
                    <div
                      style={{
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Transportation
                      <span style={{ marginLeft: "5px", marginTop: "5px" }}>
                        <img src={deleteIcon} alt="" width={15} />
                      </span>
                    </div>
                  </li>
                  <li>
                    <div
                      style={{
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Mortgage/Rent
                      <span style={{ marginLeft: "5px", marginTop: "5px" }}>
                        <img src={deleteIcon} alt="" width={15} />
                      </span>
                    </div>
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </section>

        <h2 style={{ fontWeight: 500,marginBlockEnd:10 }}>New Category</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent:"space-between"
          }}
        >
          <div>
            <input
              type="text"
              placeholder="Online Shopping...|"
              id="newCatInput"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="radio"
                id="Income"
                name="fav_language"
                value="Income"
              />
              <label for="Income">Income</label>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="radio"
                id="Expenses"
                name="fav_language"
                value="Expenses"
                checked
              />
              <label for="Expenses">Expenses</label>
            </div>
          </div>

          <div>
            <button className="add_category_btn">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TymCategories;

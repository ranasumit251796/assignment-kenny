import React from "react";

function HomePage() {
  return (
    <div className="main">
      <div className="card">
        <div className="card-header flex">
          <h3 className="card-title">Schedule Details</h3>
          <div className="close-icon flex"><span>x</span></div>
        </div>

        <div className="card-content">
          <div className="timer flex">
            <h4 className="heading">Starts</h4>
            <div className="flex time-selector">
              <select>
                <option>May 16, 2023</option>
              </select>
              <span className="divider">-</span>
              <select className="time">
                <option>Set Time</option>
              </select>
            </div>
          </div>

          <div className="timer flex">
            <h4 className="heading">Starts</h4>
            <div className="flex time-selector">
              <select>
              <option>May 16, 2023</option>
              </select>
              <span className="divider">-</span>
              <select className="time">
              <option>Set Time</option>
              </select>
            </div>
          </div>

          <div className="textarea">
            <textarea>
              Notes
            </textarea>
          </div>
        </div>

        <div className="card-footer flex">
            <button>Save</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
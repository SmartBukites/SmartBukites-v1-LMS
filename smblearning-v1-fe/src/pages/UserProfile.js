import React from "react";
import "./UserProfile.css";

import enrolled from "../assets/svgs/book-round.svg";
import completed from "../assets/svgs/mark-complete.svg";
import inprogress from "../assets/svgs/time-progress.svg";

function UserProfile() {
  return (
    <div className="user-profile">
      <h1>User Profile</h1>

      <div className="user-info d-flex">
        <div className="name-avatar">
          <div className="name-id">
            <p>Badiru Abubakar</p>
            <p>USER ID: SMB-05406</p>
          </div>
        </div>
        <div className="courses-stat">
          <div className="content">
            <div className="enrolled d-flex">
              <img src={enrolled} alt="enrolled courses" />
              <div>
                <p>2</p>
                <p>Enrolled</p>
              </div>
            </div>
            <div className="completed d-flex">
              <img src={completed} alt="completed courses" />
              <div>
                <p>1</p>
                <p>Completed</p>
              </div>
            </div>
            <div className="in-progress d-flex">
              <img src={inprogress} alt="in-progress courses" />
              <div>
                <p>3</p>
                <p>Inprogress</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form action="" className="user-profile-form">
        <div className="form-row">
          <div class="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              class="form-control"
              id="firstName"
              placeholder="Badiru"
            />
          </div>
          <div class="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              placeholder="Abubakar"
            />
          </div>
        </div>
        <div class="form-group">
          <label htmlFor="emailAddress">Email address</label>
          <input
            type="email"
            class="form-control"
            id="emailAddress"
            placeholder="name@example.com"
          />
        </div>
        <div class="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            class="form-control"
            id="phoneNumber"
            placeholder="Enter your phone number"
          />
        </div>
        <div class="form-group">
          <label htmlFor="nationality">Nationality</label>
          <select class="form-control" id="nationality">
            <option>Select Nationality</option>
            <option>Nigeria</option>
            <option>Niger</option>
          </select>
        </div>
        <div class="form-group">
          <label htmlFor="stateRegion">State/Region</label>
          <select class="form-control" id="stateRegion">
            <option>Select State/Region</option>
            <option>Abia</option>
            <option>Adamawa</option>
          </select>
        </div>
        <div class="form-group">
          <label htmlFor="aboutMe">About me</label>
          <textarea name="aboutMe" id="aboutMe" cols="30" rows="10"></textarea>
        </div>

        <div className="text-center btn-holder">
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserProfile;

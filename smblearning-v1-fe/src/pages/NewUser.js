import React from "react";

import MainNavigation from "../components/MainNavigation";

import "./NewUser.css";

function NewUser(props) {
  return (
    <>
      <section className="new-user">
        <MainNavigation openDrawer={props.openDrawer} />
        <h1>Craete User</h1>
        <div className="cv">
          <form className="content form">
            <div class="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Example select</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default NewUser;

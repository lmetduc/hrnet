import "./createEmployee.css";
import React from "react";
import Header from "../../components/Header/Header";

export default function CreateEmployee() {
  return (
    <div className="main">
      <Header goTo="View Current Employees" link="/employeelist" />
      <div className="body">
        <h1>Create Employees</h1>

        <div className="main-page">
          <form className="main-form">
            <label>First Name</label>
            <input type="text" name="First Name" className="input"></input>
            <label>Last Name</label>
            <input type="text" name="Last Name" className="input"></input>
            <label>Date of Birth</label>
            <input type="date" name="Date of Birth" className="input"></input>
            <label>Start Date</label>
            <input type="date" name="Start Date" className="input"></input>
            <div className="second-form">
              Adress
              <label>Street</label>
              <input type="text" name="Start Date" className="input"></input>
              <label>City</label>
              <input type="text" name="Start Date" className="input"></input>
              <label>State</label>
              <select name="pets" id="pet-select">
                <option value="">--Please choose an option--</option>
                <option value="dog">France</option>
                <option value="cat">Italy</option>
                <option value="hamster">UK</option>
              </select>
              <label>Zip code</label>
              <input type="text" name="Zip code" className="input"></input>
            </div>
            <label>Department</label>
            <select name="pets" id="pet-select">
              <option value="">--Please choose an option--</option>
              <option value="dog">Marketing</option>
              <option value="cat">Italy</option>
              <option value="hamster">UK</option>
            </select>
          </form>
          <button type="submit" value="Save" classname="hrnet-button">
            Save{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

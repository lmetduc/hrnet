import "./createEmployee.css";
import React from "react";
import Header from "../../components/Header/Header";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addNewUser } from "../../features/employee";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

// import dep from '../../assets/datas/dep.json';

export default function CreateEmployee() {
  const dispatch = useDispatch();

  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [birthDateInput, setBirthDateInput] = useState("");
  const [startDateInput, setStartDateInput] = useState("");
  const [streetAddressInput, setStreetAddressInput] = useState("");
  const [cityAddressInput, setCityAddressInput] = useState("");
  const [stateAddressInput, setStateAddressInput] = useState("");
  const [departmentInput, setDepartmentInput] = useState("");
  const [zipCodeInput, setZipCodeInput] = useState("");
  const [dataState, setDataState] = useState([]);
  const [dataDepartment, setDataDepartment] = useState([]);

  /**
   *
   */
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log("coucou");

    dispatch(
      addNewUser({
        firstName: firstNameInput,
        lastName: lastNameInput,
        birthDate: birthDateInput,
        startDate: startDateInput,
        streetAddress: streetAddressInput,
        cityAddress: cityAddressInput,
        stateAddress: stateAddressInput,
        department: departmentInput,
        zipCode: zipCodeInput,
      })
    );
  };

  useEffect(() => {
    // const fetchData = async () => {
    //   const state = await fetch("/state.json");
    //   const json = await state.json();

    //   setData(json);
    // };
    // fetchData().catch(console.error);

    fetch("/state.json")
      .then((response) => {
        return response.json();
      })
      .then((dataState) => {
        setDataState(dataState);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // useEffect(() => {
  //   const fetchData2 = async () => {
  //     const dep = await fetch("/dep.json");
  //     const json2 = await dep.json();

  //     setDep(json2);
  //   };
  //   fetchData2().catch(console.error);
  // }, []);
  useEffect(() => {
    fetch("/dep.json")
      .then((response) => {
        return response.json();
      })
      .then((dataDepartment) => {
        setDataDepartment(dataDepartment);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="main">
      <DatePicker selected={startDateInput} onChange={(date) => setStartDateInput(date)} />
      <Header goTo="View Current Employees" link="/employeelist" />
      <div className="body">
        <h1>Create Employees</h1>

        <div className="main-page">
          <form className="main-form" onSubmit={handleSubmitForm}>
            <div className="label">
              <label>First Name</label>
              <input
                type="text"
                name="First Name"
                className="input"
                onChange={(e) => setFirstNameInput(e.target.value)}
              ></input>
            </div>

            <div className="label">
              <label>Last Name</label>
              <input
                type="text"
                name="Last Name"
                className="input"
                onChange={(e) => setLastNameInput(e.target.value)}
              ></input>
            </div>

            <div className="label">
              <label>Date of Birth</label>
              <input
                type="date"
                name="Date of Birth"
                className="input"
                onChange={(e) => setBirthDateInput(e.target.value)}
              ></input>
            </div>

            <div className="label">
              <label>Start Date</label>
              <input
                type="date"
                name="Start Date"
                className="input"
                onChange={(e) => setStartDateInput(e.target.value)}
              ></input>
              <DatePicker selected={startDateInput} onChange={(date) => setStartDateInput(date)} />
            </div>

            <div className="second-form">
              <duv className="name-adress">
              Address
              </duv>

              <div className="label">
                <label>Street</label>
                <input
                  type="text"
                  name="Start Date"
                  className="input"
                  onChange={(e) => setStreetAddressInput(e.target.value)}
                ></input>

              </div>
              <div className="label">
                <label>City</label>
                <input
                  type="text"
                  name="Start Date"
                  className="input"
                  onChange={(e) => setCityAddressInput(e.target.value)}
                ></input>
              </div>
              <div className="label">
                <label>State</label>
                <select
                  name="states"
                  id="states-select"
                  value={stateAddressInput}
                  onChange={(e) => setStateAddressInput(e.target.value)}
                >
                  <option value="">--Please choose an option--</option>
                  {dataState.map((states) => {
                    return (
                      <option key={states.abbreviation}>{states.name}</option>
                    );
                  })}
                </select>
              </div>
              <div className="label">
                <label>Zip code</label>
                <input
                  type="text"
                  name="Zip code"
                  className="input"
                  onChange={(e) => setZipCodeInput(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="label">
              <label>Department</label>
              <select
                name="pets"
                id="pet-select"
                value={departmentInput}
                onChange={(e) => setDepartmentInput(e.target.value)}
              >
                <option value="">--Please choose an option--</option>

                {dataDepartment.map((deps) => (
                  <option key={deps.departmentID}>{deps.departmentName}</option>
                ))}
              </select>
            </div>
                  <div className="button">
                  <button type="submit" value="Save" className="hrnet-button">
              Save
            </button>
                  </div>

          </form>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { tempData } from "./users";
import Fuse from "fuse.js";
import { useGetUser } from "../../context/UserProvider";
import "./maker.css";
import { Link } from "react-router-dom";

const users = tempData.data;
/* const loggedInUser = {
  //current user logged in
  //get user detail after Login or Signup
  "access-token": "g3c29Tkg2MS23vDdiPiDeQ",
  client: "tdluJrvdfrqEmGV_nCLpvQ",
  expiry: "1626966033",
  uid: "m1@m.com",
  id: 31
}; */

export default function Maker() {
  //states related to component --> can be merged to custom hook
  const [name, setName] = useState("");
  const [searchName, setSearchName] = useState("");
  const [options, setOptions] = useState(users);
  const [selection, setSelection] = useState([]);
  const user = useGetUser();

  //states related to submit --> can be merge with reducer
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fuse = new Fuse(options, {
    keys: ["uid"],
  });
  const loggedInUser = user;
  //current user logged in
  //get user detail after Login or Signup

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleSearchChange(e) {
    setSearchName(e.target.value);
  }

  //listened to by the options list via event bubbling
  function handleOptionsClick(e) {
    const id = parseInt(e.target.dataset.id);
    if (!id) {
      return;
    }
    //remove in options
    setOptions((prevOptions) =>
      prevOptions.filter((option) => option.id !== id)
    );

    //add in selection
    setSelection((prevSelection) => {
      const copy = prevSelection.map((select) => ({ ...select }));
      copy.push({ ...options.find((select) => select.id === id) }); //make a copy of found selection
      return copy;
    });
  }

  //listened to by the selection list via event bubbling
  function handleSelectionClick(e) {
    //listened to by the list via event bubbling
    const id = parseInt(e.target.dataset.id);
    if (!id) {
      return;
    }
    //remove in selected
    setSelection((prevSelection) =>
      prevSelection.filter((select) => select.id !== id)
    );
    //add in options
    setOptions((prevOptions) => {
      const copy = prevOptions.map((option) => ({ ...option }));
      copy.push({ ...selection.find((option) => option.id === id) });
      return copy;
    });
    setName("");
    setSearchName("");
    setSelection([]);
  }

  function handleSelectAll() {
    setSelection(users);
    setOptions([]);
  }

  function handleReset() {
    setSelection([]);
    setOptions(users);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name || selection.length <= 0) {
      return;
    }

    try {
      const data = {
        name,
        user_ids: selection.map((select) => select.id),
      };

      const endPoint = "http://206.189.91.54//api/v1/channels";
      const options = {
        method: "post",
        headers: {
          "content-type": "application/json",
          ...loggedInUser, //sets user access credentials
        },
        body: JSON.stringify(data),
      };

      setError(null);
      setLoading(true);
      const response = await fetch(endPoint, options);
      const jsonData = await response.json();

      if (response.status === 200 && !jsonData.errors) {
        setLoading(false);
        console.log(jsonData);
        alert("create channel success!");
      } else {
        //throw custom error that will go to catch block
        setLoading(false);
        throw { custom: jsonData?.errors?.[0] || "failed to login" };
      }
    } catch (err) {
      console.log(err);

      //if error is not custom, then it must be something else
      setError(err?.custom || "something wen't wrong");
      setLoading(false);
    }
  }

  return (
    <div className="maker_container">
      <form className="maker" onSubmit={handleSubmit}>
        <Link to="/client/chats">
          <div className="close-creator">
            <i className="fas fa-times"></i>
          </div>
        </Link>

        <h1 className="header">Create Channel</h1>
        <p className="error">
          {(isLoading && "..loading") || ""} {error || ""}
        </p>

        <div>
          <div>
            <div className="channel-maker__name">
              <label>Channel Name</label>
              <input
                className="maker__name"
                type="text"
                placeholder="type channel name"
                value={name}
                onChange={handleNameChange}
              />
            </div>

            <div>
              <p>selected: {selection.length}</p>

              <button
                className="maker__action"
                type="button"
                onClick={handleSelectAll}
              >
                select all
              </button>

              <button
                className="maker__action"
                type="button"
                onClick={handleReset}
              >
                reset
              </button>
            </div>

            <ul className="maker__selection" onClick={handleSelectionClick}>
              {selection.map((select) => (
                <li
                  key={select.id}
                  data-id={select.id}
                  className="maker__select"
                >
                  <i className="fas fa-user icon" />
                  {select.uid}
                </li>
              ))}
            </ul>
            <div className="search">
              <label className="maker_label">Search Users</label>
              <input
                className="maker__search"
                type="search"
                placeholder="search here"
                value={searchName}
                onChange={handleSearchChange}
              />
            </div>
            <ul className="maker__options" onClick={handleOptionsClick}>
              {fuse.search(searchName).map(({ item: option }) => (
                <li
                  key={option.id}
                  data-id={option.id}
                  className="maker__option"
                >
                  <i className="fas fa-user icon" />
                  {option.uid}
                </li>
              ))}
            </ul>
          </div>
          <div className="action__submit">
            <button className="maker__action" type="submit">
              submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

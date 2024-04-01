import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../redux/actions";
import { HouseDoorFill } from "react-bootstrap-icons";
import { BookFill } from "react-bootstrap-icons";

const Sidebar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchData(query));
  };

  return (
    <nav class="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
      <div class="container flex-column align-items-start">
        <a class="navbar-brand" href="index.html">
          <img src="logo.png" alt="Spotify Logo" width="131" height="40" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <ul>
              <li>
                <a class="nav-item nav-link d-flex align-items-center" href="/">
                  <HouseDoorFill />
                  Home
                </a>
              </li>
              <li>
                <a class="nav-item nav-link d-flex align-items-center" href="/">
                  <BookFill /> Your Library
                </a>
              </li>
              <li>
                <form class="input-group mt-3" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    class="form-control"
                    id="searchField"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                    value={query}
                    onChange={onChange}
                  />
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary btn-sm h-100" type="submit">
                      GO
                    </button>
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="nav-btn d-flex flex-column align-items-center">
        <button class="btn signup-btn" type="button">
          Sign Up
        </button>
        <button class="btn login-btn" type="button">
          Login
        </button>
        <a href="/">Cookie Policy</a> |<a href="/"> Privacy</a>
      </div>
    </nav>
  );
};
export default Sidebar;

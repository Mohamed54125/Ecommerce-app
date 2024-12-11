import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-2">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-muted">
                    Home
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-muted">
                    Products
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-muted">
                    About
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-muted">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-2">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-muted">
                    Home
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-muted">
                    Products
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-muted">
                    About
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-muted">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-2">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-muted">
                    Home
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-muted">
                    Products
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-muted">
                    About
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-muted">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-4 offset-1">
              <form>
                <div className="d-flex w-100 gap-2">
                  <label for="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <button className="btn btn-success" type="button">
                    search
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex justify-content-between py-4 my-4 border-top">
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <Link className="link-dark" href="#">
                  <svg className="bi" width="24" height="24"></svg>
                </Link>
              </li>
              <li className="ms-3">
                <Link className="link-dark">
                  <svg className="bi" width={24} height={24}></svg>
                </Link>
              </li>
              <li className="ms-3">
                <Link className="link-dark">
                  <svg className="bi" width="24" height="24"></svg>
                </Link>
              </li>
            </ul>
          </div>
          <p className="text-center">
            All rights reserved &#xA9; 2024
            <Link
              target="_blank"
              to="https://www.facebook.com/mohamed.doana.1848?mibextid=ZbWKwL"
              style={{ fontWeight: "bolder", color: "black" }}
            >
              {" "}
              Muhammed Mondy.
            </Link>
          </p>
          <p className="text-center">
            <Link
              target="_blank"
              to="https://www.facebook.com/mohamed.doana.1848?mibextid=ZbWKwL"
              style={{ fontWeight: "bolder", color: "black" }}
            >
              <i class="fa-brands fa-facebook me-3"></i>
            </Link>
            <Link
              target="_blank"
              to="https://github.com/Mohamed54125"
              style={{ fontWeight: "bolder", color: "black" }}
            >
              <i class="fa-brands fa-github me-3"></i>{" "}
            </Link>
            <Link
              target="_blank"
              to="https://www.instagram.com/muhamed_mondy.11/profilecard/?igsh=MW0xczF3NnByamFvMQ=="
              style={{ fontWeight: "bolder", color: "black" }}
            >
              <i class="fa-brands fa-instagram"></i>{" "}
            </Link>
          </p>
        </footer>
      </div>
    </>
  );
};

export default Footer;

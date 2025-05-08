import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DashboardNavbar.css";
import axios from "axios";

const DashboardNavbar = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      axios.get(`http://localhost:8080/students/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
  });

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  const userRole = localStorage.getItem("role").toLocaleLowerCase();
  const userId = localStorage.getItem("id");

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar shadow-sm">
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to={
            userRole === "admin"
              ? "/admin/dashboard"
              : `/student/dashboard/${userId}`
          }
        >
          <i className="bi bi-mortarboard-fill me-2"></i> Couma
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center">
            {userRole === "admin" && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/courses">
                    Manage Courses
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/add-course">
                    Add Course
                  </Link>
                </li>
              </>
            )}

            {userRole === "student" && (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to={`/student/dashboard/${userId}`}
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={`/student/courses/${userId}`}>
                    Browse Courses
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to={`/student/enrollments/${userId}`}
                  >
                    My Enrollments
                  </Link>
                </li>
              </>
            )}

            <li className="nav-item ms-3">
              <button
                onClick={handleLogout}
                className="btn btn-outline-light btn-sm rounded px-4"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;

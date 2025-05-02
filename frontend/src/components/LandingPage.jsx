import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGraduationCap, FaChartLine, FaHeadset } from "react-icons/fa";
import Navbar from "./navbar/Navbar";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section section-padding d-flex align-items-center justify-content-center">
        <div className="hero-content">
          <div className="container text-center">
            <h1 className="hero-title display-1">
              Transform Your Future with EduSync
            </h1>
            <p className="body-large mb-responsive">
              Unlock your potential with cutting-edge courses and personalized
              learning
            </p>
            <div className="flex-responsive justify-content-center">
              <a
                href="/register"
                className="btn btn-custom btn-custom-primary btn-responsive"
              >
                Start Learning
              </a>
              <a
                href="/courses"
                className="btn btn-custom btn-custom-light btn-responsive"
              >
                Explore Courses
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section section-padding d-flex align-items-center justify-content-center">
        <div className="container">
          <h2 className="text-center fw-bold mb-responsive h1">
            Why Choose EduSync?
          </h2>
          <div className="responsive-grid">
            <div className="feature-card responsive-card">
              <div className="feature-icon">
                <FaGraduationCap />
              </div>
              <h4 className="h3">Interactive Learning</h4>
              <p className="body">
                Engage with dynamic content and real-world projects
              </p>
            </div>
            <div className="feature-card responsive-card">
              <div className="feature-icon">
                <FaChartLine />
              </div>
              <h4 className="h3">Track Progress</h4>
              <p className="body">
                Monitor your growth with detailed analytics
              </p>
            </div>
            <div className="feature-card responsive-card">
              <div className="feature-icon">
                <FaHeadset />
              </div>
              <h4 className="h3">24/7 Support</h4>
              <p className="body">Get help whenever you need it</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section-padding text-center d-flex align-items-center justify-content-center">
        <div className="container">
          <h2 className="fw-bold mb-responsive h1">
            Ready to Begin Your Journey?
          </h2>
          <p className="body-large mb-responsive">
            Join our community of learners today
          </p>
          <div className="flex-responsive justify-content-center">
            <a
              href="/register"
              className="btn btn-custom btn-custom-primary btn-responsive"
            >
              Get Started
            </a>
            <a
              href="/login"
              className="btn btn-custom btn-custom-light btn-responsive"
            >
              Sign In
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light py-responsive text-center">
        <p className="body-small mb-0">
          &copy; {new Date().getFullYear()} EduSync. All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default LandingPage;

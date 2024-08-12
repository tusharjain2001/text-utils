import React from "react";

export default function About() {
  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Know About Us
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Welcome to our Text Editor!</strong> Our text editor is
              built with the user in mind, constantly evolving to incorporate
              new features and improvements based on your feedback. We are
              committed to providing a reliable, efficient, and enjoyable
              writing experience for everyone. Thank you for choosing our Text
              Editor.<br/><br/>
              <strong>We’re excited to be a part of your writing journey!</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

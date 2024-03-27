import React from "react";

const educationDeatails=[
    {degree:"   ",
    university:"  ",
    year:"",
    percantage: "",
}

];
function EducationDetails() {
    return (
      <div>
        <h2>Education</h2>
        <ul>
          {educationDetails.map((education, index) => (
            <li key={index}>
              <strong>{education.degree}</strong><br />
              {education.university} - {education.graduationYear}
            </li>
          ))}
        </ul>
      </div>
    );
  }
export default EducationDetails;
import React from "react";
import "./index.css";

function App() {
  return (
    <div className="flex-container">
      <h1>Who is Briana Ailyn Ramos?</h1>
      <h2>bri232308@gmail.com</h2>
      <h1>About Me</h1>
      <div className="container">
        {" "}
        My name is Briana A. Ramos, and I am 16 years old, born on December 23,
        2008. Currently, I am in the 12th grade and will be graduating a year
        early. I made the decision to graduate early to gain a head start on my
        aspiration of becoming a clinical psychologist.
      </div>
      <h1>My Goals And Dreams..</h1>
      <div className="ok-container">
        Upon completing high school, I intend to pursue a degree in Psychology
        in college. The college I will be attending is NYIT. After I finish all
        years of school needed, I will relocate from New York, and ultimately
        aspire to become a Clinical Psychologist.
      </div>
      <h1>Resume</h1>
      <h2>Experience</h2>
      <div className="yes-container">
        Experience Summer Youth Employment Program 2024 Responsibilities:
        Created health and wellness presentation Babysitting Responsibilities:
        Include working for children ages 2,4,7, and 8. El puente, March 2025-
        May 2025 Responsiblities: Digital Stuartship/ Scholars industry Program
      </div>
      <h2>Coursework</h2>
      <div className="no-container">
      Honors ELA-
Honor Roll Spanish 102-
Physics-
Forensics-
Ap African American Study-
College Algebra-
College Sociology-
      </div>
  <h2> Skills </h2>
  <div className="m-container">
  Strong Writing skills-
Strong listener-
Fast learner-
Detail Oriented-
Strong Communicator
 </div>
   <h2> Extracurricular Activities</h2>
  <div className="n-container">
  Pathway Matching Career Course, 2024
ELA: Storytelling For Social Chance, 2024
My sisters Keeper 2023-24
  </div>
</div>
  );
}

function BasicExample() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}
export default App;

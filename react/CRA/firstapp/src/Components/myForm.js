import { useState } from "react";

const Myform = () => {
  const [fname, setFname] = useState("veda");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const [cpswd, setCpswd] = useState("");

  return (
    <>
      <form action="#">
        <div>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            name="firstName"
            id="fname"
            onChange={(e) => setFname(e.target.value)}
            value={fname}
          />
        </div>
        <div>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lname"
            onInput={(e) => setLname(e.target.value)}
            value={lname}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="emailId"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="pswd">Password</label>
          <input
            type="password"
            name="pswd"
            id="pswd"
            value={pswd}
            onChange={(e) => {
              setPswd(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="cPswd">Confirm Password</label>
          <input
            type="password"
            name="cPswd"
            id="cPswd"
            value={cpswd}
            onChange={(e) => {
              setCpswd(e.target.value);
            }}
          />
        </div>
      </form>
      <div>
        <h4>Your form data</h4>
        <p>First Name: {fname}</p>
        <p>Last Name : {lname}</p>
        <p>EMail:{email}</p>
        <p>Password:{pswd}</p>
        <p>Confirm Password:{cpswd}</p>
      </div>
    </>
  );
};

export default Myform;

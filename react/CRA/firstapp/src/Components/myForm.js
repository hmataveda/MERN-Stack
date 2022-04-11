import { useState } from "react";

const Myform = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const [cpswd, setCpswd] = useState("");
  const [fnerr, setFnerr] = useState("");
  const [lnerr, setLnerr] = useState("");
  const [Emerr, setEmerr] = useState("");
  const [Pswderr, setPswderr] = useState("");
  const [Cpswderr, setCpswderr] = useState("");

  const handleValidations = (e) => {
    if (e.target.id == "fname") setFname(e.target.value.toUpperCase());
    if (e.target.id == "fname" && e.target.value.length < 1) {
      setFnerr("Please enter your first name");
    } else if (e.target.id == "fname" && e.target.value.length < 2) {
      setFnerr("First Name must be atleast two characters");
    } else {
      if (e.target.id == "fname") setFnerr("");
    }

    if (e.target.id == "lname") setLname(e.target.value.toUpperCase());
    if (e.target.id == "lname" && e.target.value.length < 1) {
      setLnerr("Please enter your last name");
    } else if (e.target.id == "lname" && e.target.value.length < 2) {
      setLnerr("Last Name must be atleast two characters");
    } else {
      if (e.target.id == "lname") setLnerr("");
    }

    if (e.target.id == "email") setEmail(e.target.value);
    if (e.target.id == "email" && e.target.value.length < 1) {
      setEmerr("Please enter your email");
    } else if (e.target.id == "email" && e.target.value.length < 2) {
      setEmerr("Email must be atleast two characters");
    } else {
      if (e.target.id == "email") setEmerr("");
    }
    if (e.target.id == "pswd") setPswd(e.target.value);
    if (e.target.id == "pswd" && e.target.value.length < 1) {
      setPswderr("Please enter your password");
    } else if (e.target.id == "pswd" && e.target.value.length < 8) {
      setPswderr("Password must be atleast 8 characters");
    } else {
      if (e.target.id == "pswd") setPswderr("");
    }

    if (e.target.id == "cPswd") setCpswd(e.target.value);
    if (
      (e.target.id == "cPswd" && e.target.value.length < 8) ||
      (e.target.id == "cPswd" &&
        e.target.value != e.target.form.elements.password.value)
    ) {
      setCpswderr("Password must match");
    } else {
      if (e.target.id == "cPswd") setCpswderr("");
    }
  };

  const submitButton = (e) => {
    e.preventDefault();
    console.log(e);
    setFname("");
    setLname("");
    setEmail("");
    setPswd("");
    setCpswd("");
  };

  return (
    <>
      <form action="#" onSubmit={submitButton}>
        <div>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            name="firstName"
            id="fname"
            onChange={handleValidations}
            value={fname}
          />
          {fnerr ? <p>{fnerr} </p> : ""}
        </div>
        <div>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lname"
            onInput={handleValidations}
            value={lname}
          />
          {lnerr ? <p>{lnerr}</p> : ""}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="emailId"
            id="email"
            onChange={handleValidations}
            value={email}
          />
          {Emerr ? <p>{Emerr} </p> : ""}
        </div>
        <div>
          <label htmlFor="pswd">Password</label>
          <input
            type="password"
            name="password"
            id="pswd"
            value={pswd}
            onChange={handleValidations}
          />
          {Pswderr ? <p>{Pswderr} </p> : ""}
        </div>
        <div>
          <label htmlFor="cPswd">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="cPswd"
            value={cpswd}
            onChange={handleValidations}
          />
          {Cpswderr ? <p>{Cpswderr}</p> : ""}
        </div>
        {fnerr ||
        lnerr ||
        Emerr ||
        Pswderr ||
        Cpswderr ||
        !fname ||
        !lname ||
        !email ||
        !pswd ||
        !cpswd ? (
          <button disabled>Submit</button>
        ) : (
          <input type="submit" value="Submit" />
        )}
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

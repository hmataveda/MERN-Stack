import { useState } from "react";
const FormMessage = (props) => {
  const [message, setMessage] = useState("hiii");
  console.log("form messgae");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.sendMessage(message);
    setMessage("");
  };

  const handleInputMessage = (e) => {
    setMessage(e.target.value);
  };
  return (
    <>
      <form action="#" onSubmit={handleFormSubmit}>
        <h4>Set Message</h4>
        <textarea
          name="msg"
          id="msg"
          cols="30"
          rows="10"
          onChange={handleInputMessage}
          value={message}
        ></textarea>
        {message && <input type="submit" value="Send Message" />}
        {!message && <input type="submit" value="Send Message" disabled />}
      </form>
    </>
  );
};

export default FormMessage;

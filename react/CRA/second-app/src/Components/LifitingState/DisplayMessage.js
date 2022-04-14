const DisplayMessage = (props) => {
  console.log("here in diplay", props.msg);
  return (
    <>
      <p>Here is the Message..... "{props.msg}"</p>
    </>
  );
};

export default DisplayMessage;

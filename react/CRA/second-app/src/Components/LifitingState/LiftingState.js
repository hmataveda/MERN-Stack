import FormMessage from "./FormMessage";
// import DisplayMessage from "./DisplayMessage";

const Liftingstate = (props) => {
  console.log("lift main form");

  const gettingMessage = (msg) => {
    console.log("in lift", msg);
    props.sendMsg(msg);
  };
  return (
    <>
      <FormMessage sendMessage={gettingMessage}></FormMessage>
    </>
  );
};

export default Liftingstate;

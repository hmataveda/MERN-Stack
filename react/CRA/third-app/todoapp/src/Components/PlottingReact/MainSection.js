const Main = () => {
  return (
    <main className="col-10">
      <div className="bg-danger p-3">
        <div className="row gx-3 justify-content-center">
          <Section></Section>
          <Section></Section>
          <Section></Section>
        </div>
        <footer className="border border-2 border-dark mt-3"></footer>
      </div>
    </main>
  );
};

const Section = () => {
  return (
    <section className="col ">
      <div className=" bg-warning border boder-2 border-dark"></div>
    </section>
  );
};

export default Main;

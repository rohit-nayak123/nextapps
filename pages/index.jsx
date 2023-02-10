import Test from "../components/Test";
// how to import conponents in next js
// how to call a function in next js
function index() {
  return (
    <>
      <div>
        <p>hello world</p>
      </div>
      <form action="">
        <div>
          <input
            type="text"
            name="name"
            id="intputName "
            placeholder="First name"
            required
            autoComplete="off"
          />
        </div>
        <div>
          <input
            type="text"
            name="name"
            id="intputName "
            placeholder="Last name"
            required
            autoComplete="off"
          />
        </div>
        <div>
          <input
            type="email"
            name="name"
            id="intputName "
            placeholder="E-mail"
            required
            autoComplete="off"
          />
        </div>
        <button type="submit" id="btn">
          Submit
        </button>
      </form>
      <Test name="baby" />
    </>
  );
}
export default index;

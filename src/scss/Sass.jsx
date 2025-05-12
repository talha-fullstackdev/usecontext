import useTitle from "../UseTitle";
import "./app.css";
const Sass = () => {
  useTitle("scss tutorial");
  return (
    <>
      <div className="main_div">
        <h1 className="heading">Talha Nawaz</h1>
        <h1 className="para">24 years old</h1>
        <h1 className="para">from abbottabad</h1>
        <h1 className="para">lives in lahore</h1>
        <button className="btn1">click me</button>
        <button className="btn2">click me</button>
      </div>
      <h1 className="import_color">imported variables from another file</h1>
      <p className="paragraph1">mix color using mixing function</p>
      <p className="paragraph2">mix color using mixing function</p>
      <p className="paragraph3">mix color using mixing function</p>
    </>
  );
};

export default Sass;

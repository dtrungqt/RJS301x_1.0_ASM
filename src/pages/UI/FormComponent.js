import Card from "./CardComponent";
import "./FormComponent.css";

const Form = () => {
  return (
    <Card className="text-center container_form">
      <h1 className="form_titel">
        <strong>Save time, save money!</strong>
      </h1>
      <p className="form_message">
        Sign up and we'll send the best deals to you
      </p>
      <form>
        <input
          type="email"
          placeholder="You Email"
          className="form_btn_email"
        />
        <button type="button" className="btn form_btn_submit ml-2 btn-primary">
          Subscribe
        </button>
      </form>
    </Card>
  );
};

export default Form;

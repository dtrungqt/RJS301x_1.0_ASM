import "./FooterComponent.css";

const Footer = (props) => {
  const footerRender = props.footerListData.map((footer) => {
    return (
      <div className="col-2 container_footer_list" key={footer.col_number}>
        {footer.col_values.map((list) => (
          <p key={Math.random().toString()}>{list}</p>
        ))}
      </div>
    );
  });
  return (
    <div className="container-fluid mt-4">
      <div className="row  justify-content-center">{footerRender}</div>
    </div>
  );
};
export default Footer;

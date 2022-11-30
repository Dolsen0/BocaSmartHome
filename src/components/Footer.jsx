export default function Footer() {
  const options = ["Home", "Reviews", "Contact Us", "Copyright 2022"];
  const optionsList = options.map((option) => <li>{option}</li>);
  return (
    <>
      <div className="footer">
        <li>{optionsList}</li>
      </div>
    </>
  );
}

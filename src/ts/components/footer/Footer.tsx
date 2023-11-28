import "@scss/components/footer/Footer.scss";

const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.toLocaleDateString(undefined, { year: "numeric" });

  return <footer>&copy; {year}, Pops & Sons Electric</footer>;
};

export default Footer;

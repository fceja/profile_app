import "../styles/Footer.scss";

import React from "react";

export default function Footer() {
  const currentDate = new Date();
  const year = currentDate.toLocaleDateString(undefined, { year: "numeric" });

  return <footer>&copy; {year}, AB Company</footer>;
}

import "../styles/css/Footer.css";

import React from "react";

export default function Footer() {
  const currentDate = new Date();
  const year = currentDate.toLocaleDateString(undefined, { year: "numeric" });

  return <footer>&copy; {year}, AB Company</footer>;
}

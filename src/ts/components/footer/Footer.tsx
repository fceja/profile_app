import React from "react";

import "@scss/components/footer/Footer.scss";

// TODO - verify sizing and placement across pages and devices
export default function Footer() {
  const currentDate = new Date();
  const year = currentDate.toLocaleDateString(undefined, { year: "numeric" });

  return <footer>&copy; {year}, Pops & Sons Electric</footer>;
}

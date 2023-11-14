import React from "react";

import "@scss/components/footer/Footer.scss";

export default function Footer() {
  const currentDate = new Date();
  const year = currentDate.toLocaleDateString(undefined, { year: "numeric" });

  return <footer>&copy; {year}, Pops & Sons Electric</footer>;
}

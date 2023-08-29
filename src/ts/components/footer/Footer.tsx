import React from "react";

import "styles/components/footer/Footer.scss";

export default function Footer() {
  const currentDate = new Date();
  const year = currentDate.toLocaleDateString(undefined, { year: "numeric" });

  return <footer>&copy; {year}, AB Company</footer>;
}

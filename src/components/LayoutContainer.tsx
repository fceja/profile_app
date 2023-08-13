import { connect } from "react-redux";

import Layout from "./Layout";

const LayoutContainer = connect()(Layout);
LayoutContainer.displayName = "LayoutContainer";

export default LayoutContainer;

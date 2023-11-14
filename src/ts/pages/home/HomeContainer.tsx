import { connect } from "react-redux";

import Home from "@pages/home/Home";

const HomeContainer = connect()(Home);
HomeContainer.displayName = "HomeContainer";

export default HomeContainer;

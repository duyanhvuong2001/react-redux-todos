import { connect } from "react-redux";
import { useEffect } from "react";
import { handleInitialData } from "../actions/shared";
import ConnectedTodos from "./Todos";
import ConnectedGoals from "./Goals";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  if (props.loading === true) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <ConnectedTodos />
      <ConnectedGoals />
    </div>
  );
};

export default connect((state) => ({ loading: state.loading }))(App);

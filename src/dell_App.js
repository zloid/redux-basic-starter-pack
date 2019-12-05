import React from "react";
import { connect } from "react-redux";

const Wrap = ({wrappedElement}) => {
  return (
    <div onClick={(e)=>console.log(wrappedElement)}>
      {wrappedElement}
      <hr/>
    </div>
  )
}


function App({ someStatus, someData }) {
  function f(e) {
    alert(e.target.innerHTML);
  }
  return (
    <>
      <h1 onClick={e => console.log(e.target.innerHTML)}>hi!!!1</h1>
      <h2 onClick={e => f(e)}>2_hi!!!1</h2>
      <h3>someStatus ---> {someStatus}</h3>
      {/* <strong>{someData}</strong> */}
      {/* {someData.map((e,k) => {return <p>e</p>})} */}
  {someData.map(
    (e,k) => {return <Wrap wrappedElement={e} key={k} />}
    )}
    {console.log(someData)}
    </>
  );
}

const mapStateToProps = state => {
  return {
    someStatus: state.status,
    someData: state.data
  };
};

export default connect(mapStateToProps)(App);

// export default App;

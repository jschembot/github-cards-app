import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = ({title}) => (
  <div className="header">{title}</div>
);

ReactDOM.render(
  <App title="The GitHub Cards App" />,
  document.getElementById("root")
);

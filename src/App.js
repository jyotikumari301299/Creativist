import React from 'react';
import Header from './component/Header/Header';
import classes from "./App.module.css";
import Card from './component/UI/Card';
import Search from './component/Header/Search';

const App = () => {
 
  return (
    <div className={classes.app}>
    <Card>
          <Header />
    </Card>
    <Card>
      <Search />
    </Card>
    </div>
    
  );
};

export default App;

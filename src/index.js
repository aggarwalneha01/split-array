
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode> <b>Group Array Exercise</b>
    <br/> <br/> When the original array is [1,2,3,4,5,6,7,8,9] and num of Arrays it needs to be divided is 3 <br/>
    <b>Result:    </b>{JSON.stringify(App([1,2,3,4,5,6,7,8,9], 3), null, '\t')}
    <br/> <br/> When the original array is [1,2,3,4,5,6,7,8,9,10,11,12] and num of Arrays it needs to be divided is 5 <br/>
    <b>Result:    </b>{JSON.stringify(App([1,2,3,4,5,6,7,8,9,10,11,12], 5), null, '\t')}
    <br/> <br/> When the original array is [1,2,3,4,5,6,7,8,9,10,11,12] and num of Arrays it needs to be divided is 13 <br/>
    <b>Result:    </b>{JSON.stringify(App([1,2,3,4,5,6,7,8,9,10,11,12], 13), null, '\t')}
    <br/> <br/> When the original array is [] and num of Arrays it needs to be divided is 2 <br/>
    <b>Result:    </b>{App([], 2)}
  </React.StrictMode>,
  document.getElementById('root')
);


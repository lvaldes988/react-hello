import React from 'react';
import ReactDOM from 'react-dom';

// function MyThing() {
//   return (
//     <React.Fragment>
//       <span> This is America</span>
//       <p> Don't catch you slippin' up</p>
//       <td> Look what I 'm whippin' up </td>
//       <span> This Is A React App</span>
//     </React.Fragment>
//   );
// }

// ReactDOM.render( <MyThing />, document.getElementById('root'));

function Book() {
  return (
  <div className = 'book' >
    <div className = 'title' >
        The Title 
    </div>
    <div className='author'>
      The Author
    </div>
      <ul className='stats'>
        <li className = 'rating'>
          5 Stars
        </li>
        <li className='isbn'>
          12 - 345678 - 910
        </li>
      </ul> 
  </div>
  )
}
console.log(Book());


function Greeting(props) {
  return (
    <React.Fragment >
        Hello {props.username}
    </React.Fragment>
  )
}

Greeting.propTypes = {
  // propType components 
  username(props, propName, componentName) {
    if (typeof props[propName] != 'string') {
      return new Error(`Hey you should have passed a string for ${propName}
    in ${componentName}, but you passed a ${typeof props[propName]}!`);
    }
  }
}
// console.log(Greeting());


function Table() {
  return (
    <table>
      <tbody>
        <tr>
          <Data />
        </tr>
      </tbody>
    </table>
  );
}


function Data() {
  return (
    <React.Fragment>
      <td>This</td>
      <td>Is</td>
      <td>My-Data</td>
    </React.Fragment>
  );
}  
console.log(Table())
console.log(Data());
    
// ReactDOM.render(<Book />, document.getElementById('root'));
// ReactDOM.render(<Greeting username="Kevin"/>, document.getElementById('root'));
// ReactDOM.render(<Table />, document.getElementById('root'));
// ReactDOM.render(<Data />, document.getElementById('root'));


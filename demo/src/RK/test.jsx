// import React, { Component } from 'react';

// class FirstClass extends Component {
//   render() {
//     return (
//       <center>
//         <br />
//             <div class="user-card">
//                 <img src="vite.svg" alt="" /><br /><br />
//                 <button>Add To Cart</button>
//             </div>
//       </center>
//     );
//   }
// }

// export default FirstClass;




import React, {Component} from 'react';
// import PropTypes from 'prop-types';


class ClassProps extends Component {
  render() {
    return (
      <>
        <center>
          <div className="user-card">
            <img src={this.props.img} alt="product" width="120" />
            <br /><br />
            <h3>{this.props.name}</h3>
            <h5>Price: ₹ {this.props.price}</h5>
            <button onClick={this.props.onClick}>{this.props.btnText}</button>
          </div>
        </center>
      </>
    );
  }
}
export default ClassProps;
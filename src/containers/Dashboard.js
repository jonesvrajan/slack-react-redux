import React from 'react';
import { connect } from 'react-redux';



class Dashboard extends React.Component {

  
  render() {

  const {email} = this.props.data;

  return (
    <div>
 
      <div className="container"> 
        <div className="content" style={{minHeight: "200px"}}>

            <h2>Welcome,{email}</h2>
  
        </div>
      </div>

    </div>
  );
}
};


const mapStateToProps = (state, props) => {
  return {
    data: state.auth.user
  }
}

const connectedDashboard = connect(mapStateToProps)(Dashboard)

export default connectedDashboard

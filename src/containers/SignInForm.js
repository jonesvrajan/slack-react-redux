import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { useHistory } from "react-router-dom";

function SignInForm (props) {
  const history = useHistory();
  const onSubmit = formProps => {
    props.signin({...formProps, team: props.data.team_id}, () => {
      history.push('/slack-react-redux/dashboard');
    });
  };
  

  const { handleSubmit} = props;
  const {domain} = props.data;

  return (
    <div>
      <div className="container"> 
        <div className="content">

        {props.errorMessage ? <div>
          <p className="alert alert_error span_4_of_6 col float_none margin_auto right_padding"><i className="ts_icon ts_icon_warning"></i>Sorry, you entered an incorrect email address or password.</p>
        </div> : null}
        
            <form onSubmit={handleSubmit(onSubmit)} className="form-container card">
            <h2>Sign in to <span style={{textTransform: "capitalize"}}>{domain}</span></h2>
            <div className="form-content">

              <p style={{marginTop: "-15px"}}>{domain}.slack.com</p>
              <p style={{textAlign: "left"}}>Enter your <b>email address and password</b></p>
              <p className="input-area signin">
                <Field
                    name="email"
                    component="input"
                    type="text"
                    placeholder="you@example.com"
                />  
                <Field
                    name="password"
                    component="input"
                    type="password"
                    placeholder="password"
                />  
              </p>
              <div>
                <button className="btn btn_large small_top_margin full_width ladda-button" type="submit" >Sign in</button>
              </div>
                <p style={{textAlign: "left"}}>
                <Field
                  name="remember"
                  id="remember"
                  component="input"
                  type="checkbox"
                />
                <label htmlFor="remember"> Remember me</label>
                </p>
              <p style={{textAlign: "left"}}><a style={{fontWeight: "normal"}} href="/"> Forgot password?  </a> <a style={{fontWeight: "normal"}} href="/"> Forgot which email you used? </a></p>
            </div>
              
          </form>
          <p  className="text-center">Need to get your group started on Slack? <a href="/">Download the app</a> to get started.</p>
        </div>
      </div>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.userErrorMessage,
    data: state.auth.workspace
  }
}

const connectedForm = connect(mapStateToProps, actions)(SignInForm)

export default reduxForm({
  form: 'signin', // a unique identifier for this form
  //onSubmit: submit 
})(connectedForm);

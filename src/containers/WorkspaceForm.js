import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { useHistory } from "react-router-dom";
import { withRouter } from 'react-router-dom'


function Form  (props) {

  const history = useHistory();
  
  const onSubmit = formProps => {
    
    props.validate_workspace(formProps, () => {
      history.push('/slack-react-redux/signin');
    });
  };
  
  

  const { handleSubmit} = props;

  return (
    <div>
      <div className="container"> 
        <div className="content">

        {props.errorMessage ? <div>
          <p className="alert alert_error span_4_of_6 col float_none margin_auto right_padding"><i className="ts_icon ts_icon_warning"></i><strong>We couldn’t find your workspace.</strong> If you can’t remember your workspace’s address, we can <a href="/get-started#find" className="bold">send you a reminder</a>.</p>
        </div> : null}
        
          <form onSubmit={handleSubmit(onSubmit)} className="form-container card">
            <h2>Sign in to your workspace</h2>
            <div className="form-content">

              <p>Enter your workspace’s <b>Slack URL</b></p>
              <p className="input-area">
                <Field
                    name="domain"
                    component="input"
                    type="text"
                    placeholder="your-workspace-url"
                />  
                <span> .slack.com</span>
              </p>
              <div>
                <button className="btn btn_large small_top_margin full_width ladda-button" type="submit" >Continue</button>
              </div>
              <p>Don’t know your workspace URL? <a href="/"> Find your workspace </a></p>
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
    errorMessage: state.auth.errorMessage
  }
}

const connectedForm = withRouter(connect(mapStateToProps, actions)(Form))

export default reduxForm({
  form: 'primary', // a unique identifier for this form
  //onSubmit: submit 
})(connectedForm);

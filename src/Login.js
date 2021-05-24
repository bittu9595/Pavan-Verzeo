import { withRouter } from 'react-router';
import ReduxForm from './ReduxForm';

const Login = (props) => {


    const submitForm = (event) => {
        event.preventDefault();
    
        console.log('firstname--',event.target[0].value);
        console.log('lastname--',event.target[1].value);

        props.history.push('/dashboard');
      }

      return (
          <div>
                  <ReduxForm handleSubmit = {submitForm}/>

          </div>
      )

}
export default withRouter(Login);
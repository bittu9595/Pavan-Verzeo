import { useEffect } from "react";
import { formValueSelector,getFormValues } from "redux-form";
import { useSelector,connect } from 'react-redux'


const Dashboard = (props) => {
    
        // let firstName = props.formValues['firstName'];
        // let lastName = props.formValues['lastName'];
        // console.log(firstName, lastName);

        let newFirstName = (props.firstName !== undefined) ? props.firstName: null;
        let newLastName = (props.lastName !== undefined) ? props.lastName: null;
        console.log('inside dashboard---',newFirstName,newLastName);


    


  


    return (
        <h1>
            Dashboard
        </h1>
    )

}
const mapStateToProps = state => {
    const selector = formValueSelector('myForm');

    return {
        // formValues: getFormValues('myForm')(state),
        firstName: selector(state,'firstName'),
        lastName: selector(state,'lastName')


    }
}
export default connect(mapStateToProps)(Dashboard);
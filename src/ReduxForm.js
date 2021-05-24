import {Field,reduxForm} from 'redux-form'
let ReduxForm = (props)=> {
    const {handleSubmit} = props;
return (
    <form onSubmit = {handleSubmit}>
        <div>
            <label>First Name</label>
            <Field name="firstName" component = "input" type="text"/>
        </div>
        <div>
            <label>Last Name</label>
            <Field name="lastName" component = "input" type="text"/>
        </div>
        <button>Click</button>
    </form>
)
}

ReduxForm = reduxForm({
    form: 'myForm',
    // fields: ['firstName', 'lastName']

})(ReduxForm);
export default ReduxForm;
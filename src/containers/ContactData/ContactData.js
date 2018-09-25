import React, { Component} from 'react';
import axios from '../../Axios';
import { connect } from 'react-redux';

import Button from '../../components/UI/Button/Button';
import classes from './ContactData.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import Input from '../../components/UI/Input/Input';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actionCreators from '../../store/actions/index';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    placeholder: 'Enter your name',
                    type: 'text'
                }, 
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
        email: {
            elementType: 'input',
            elementConfig: {
                placeholder: 'Enter your email',
                type: 'email'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        street: {
            elementType: 'input',
            elementConfig: {
                placeholder: 'Enter street name',
                type: 'text'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        zip: {
            elementType: 'input',
            elementConfig: {
                placeholder: 'Enter zip code',
                type: 'text'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        country: {
            elementType: 'input',
            elementConfig: {
                placeholder: 'Enter country',
                type: 'text'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        deliveryMethod: {
            elementType: 'select',
            elementConfig: {
                options: [{value: 'fastest', displayValue: 'Fastest'},
                {value: 'cheapest', displayValue: 'Cheapest'}, 
                {value: 'balanced', displayValue: 'Balanced'}]
            },
            value: 'fastest',
            validation: {},
            valid: true
        }
            },
        loading: false,
        formIsValid: false
    }


    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});

        const customerData = {};
        for (let data in this.state.orderForm){
            customerData[data] = this.state.orderForm[data].value;
        }
        const order = {
            ingredients: this.props.ingredients,
            customerData: customerData,
            totalPrice: this.props.price,
            timeSnapshot: new Date()
        };
         
            this.props.onPurchaseInit(order);
            
            this.props.history.push('/orders');
        
            
    }
    checkValidity = ( value, rules ) => {
        let isValid = true;
        if ( rules.required ){
            isValid = value.trim() !== '' && isValid;
        }
        return isValid;
    }
    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {...this.state.orderForm};
        const updatedFormElement = {...updatedOrderForm[inputIdentifier]};
        updatedFormElement.value = event.target.value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        let formIsValid = true;
        for (let key in updatedOrderForm){
            formIsValid = updatedOrderForm[key].valid && formIsValid;
        }
        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
    }

    render (){
        let formElements = [];
        for (let key in this.state.orderForm){
            formElements.push({
                id: key,
                config: this.state.orderForm[key],
            })
        }
        let form = (
            <React.Fragment>
            <h3>Please enter your contact details</h3>
            <form onSubmit={this.orderHandler}> 
                {formElements.map(formElement => (
                    <Input key={formElement.id} elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={( event ) => this.inputChangedHandler(event, formElement.id)}
                    />
                ))}
                <Button disabled={!this.state.formIsValid} btnType='Success'>ORDER</Button>
            </form>
            </React.Fragment>
        );
        if (this.state.loading){
            form = (
            <React.Fragment>
            <h3>Your order is being prepared...</h3>
            <Spinner />
            </React.Fragment>
        )
        }
        return (
            <div className={classes.ContactData}>
                {form}   
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPurchaseInit: (orderData) => dispatch(actionCreators.initPurchase(orderData))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));
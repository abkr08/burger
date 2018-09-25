import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../Axios';



class BurgerBuilder extends Component {
    state = {
        purchasing: false
    }

      
    componentDidMount () {
        this.props.onIngredientInit();
    }
    purchaseModeHandler = () => {
        this.setState({purchasing: true});
    }

    cancelPurchaseHandler = () => {
        this.setState({purchasing: false});
        
    }

    purchaseContinueHandler = () => {
        this.setState({loading: true});
        this.props.history.push('/checkout');
    }
    

    updatePurchasableState ( ingredients ) {
        const sum = Object.keys(ingredients).map(ing => {
            return ingredients[ing];
        })
        .reduce((sum, el) => {
            return sum + el;
        }, 0);
        
        return sum > 0;
    }


    render (){
        const disabledInfo = {...this.props.ingredients};
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let orderSummary = null;
        let burger = <Spinner />;;
        
        if (this.props.ingredients){
            burger = (
                <Aux>
                    <Burger ingredients = {this.props.ingredients}/>
                    <BuildControls 
                    addIngredient = {(type) => this.props.onAddIngredient(type)} 
                    removeIngredient = {(type) => this.props.onRemoveIngredient(type)}
                    price = {this.props.totalPrice}
                    disabled = {disabledInfo}
                    showModal = {this.purchaseModeHandler}
                    purchasable = {this.updatePurchasableState(this.props.ingredients)}
                />
            </Aux>
            );
            orderSummary = (
                <OrderSummary
                 purchaseContinue = {this.purchaseContinueHandler} 
                 cancelPurchase = {this.cancelPurchaseHandler} 
                 ingredients={this.props.ingredients} />
        
            );
        }

                
        return (
            <Aux>
            <Modal showModal={this.state.purchasing}
                     modalClosed = {this.cancelPurchaseHandler}> 
                    {orderSummary}
            </Modal>
            { burger }
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAddIngredient: (ingr) => dispatch(actionCreators.addIngredient(ingr)),
        onRemoveIngredient: (ingr) => dispatch(actionCreators.removeIngredient(ingr)),
        onIngredientInit: () => dispatch(actionCreators.getIngredients())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
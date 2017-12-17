import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { getItems, getCurrency, getTotal, removeFromCart, onPlus, onMinus } from '../ducks/cart';

const mapStateToProps = (state, props) => {
    return {
        items: getItems(state, props),
        currency: getCurrency(state, props),
        total: getTotal(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    onPlus: (item) => dispatch(onPlus(item)),
    onMinus: (item) => dispatch(onMinus(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

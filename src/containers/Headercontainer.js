import { connect } from "react-redux";
import Header from "../components/Header";
// import { addToCart } from "../services/actions/action";

const mapStateToProps = state => ({
    data:state.cardItems
})

const mapDispatchToProps = dispach => ({
    // addToCartHandler:data => dispach(addToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)

// export default Home;
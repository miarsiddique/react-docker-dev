import { connect } from "react-redux";
import Home from "../components/Home";
import { addToCart, removeToCart } from "../services/actions/action";

const mapStateToProps = state => ({
    data:state.cardItems
})

const mapDispatchToProps = dispach => ({
    addToCartHandler:data => dispach(addToCart(data)),
    removeToCartHandler:data => dispach(removeToCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

// export default Home;
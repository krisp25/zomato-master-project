import { Route, Redirect } from "react-router-dom";

// HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";
import RestaurantLayoutHOC from "./HOC/Restaurant.Hoc";

// Pages
import Home from "./Page/Home";
import Overview from "./Page/Restaurant/Overview";
import OrderOnline from "./Page/Restaurant/OrderOnline";

// Components
import Temp from "./Components/temp";

function App() {
    return (
        <>
            <Route path="/" exact>
                <Redirect to="/delivery" />
            </Route>
            <Route path="/restaurant/:id" exact>
                <Redirect to="/restaurant/:id/overview" />
            </Route>
            <HomeLayoutHOC path="/:type" exact component={Home} />
            <RestaurantLayoutHOC path="/restaurant/:id" exact component={Temp} />
            <RestaurantLayoutHOC
                path="/restaurant/:id/overview"
                exact
                component={Overview}
            />
            <RestaurantLayoutHOC
                path="/restaurant/:id/order-online"
                exact
                component={OrderOnline}
            />
            <RestaurantLayoutHOC 
                path="/restaurant/:id/menu" 
                exact 
                component={Temp} 
            />
            <RestaurantLayoutHOC
                path="/restaurant/:id/reviews"
                exact
                component={Temp}
            />
            <RestaurantLayoutHOC
                path="/restaurant/:id/photos"
                exact
                component={Temp}
            />
        </>
    );
}

export default App;
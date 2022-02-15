// need imports 
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import React from "react";
import MainContainer from './pages/mainContainer'

<<<<<<< HEAD
import Homepage from "./pages/homepage/homepage";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import Nav from "./components/navbar/navbar";
import { StoreProvider } from "./utils/GlobalState";
// import Success from "./pages/Success";
// import OrderHistory from "./pages/OrderHistory";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
=======
>>>>>>> ReactJesse

function App() {
  return (
    <ApolloProvider client={client}>
<<<<<<< HEAD
      <Router>
        <div>
          <StoreProvider>
            {/* <Nav /> */}
            <Switch>
              {/* <Route exact path="/" component={Homepage} /> */}
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              {/* <Route exact path="/success" component={Success} />
              <Route exact path="/orderHistory" component={OrderHistory} />
              <Route exact path="/products/:id" component={Detail} />
              <Route component={NoMatch} /> */}
            </Switch>
          </StoreProvider>
        </div>
      </Router>
=======
      <MainContainer />
>>>>>>> ReactJesse
    </ApolloProvider>
  );
}

export default App;

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Home from "./pages/homepage";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Nav from "./components/Nav";
// import { StoreProvider } from "./utils/GlobalState";
// import Success from "./pages/Success";
// import OrderHistory from "./pages/OrderHistory";

// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem("id_token");
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });


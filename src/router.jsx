import {createBrowserRouter} from
"react-router-dom" 
    import Loyout
    from "./components/Layout/Loyout"
    import Home from "./pages/Home"
    import About from "./pages/About"
    import Product from "./components/Product/Product"
    import DetailProduct from "./pages/DetailProduct"
    import Register from "./pages/Register"
    import Login from "./pages/Login"
    import Wihshlist from "./components/wishh/Wihshlist"

 export const myRouter = createBrowserRouter([
    {
        path:"/",
        element: <Loyout/>,
        children:[
            {
                path:"/",
                element: <Home/>,
            },
            {
                path:"about",
                element: <About/>
            },
            {
                path:"product",
                element: <Product />
            },
            {
                path:"Product/:id",
                element:<DetailProduct/>
            },
            {
                path:"register",
                element: <Register/>
            },
            {
                path:"login",
                element: <Login/>
            },
            {
                path:"wishlist",
                element: <Wihshlist/>
            }
            
           ]
    }
 ]);
 
import {useRoutes} from 'react-router-dom'

import Home from './pages/Home';
import DetalleProducto from './pages/DetalleProductoUser';
import Apadrina from './pages/Apadrina';
import Cataleg from './pages/tienda/Cataleg';
import Carrito from './pages/tienda/CarritoCompra';

export default function Routes() {
    let element = useRoutes([
        {
            element: <DetalleProducto />,
            path: 'detalle'
        },
        {
            element: <Apadrina />,
            path: 'apadrina'
        },
        {
            element: <Cataleg />,
            path: 'cataleg'
        },
        {
            element: <Carrito />,
            path: 'carrito'
        },
        {
            element: <Home />,
            path: '/'
        }
    ])
    return element;
}
import {useRoutes} from 'react-router-dom'

import Home from './pages/Nav/Home';
import Apadrina from './pages/Nav/Apadrina';
import Contacte from './pages/Footer/Contacte';
import Donacions from './pages/Nav/Donacions';
import Enviament from './pages/Footer/Enviament';
import Pagament from './pages/Footer/Pagament'
import DetalleProducto from './pages/tienda/DetalleProductoUser';
import Cataleg from './pages/tienda/Cataleg';
import Carrito from './pages/tienda/CarritoCompra';

export default function Routes() {
    let element = useRoutes([
        {
            element: <DetalleProducto />,
            path: '/detalle/:id'
        },
        {
            element: <Apadrina />,
            path: 'apadrina'
        },
        {
            element: <Enviament />,
            path: 'enviament'
        },
        {
            element: <Donacions />,
            path: 'donacions'
        },
        {
            element: <Pagament />,
            path: 'pagament'
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
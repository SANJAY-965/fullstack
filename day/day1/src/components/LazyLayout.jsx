import { Suspense } from "react";
import PropTypes from 'prop-types'
import Load  from '/src/assets/images/load1.gif'
const LazyLayout = ({ component:Component, ...rest}) => {
    return (
       <Suspense fallback={
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh', // Adjust the height as needed
        }}>
            <img
                src={Load}
                alt="Loading..."
                style={{
                    maxWidth: '100px',
                    maxHeight: '100px', 
                }}
            />
        
        

        </div>
       }>
            <Component {...rest}/>
       </Suspense> 
    )
}

LazyLayout.propTypes = {
    component: PropTypes.elementType.isRequired
}

export default LazyLayout
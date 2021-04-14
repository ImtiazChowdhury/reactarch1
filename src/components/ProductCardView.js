import React from 'react'
import connector from "../connector/connector"

function ProductCardView(props) {
    const {product} = props
    return (
        <div className="border border-secondary col-2 m-1 shadow-sm p-3 bg-white rounded">
            <img src={connector.joinWithBase(product.cover.medium)} className="img img-fluid"/>
            <h6 className="text-secondary">{product.name}</h6>
            <div className="p-1">
                <span className="d-inline-block bg-secondary text-light col-4 text-center">
                    {product.price.regular}
                </span>
            </div>
        </div>
    )
}

export default ProductCardView

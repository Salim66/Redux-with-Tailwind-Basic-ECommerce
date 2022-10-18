import React from 'react';
import Skeleton from 'react-loading-skeleton';

const Popular_skeleton = () => {
  return (
    <>
        <div className="slider__">
            <div className="small__product">
                <Skeleton />
            </div>
            <div className="product__details__">
                <h3><Skeleton width="90%" /></h3>
                <p><Skeleton width="90%" /></p>
                <span>
                <Skeleton width="60%" />
                </span>
                <Skeleton width="90%" />
            </div>
            <div className="atc"><i className="fa fa-plus-circle"></i></div>
        </div>
        <div className="slider__">
            <div className="small__product">
                <Skeleton />
            </div>
            <div className="product__details__">
                <h3><Skeleton width="90%" /></h3>
                <p><Skeleton width="90%" /></p>
                <span>
                <Skeleton width="60%" />
                </span>
                <Skeleton width="90%" />
            </div>
            <div className="atc"><i className="fa fa-plus-circle"></i></div>
        </div>
        <div className="slider__">
            <div className="small__product">
                <Skeleton />
            </div>
            <div className="product__details__">
                <h3><Skeleton width="90%" /></h3>
                <p><Skeleton width="90%" /></p>
                <span>
                <Skeleton width="60%" />
                </span>
                <Skeleton width="90%" />
            </div>
            <div className="atc"><i className="fa fa-plus-circle"></i></div>
        </div>
        <div className="slider__">
            <div className="small__product">
                <Skeleton />
            </div>
            <div className="product__details__">
                <h3><Skeleton width="90%" /></h3>
                <p><Skeleton width="90%" /></p>
                <span>
                <Skeleton width="60%" />
                </span>
                <Skeleton width="90%" />
            </div>
            <div className="atc"><i className="fa fa-plus-circle"></i></div>
        </div>
        <div className="slider__">
            <div className="small__product">
                <Skeleton />
            </div>
            <div className="product__details__">
                <h3><Skeleton width="90%" /></h3>
                <p><Skeleton width="90%" /></p>
                <span>
                <Skeleton width="60%" />
                </span>
                <Skeleton width="90%" />
            </div>
            <div className="atc"><i className="fa fa-plus-circle"></i></div>
        </div>
    </>
  )
};

export default Popular_skeleton;
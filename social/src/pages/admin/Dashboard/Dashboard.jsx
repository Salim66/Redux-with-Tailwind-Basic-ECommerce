import React from 'react';
import Sidebar from '../../../components/admin/Sidebar/Sidebar';
import TopHeader from '../../../components/admin/TopHeader/TopHeader';
import './Dashboard.scss';

const Dashboard = () => {
  return (
    <>
      <TopHeader />
      <div className="row">
        <div className="col-2 col-md-2 col-lg-2">
          <Sidebar />
        </div>
        <div className="col-10 col-md-10 col-lg-10">
          <div className="dashboard m-8">
            <div className="row">
              <div className="col-12 col-md-3 col-lg-3">
                <div className="card_d bg-white shadow-lg py-4 px-5 rounded-md">
                  <div className="card-body flex justify-center items-center">
                    <div className="product_count flex justify-center items-center flex-col">
                      <h2 className='text-2xl'>Products</h2>
                      <div className="span">Total: 200</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-3">
                <div className="card_d bg-white shadow-lg py-4 px-5 rounded-md">
                  <div className="card-body flex justify-center items-center">
                    <div className="category_count flex justify-center items-center flex-col">
                      <h2 className='text-2xl'>Categories</h2>
                      <div className="span">Total: 200</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-3">
                <div className="card_d bg-white shadow-lg py-4 px-5 rounded-md">
                  <div className="card-body flex justify-center items-center">
                    <div className="product_count flex justify-center items-center flex-col">
                      <h2 className='text-2xl'>Brands</h2>
                      <div className="span">Total: 200</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-3">
                <div className="card_d bg-white shadow-lg py-4 px-5 rounded-md">
                  <div className="card-body flex justify-center items-center">
                    <div className="product_count flex justify-center items-center flex-col">
                      <h2 className='text-2xl'>Tags</h2>
                      <div className="span">Total: 200</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Dashboard;
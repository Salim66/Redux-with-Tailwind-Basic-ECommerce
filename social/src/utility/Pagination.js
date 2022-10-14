import React, { useState, useEffect } from 'react';
import _ from 'lodash';


const pageSize = 10;
const Pagination = ({ sizes }) => {

  const [paginatedData, setPaginatedData] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
      const data = () => {
          if(sizes){
            setPaginatedData(_(sizes).slice(0).take(pageSize).value());
          }
      }
      data();
  }, [sizes])

  // pagination
  const pageSize = 10;
  const pageCount = sizes ? Math.ceil(sizes.length/pageSize)+1 : 0;
  if(pageCount === 1) return null;
  const pages = _.range(1, pageCount +1);
  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedData = _(sizes).slice(startIndex).take(pageSize).value();
    setPaginatedData(paginatedData);
  }

};

export default Pagination;
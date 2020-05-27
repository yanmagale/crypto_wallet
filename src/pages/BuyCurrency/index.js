import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';

import BuyCurrencyForm from '../../components/buy/Form';

// class BuyCurrencyPage extends Component {
//   render() {
//     return (
//       <div>
//         <h2>Buy Currency Page</h2>
//       </div>
//     );
//   }
// }
// export default BuyCurrencyPage;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const BuyCurrencyPage = () => {
  //   let { currency } = useParams();
  let query = useQuery();

  return (
    <div>
      <h3>ID: {query.get('currency')}</h3>
      <BuyCurrencyForm />
    </div>
  );
};

export default BuyCurrencyPage;

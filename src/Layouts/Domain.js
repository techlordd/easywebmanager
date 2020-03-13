import React , {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import moment from 'moment';

// Set the output format for every react-moment instance.
//Moment.globalFormat = 'D MMM YYYY';

export default function Domain() {
  const [domainLists, setDomainLists] = useState([]);
  const [currentPage, setCurrentPage ] = useState(1);
  const [postsPerPage] = useState(2);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/api/posts');
      setDomainLists(res.data);
    }
    fetchPosts();
  },[]);

  const indexOfLastPost = currentPage * postsPerPage;
 
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
 
  const currentPosts = domainLists.slice(indexOfFirstPost, indexOfLastPost);

  const totalPosts = domainLists.length;

  const pageNumbers = [];
        
  for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
    console.log(`This is Page Nummber Before: ${pageNumbers}`)
    pageNumbers.push(i);
    console.log(`This is Page Number After: ${pageNumbers}`)
    
  }

  const paginate = (pageNo) => setCurrentPage(pageNo);
  

    return (
      <Fragment>       
     
        <div className="main" >
          
        <table>
              <tbody><tr>
              <th>Domain Name</th>
              <th>Domain Company</th>
              <th>Created</th>
              <th>Expiring</th>
              <th>Status</th>
            </tr></tbody>
            {currentPosts.length ? currentPosts.map(domainItem =>             
            <tbody key={domainItem._id}>
              <tr>
                <th>{domainItem.domain_name}</th>
                <td>{domainItem.domain_company}</td>
                <td data-th="Domain Created: ">{moment(domainItem.domain_created).format('DD-MM-YYYY')}</td>
                <td data-th="Domain Expiring: ">
                 { 
                 
                 moment(domainItem.domain_created).add(1, 'year').format('DD-MM-YYYY')
                 }</td>
                  <td data-th="Status:status"> 
                  {
                 
                 moment().diff(moment(domainItem.domain_created), 'months') < 7 ? 'Active': 
                 (moment().diff(moment(domainItem.domain_created), 'months') > 12) ? 'Expired': 'Expiring soon'
                  }

             
                 </td>
              </tr></tbody>
              
            
                                    
            ): <tbody><tr>No data found</tr></tbody>}
           
           </table>  

           
           
           

           {/* <div>
           <Pagination
            postsPerPage={postsPerPage}
            totalPosts={domainLists.Length}
            paginate={paginate} /></div>  */}

         
              <div className="pagination">
              <nav>
                <ul> {pageNumbers.map(number => (
                <li key={number}>
                <a onClick={()=>paginate(number)} href='#'>{number}</a>
                </li>
                ))}
                </ul>
              </nav>
              </div>
           

           

          
      </div>
        </Fragment> 
    )
}

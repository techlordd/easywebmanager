import React , {useState, useEffect} from 'react';
import axios from 'axios';
import moment from 'moment';

// Set the output format for every react-moment instance.
//Moment.globalFormat = 'D MMM YYYY';

export default function Domain() {
  const [domainLists, setDomainLists] = useState([]);
  const [currentPage, setCurrentPage ] = useState(1);
  const [postsPerPage] = useState(2);
  const [searchDomain,setSearchDomain] = useState(null);

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
    
    pageNumbers.push(i);
   
    
  }

  const paginate = (pageNo) => setCurrentPage(pageNo);

  const searchDomainName = (event) =>{
    let keyword = event.target.value;
    setSearchDomain(keyword);
  }

  const searchResult = domainLists.filter((domainItem)=>{
    if(searchDomain == null){
   
      
      return "";
      
      /* var sliced = [];
      for (var i=0; i<3; i++)
          sliced[i] = domainItems[i];
      console.log(sliced); */
       

      }
    else if(domainItem.domain_name.includes(searchDomain) 
    || domainItem.domain_name.includes(searchDomain)){
      return domainItem
    }}).map(domainItem=>{
      return (
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
            {moment().diff(moment(domainItem.domain_created), 'months') < 7 ? 'Active': 
            (moment().diff(moment(domainItem.domain_created), 'months') > 12) ? 'Expired': 'Expiring soon'
            }
            </td>
            </tr></tbody>
            )
    })
 
   const formData = currentPosts.map(domainItem =>{
      return (
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
          {moment().diff(moment(domainItem.domain_created), 'months') < 7 ? 'Active': 
          (moment().diff(moment(domainItem.domain_created), 'months') > 12) ? 'Expired': 'Expiring soon'
          }
          </td>
          </tr></tbody>
          )
        }) 
  
  return (
    <div className="main" >
      
      <label>Search Domain</label>
    <input type="text" onChange={(e)=>searchDomainName(e)} placeholder="Enter item to be searched" /><br/><br/>
    <div className="fullwidth">
    
      <table>
    <tbody><tr>
              <th>Domain Name</th>
              <th>Domain Company</th>
              <th>Created</th>
              <th>Expiring</th>
              <th>Status</th>
            </tr></tbody>
            {searchDomain ? searchResult: formData.length ? formData : "No data found. Check your internet connections"}
    </table>
    </div>
   
    <div className="pagination">
              <nav>
                <ul> {pageNumbers.map(number => (
                <li key={number}>
                <a onClick={()=>paginate(number)} href='#!'>{number}</a>
                </li>
                ))}
                </ul>
              </nav>
              </div>  
    </div>
  )
}

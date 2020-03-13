import React , {useState, Fragment} from 'react';
import axios  from 'axios';
import moment from 'moment';
import uuid from 'uuid';

export default function AddSite() {
    const [formData, setFormData] = useState({
        domain_name: '',
        domain_company: '',
        domain_created: '',
        domain_expiring: '',
        host_name:'',
        host_company: '',
        host_created: '',
        host_expiring: '',
        

    });

    const {
        domain_name, 
        domain_company,
        domain_created,
        domain_expiring,
        host_name,
        host_company,
        host_created,
        host_expiring
    } = formData;

    const onSubmit = async e => {
        e.preventDefault(); 
        const mydata = {
            domain_name,
            domain_company,
            domain_created,
            domain_expiring,
            host_name,
            host_company,
            host_created,
            host_expiring
        }

        try {
            const body = JSON.stringify(mydata);
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        await axios.post('/api/posts',body,config );
            
        } catch (err) {
            console.error(err.response.data);            
        }
        


    }

    const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

  
    return (
        <Fragment>
            <form onSubmit={onSubmit}>
                <h1> Domain an Hosting Details</h1>
                <div className="form-group">
                    <label>Domain Name:</label>
                    <input type="text" name="domain_name" onChange={ e => onChange(e)} value={domain_name}/>
                </div>
                <div className="form-group">
                    <label>Domain Company:</label>
                    <input type="text" name="domain_name" onChange={ e => onChange(e)} value={domain_company}/>
                </div>
                <div className="form-group">
                    <label>Domain Created at:</label>
                    <input type="date" name="domain_created" onChange={ e => onChange(e)}  value={domain_created}/>
                </div>
                <div className="form-group">
                    <label>Domain Expiring:</label>
                    <input name="domain_expiring" onChange={ e => onChange(e)}  value={
                        domain_created ? (moment(domain_created).add(1, 'y').format('MM/DD/YYYY')): ''
                    }/>
                </div>
                
                <div className="form-group">
                    <label>Host Name:</label>
                    <input type="text" name="host_name" onChange={ e => onChange(e)} value={host_name}/>
                </div>
                <div className="form-group">
                    <label>Host Company:</label>
                    <input type="text" name="host_name" onChange={ e => onChange(e)} value={host_company}/>
                </div>
                <div className="form-group">
                    <label>Hosting Created at:</label>
                    <input type="date" name="host_created" onChange={ e => onChange(e)}  value={host_created} />
                </div>
                <div className="form-group">
                    <label>Hosting Expiring:</label>
                    <input name="host_expiring" onChange={ e => onChange(e)}  value={
                        host_created ? (moment(host_created).add(1, 'y').format('MM/DD/YYYY')): ''
                    }/>

                </div>
                <h1> Personal Details</h1>
                <label>Membership ID:</label>
                <input type="text" name="membership_id" value={uuid()}/>
                <label>Owner:</label>
                <input type="text"/>
                <label>Address:</label>
                <textarea name="address"/>
                <label>Phone no:</label>
                <input type="number"/>
                <label>Technology:</label>
                <input list="technology" name="technology" required/>
                <datalist id="technology">
                <option value="">Select an Option</option>
                    <option value="wordpress"/>
                    <option value="Joomla"/>
                    <option value="Drupal"/>
                    <option value="PHP"/>
                    <option value="Javascript"/>
                </datalist>
                <h1> Subscriptions</h1>
                <label>Backup:</label>
                <select required> 
                    <option>Select an Option</option>
                    <option>Active</option>
                    <option>InActive</option>
                </select>
                <label>SSL/yr: </label>
                <select>
                    <option>Select an Option</option>
                    <option>Active</option>
                    <option>InActive</option>
                </select>
                <label>Security Upgrade:</label>
                <select>
                    <option>Select an Option</option>
                    <option>Active</option>
                    <option>InActive</option>
                </select>
                <label>Theme Change:</label>
                <select>
                    <option>Select an Option</option>
                    <option>Active</option>
                    <option>InActive</option>
                </select>
                <label>SEO:</label>
                <select>
                    <option>Select an Option</option>
                    <option>Active</option>
                    <option>InActive</option>
                </select>
                <label>Digital Marketing :</label>
                <select>
                    <option>Select an Option</option>
                    <option>Active</option>
                    <option>InActive</option>
                </select>

                <h1> Website Features</h1>
                <label>Package Type:</label>
                <input type="text"/>
                <label>Package Price:</label>
                <input type="text"/>
                <label>Pages:</label>
                <input type="text"/>
                <label>SubDomains:</label>
                <input type="text"/>
                <label>Emails:</label>
                <input type="email"/>
                <label>Storage Diskspace:</label>
                <input type="text"/>
                <label>Bandwidth:</label>
                <input type="text"/>
                <input type="submit"/>
            </form>
            
        </Fragment>
    )
}
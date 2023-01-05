import './App.css';
import {useState, useEffect} from 'react'
import contacts from "./contacts.json";

function App() { 

// const contacts5 = contacts.slice(0, 5)
const[contacts5, setContacts5] =useState(contacts.slice(0, 5))
// console.log(contacts5)


useEffect(() => {
  return console.log(contacts5)

},[]);
 

  return (
    <div className="App">
      <h1>IronContacts</h1>
      
      <table>
		    <thead>
			    <tr>
            <th>Name</th>
            <th>Picture</th>
    				<th>Popularity</th>
          </tr>
        </thead>

        <tbody>

                  {contacts5.map(elem => 
                    <tr>
                    <td>{elem.name}</td>
                    <td><img src={elem.pictureUrl} className='imgActers'/></td>
                    <td>{elem.popularity}</td>
                    
                    
                    </tr> 
                  )}
                 
       </tbody>

    </table>


      {/* {contacts.map(elem => 
      

        <table>
		<thead>
			<tr>
				<th>Picture</th>
				<th>Name</th>
				<th>Popularity</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>{elem.name}</td>
				<td><img src={elem.pictureUrl} className='imgActers'/></td>
				<td>{elem.popularity}</td>
			</tr>
			<tr>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
			</tr>
			<tr>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
			</tr>
			<tr>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
			</tr>
			<tr>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
			</tr>
		</tbody>
	</table> */}
















    </div>
  );
}

export default App;

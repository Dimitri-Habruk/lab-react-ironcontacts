import './App.css';
import {useState, useEffect} from 'react'
import contacts from "./contacts.json";

function App() { 

// const contacts5 = contacts.slice(0, 5)
const[contacts5, setContacts5] =useState(contacts.slice(0, 5))
// console.log(contacts5)

const[createEl, setCreateEl] =useState([

  <tbody>

                  {contacts5.map(elem => 
                    <tr key={elem.id}>
                    <td><h2 className='nameActeur'>{elem.name}</h2> </td>
                    <td><img src={elem.pictureUrl} className='imgActers'/></td>
                    <td><h3>{elem.popularity}</h3></td>
                    
                    
                    </tr> 
                  )}
                 
       </tbody>]
       )


useEffect(() => {
  return console.log(contacts5)

},[]);

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={()=>setCreateEl([0])}>Add Random Acteur</button>
      
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
                    <tr key={elem.id}>
                    <td><h2 className='nameActeur'>{elem.name}</h2> </td>
                    <td><img src={elem.pictureUrl} className='imgActers'/></td>
                    <td><h3>{elem.popularity}</h3></td>
                    
                    
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

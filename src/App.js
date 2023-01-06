import './App.css';
import {useState, useEffect} from 'react'
import contacts from "./contacts.json";

function App() { 

// const contacts5 = contacts.slice(0, 5)
const[contacts5, setContacts5] =useState(contacts.slice(0, 6))
// console.log(contacts5)



const randomGo =() =>{
	const checkId = contacts5.map(elem =>elem.id)
	const contactRandom = contacts.filter(e=>!checkId.includes(e.id)&& e)
	const index = Math.floor(Math.random() * contactRandom.length)
	const copyArray = [...contacts5]
	copyArray.unshift(contactRandom[index])
	setContacts5(copyArray)
	// console.log(contactRandom)
	// console.log(index)


	// setContacts5(contacts5.push(contacts[Math.floor(Math.random() * contacts.length)]))
	// return (
	// 	<>
	// 	{randomContact}
	// 	{console.log(randomContact)}
	// 	{contacts5}
	// 	</>
	// )	
}
const addRandom = contacts.slice(0, 6)

// useEffect(() => {
//   return console.log(addRandom)
  
// },[SetContacts5]);

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={()=>randomGo()}>Add Random Acteur</button>
      
      <table>
		    <thead >

			    <tr >
            <th>Name</th>
            <th>Picture</th>
    		<th>Popularity</th>
    		<th>Won an Oscar</th>
    		<th>Won an Emmy</th>
          </tr>

        </thead>

        <tbody>

                  {contacts5.map(elem => 
                    <tr key={elem.id}>
						<td><img src={elem.pictureUrl} className='imgActers'/></td>
						<td><h2 className='nameActeur'>{elem.name}</h2> </td>
						<td><h3>{elem.popularity}</h3></td>
						<td><h3>{elem.wonEmmy&& <p>🏆</p> }</h3></td>
						<td><h3>{elem.wonOscar&& <p>🏆</p>}</h3></td>
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

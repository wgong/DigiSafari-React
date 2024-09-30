import './App.css'
// import styles from './App.module.css'

const todoList = [
  {
      id: 1, 
      title: "Introduction to React",
      isCompleted: true
  },
  {
      id: 3,
      title: "JavaScript Basics Refresher",
      isCompleted: true
  },
  {
      id: 2,
      title: "React with JSX",
      isCompleted: false
  }
]

function App() {

  const showStatus = (isCompleted)=>{
    if(isCompleted){
      return <span>Completed</span>
    }else{
      return <span>Pending</span>
    }
  }

  return (
    <div>
      <h1>Working with List</h1>
      {
        todoList.length == 0 ? <h2>No Todo Items</h2>:
        todoList.map((item)=> <p className={ item.isCompleted? 'completed':'pending'} key={item.id}>{item.title} - {showStatus(item.isCompleted)}</p>)
      }
    </div>
  )
}
export default App

        // todoList.map(function(item) {
        //   return (<p>{item.title}</p>)
        // })

// function App() {
//   let message = <h1>Welcome to JSX Expression</h1>
//   const person ={
//     firstName: 'John',
//     lastName: 'Peter',
//     age: 25
//   }

//   const showDetail = () =>{
//     return <h2>{person.firstName} {person.lastName} age is {person.age}</h2>
//   }

//   const myStyle = {color:'green', backgroundColor: 'lightgreen'}
//   return (
//       <>
//       <div style={myStyle}>Working with Inline sytles in JSX</div>
//       <div className='myDiv'>Working with CSS Stylesheets</div>
//       <div className={styles.myStyle}>Working with CSS Module</div>
//         {message}
//         <hr/>
//         {showDetail()}
//         <img src='/src/assets/react.svg' alt="React logo" />
//       </>
//   )
// }

// export default App

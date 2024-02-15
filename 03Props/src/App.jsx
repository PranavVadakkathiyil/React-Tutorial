import Card from "./Card"
function App() {
  let obj = {
    First : "Btech",
    lover:"vrindha"
  }
  let arr =[1,2,3,4,5]

  return (
    <>
    <h1 className="font-bold text-3xl bg-green-800 rounded-xl p-3 mb-3">Hello Welcom to Vite</h1>
    <Card name="pranav" btntxt="Follow me" obj={obj}/>
    <Card name="Vrinda" obj={obj} arr={arr} />
    
    </>
  )
}

export default App

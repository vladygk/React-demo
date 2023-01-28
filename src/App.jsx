import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Card from "./components/Card"
import "./components/Main.scss"
import data from "./data.js"
function App(){
const cards = data.map(x=><Card imgUrl={x.imgUrl} name={x.name}/>);
    return <>
            <h1>Pichetata</h1>
            <div className="cards">
            {cards};
            </div>
        </>
}

export default App;
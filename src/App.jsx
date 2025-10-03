import './App.css'
import Header from './componentes/Header';
import Mid from './componentes/Mid';
import Left from './componentes/Left';
import Right from './componentes/Right';
import Footer from './componentes/Footer';


function App() {

      return(
            
    <>
         <Header/>

         <Mid/>

                <div className="left-right-cont">

                      <Left/>

                      <Right/>

                </div>

       <Footer/>

 </>
)

}

export default App;

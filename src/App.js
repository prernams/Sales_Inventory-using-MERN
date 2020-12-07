import React from 'react';
import './App.css';


import Sale from './pages/sale'

class App extends React.Component{
    componentDidMount(){
        document.title = "Sales Inventory"
      }
    render(){
    return (
        <div className="App">
            <header
                className="App-header"
                style={{
                height: '50px'
            }}>
                    <strong>
                        PES Inventory Management App
                    </strong>
            </header>
            <Sale />
            
        </div>
    );
    }
}
export default App;

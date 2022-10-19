import React from 'react';
import './App.css';
import logo from './PerficientLogo.png';
import useNavigate from 'react-router-dom';

class App extends React.Component
{
    constructor(props) 
    {
        super(props);
    
        this.state = {
            tableHead: "",
            zipcodeData: [],
            hobbyData: []
        };
        
        this.renderTableHeader = this.renderTableHeader.bind(this);
        this.renderZipCodes = this.renderZipCodes.bind(this);
        this.renderHobbies = this.renderHobbies.bind(this);
    }

    async componentDidMount() 
    {
        document.body.style.backgroundColor = "black";

        const response = await fetch("/react");

        const data = await response.json();
        
        this.setState({tableHead: "ZipCodes", zipcodeData: data});

    }

    renderHobbies() 
    {
        return (
            this.state.hobbyData.map(employee =>
                <tr key={employee.id}>
                    <td className='hobbiesTable'>
                        {employee.hobby1 + ", " + employee.hobby2 + ", " + employee.hobby3}
                    </td>
                </tr>
            )
        )
    }

    renderZipCodes() 
    {
        return (
            this.state.zipcodeData.map(employee =>
                <tr key={employee.locID}>
                    <td>
                        <button className='tableButton' onClick={() => this.setState({tableHead: 'Hobbies In ' + employee.zipcode, hobbyData: employee.employees})}>
                            {employee.zipcode}
                        </button>
                    </td>
                </tr>
            )
        )
    }

    renderTableHeader() 
    {
        return (
            <thead>                    
                <tr>
                    <th>{this.state.tableHead}</th>
                </tr>
            </thead>
        )
    }

    render()
    {
        if (this.state.tableHead == "ZipCodes")
        {
            return (
                <div>
                    <table>
                        
                        {this.renderTableHeader()}
                        
                        <tbody>
                            {this.renderZipCodes()}
                        </tbody>
                        
                            
                    </table>
                </div>
            )
        }
        else
        {
            return (
                <div>
                    <table>
                        
                        {this.renderTableHeader()}
                        
                        <tbody>
                            {this.renderHobbies()}
                        </tbody>
                        
                        
                    </table>
                    <br></br>
                    <button className='backToZipCodes' onClick={() => this.setState({tableHead: 'ZipCodes'})}>
                        Back To ZipCodes
                    </button>
                </div>
            )
        }
    }

}


class PageOutline extends React.Component
{
    constructor(props)
    {
        super(props);

        this.goToHomeScreen = this.goToHomeScreen.bind(this);
    }

    goToHomeScreen() 
    {
        window.location = 'http://localhost:8080/';
    }

    render()
    {
        return (
            <div>

                <h1>
                    <img className='logo' src={logo} alt="Logo" />
                    <div className='Title'>Hobbies Survey</div>
                </h1>

                <App />

                <br></br>
                <button className='newUser' onClick={this.goToHomeScreen}>
                    Add New User
                </button>

            </div>
        )
    }
}

export default PageOutline;



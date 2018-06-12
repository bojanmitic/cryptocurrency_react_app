import React, {Component} from 'react';
import Cryptocurrency from '../Components/Cryptocurrency';
import './ticker.css';

class Tickers extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            search: ''
        }
    }
    fetchCryptocurrencyData = ()=> {
        let that  = this;
        let url = `https://api.coinmarketcap.com/v1/ticker/?limit=2000`; 
        fetch(url)
                .then(function(response){
                    return response.json();
                }).then(function(response){
                    
                    console.log(response);
                    that.setState({
                        data:response,
                        search:''
                    })
                })
    }
    componentDidMount(){
        this.fetchCryptocurrencyData();
    }
    handleChange = (e) => {
        let value = e.target.value;
        this.setState({
           search:value
        }) 
    }
    handleSortByName = ()=>{
       const sortedByName = this.state.data.sort((a,b)=>{
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if(nameA<nameB){
            return -1;
        }if(nameA>nameB){
            return 1;
        }
        return 0;
       });
       this.setState({data:sortedByName});
    }
    handleSortByRank = ()=>{
        const sortByRank = this.state.data.sort((a,b)=>{
            return a.rank-b.rank;
        });
        this.setState({
            data:sortByRank
        })
    }
    handleSortByPrice = ()=>{
        const sortedByPrice = this.state.data.sort((a,b)=>{
            return b.price_usd - a.price_usd;
        });
        this.setState({
            data:sortedByPrice
        })
    } 
    render(){
        const {search,data} = this.state;
        const filterData = data.filter((currency)=>(
            currency.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        ));
        let tickers = filterData.map((currency)=>(
            <Cryptocurrency data={currency} key={currency.id} />
        )); 
        return (
            <div className="tickers-container">
                <div className="inputButtons">
                    <input 
                            type="text"
                            name="search"
                            placeholder="Search"
                            value={this.state.value}
                            onChange={this.handleChange}
                    />
                <div className="buttons">
                    <button className="button"  onClick={this.handleSortByName}>Sort by name</button>
                    <button className="button" onClick={this.handleSortByRank}>Sort by rank</button>
                    <button className="button" onClick={this.handleSortByPrice}>Sort by price</button>
                </div>
                </div>
                <ul className="tickers">
                    {tickers}
                </ul>
                
            </div>
        )
    }
}

export default Tickers;

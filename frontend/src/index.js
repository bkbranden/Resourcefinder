import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import ImageModal from './components/ImageModal';
import request from 'superagent';
import '../static/frontend/css/apps.css';
import WeatherApp from './components/WeatherApp';



// import '../static/frontend/css/styles.css';
// import Main from './components/App';
// ReactDOM.render(<Main />, document.getElementById('root'));

class App extends React.Component { 
    constructor(){
        super();
        this.state = {
            images: [],
            selected: null,
            isOpen: false,
            pictures: [],
            info: [],
            choseninfo: null,
        };
    }

    componentDidMount(){
        fetch("/allresourcelist")
        .then(results => {
            return results.json();
        }).then(data => {
            let jsondata = JSON.parse(data)
            let pictures = jsondata.map((pic) => {
                return(
                    <div key={pic.pk}>
                        <h1 className="resname">{pic.fields.location_name}</h1>
                        <img src={`../../static/frontend/images/${pic.fields.location_name}.jpg`} />
                     </div>
                )
            })
            let temp = jsondata.map((pic) => pic);
            this.setState({pictures: pictures});
            this.setState({info: temp});
        })
    }

    openModal(image){
        let stringtoint = parseInt(image.key, 10);
        let temp = this.state.info[stringtoint -1]
        this.setState({
            isOpen: true,
            selected: image,
            choseninfo: temp
        });
    }

    closeModal(){
        this.setState({
            isOpen: false,
            selected: null,
            choseninfo: null
        });
    }

    handleTermChange(term){
        if(term ==""){
            fetch("/allresourcelist")
            .then(results => {
                return results.json();
            }).then(data => {
                let jsondata = JSON.parse(data)
                let pictures = jsondata.map((pic) => {
                    return(
                        <div key={pic.pk}>
                            <h1 className="resname">{pic.fields.location_name}</h1>
                            <img src={`../../static/frontend/images/${pic.fields.location_name}.jpg`} />
                        </div>
                    )
                })
                let temp = jsondata.map((pic) => pic);
                this.setState({pictures: pictures});
                this.setState({info: temp});
            })
        }
        else{
            fetch(`/resourcelist/${term}`)
            .then(results => {
                return results.json();
            }).then(data => {
                let jsondata = JSON.parse(data)
                let pictures = jsondata.map((pic) => {
                    return(
                        <div key={pic.pk}>
                            <h1 className="resname">{pic.fields.location_name}</h1>
                            <img src={`../../static/frontend/images/${pic.fields.location_name}.jpg`} />
                        </div>
                    )
                })
                this.setState({pictures: pictures});
            })
        }
        
        // const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/|s/g, '+')}&limit=10&api_key=OL9RcaLBDHzcg1JiYHtAEvQxjyWt0dTD`;
        // request.get(url, (err,res) => {
        //     this.setState({ images: res.body.data})
        //     console.log(this.state.images);
        // });
    } 


    render(){
        return (
            <div>
                <WeatherApp />
                <SearchBar onTermChange={term => this.handleTermChange(term)} />
                <ImageList images = {this.state.pictures} 
                           onImageSelect={selected => this.openModal(selected)}
                           />
                <ImageModal isOpen={this.state.isOpen}
                            selected={this.state.selected}
                            onRequestClose={ () => this.closeModal()}
                            info={this.state.choseninfo} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
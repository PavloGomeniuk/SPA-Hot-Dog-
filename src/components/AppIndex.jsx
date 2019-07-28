import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Loader from '../assets/loading-77.gif'



const filterByExpiration = (items) => {
  var now = new Date();
  for (var i = 0; i < items.length; i++) {
    var time=new Date(items[i].expirationDate.replace(/(\d+)-(\d+)-(\d+)/, '$3/$1/$2'));
    if (time<now) {
      delete items[i];
    }
  }
  return items;
};


export default class AppIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
        data: [],
        isLoading: false,
    }
  }
  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://formula-test-api.herokuapp.com/menu', true);
    xhr.send();
    this.setState({ isLoading: true })
    xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) {
          return false
        }
        if (xhr.status !== 200) {
          console.log(xhr.status + ': ' + xhr.statusText)
        } 
        else {
          this.setState({
            data: JSON.parse(xhr.responseText),
            isLoading: false,
          })
        }
    }
  }
  renderProducts() {
    const { data, isLoading } = this.state
    if (isLoading) {
        return <img src={Loader} alt='загружаю...' /> 
    } 
    else {
        const filteredItems = filterByExpiration(data);
        return filteredItems.map(item => {             
          return ([
            <div className="main-section-hotdog-about-text">
          <h3>
            <div className="blue-line"></div>
            {item.name}
          </h3>
          <p>
            {item.description}
          </p>
        </div>,
        <img src={item.backgroundURL} className="w100"/>
        ])
        })
    }
  }
  render() {
    return (
      <div className="main">
    <section className="main-section-first">
      <img src="..\src\assets\hotdog.png"/>
      <p>Dirty Dogs serves all-beef, vegan and vegatagian hot dogs.</p>
      <button>More Dogs ‘n Make Em Hot</button>
    </section>
    <section className="main-section-hotdog">
      <section className='App main-section-hotdog-about'>
            {this.renderProducts()}           
      </section>
    </section>
      </div>

    )
  }
}
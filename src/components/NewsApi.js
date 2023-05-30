import React from "react";
import Axios from "axios";

class NewsApi extends React.Component {
    state = { newsData: [] }
    componentDidMount() {
        const URL = "https://newsapi.org/v2/everything?q=tesla&from=2023-04-25&sortBy=publishedAt&apiKey=26225eccbfd04823b25874412290dc63"
        Axios.get(URL)
            .then(res => {
                this.setState({ newsData: res.data.articles })
            }).catch(error =>
                console.error(`Error: ${error}`)
            );
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.newsData.map(item => (
                        <div className="col-md-4 mb-4" key={item.url}>
                            <div className="card">
                                <img src={item.urlToImage} className="card-img-top" alt={item.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <a href={item.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default NewsApi;

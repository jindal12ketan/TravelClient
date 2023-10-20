import React from "react";
import  Axios from "axios";
export class Api extends React.Component{
    state = {newsData : []}
    componentDidMount(){
        const URL="https://newsapi.org/v2/everything?q=tesla&from=2023-03-21&sortBy=publishedAt&apiKey=26225eccbfd04823b25874412290dc63"
        Axios.get(URL)
        .then(res=>{
            this.setState({newsData: res.data.articles})
        }).catch(error=>
            console.error(`Error: ${error}`)
        );
    }
    render(){
        return(
            <div>
                {this.state.newsData.map(items=>(
                    <div>
                        <h1>{items.title}</h1>
                        <article>
                            <img src={items.urlToImage} width={200} height={300}/>
                            <br/>
                            <p>{items.description}</p>
                        </article>
                    </div>
                ))}
            </div>
        )
    }
}
    import React from "react";
    import './Detail.css'

const add = (poster, title, id) => {
    const mydata = {
        poster: poster,
        title : title,
        id : id
    }
    localStorage.setItem(id, JSON.stringify(mydata))
}
class Detail extends React.Component{
    componentDidMount(){
        const {location,history} = this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }
    render() {
        const {location} = this.props;
        if (location.state) {
            const state = location.state
            return (
                <div className="detail">
                    <img src={state.poster} alt={state.title} title={state.title} className = "detail__poster"/>
                    <div class ="detail__descript">
                    <h3 className="detail__title">{state.title}</h3>
                    <h3 className="detail__year">{state.year}</h3>
                    <ul className="detail__genres">
                    {state.genres.map((genre,index) =>
                    <li key={index} className="detail_genre">{genre}</li>
                    )}
                    </ul>
                    <button onClick={add.bind(this, state.poster, state.title,state.id)}>+</button>
                    </div>
                    <p className ="detail__summary">{state.summary}</p>                    
                </div>
            )
        }else{ 
            return null;
        }
    }
}
export default Detail;
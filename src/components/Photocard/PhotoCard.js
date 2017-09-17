import React from 'react'
import 'bulma/css/bulma.css'
import './PhotoCard.css'

let parseViewsCount = (count) => {
  return count > 999 ? (count / 1000).toFixed(1) + 'k views' : count
}

const Cards = ({ data, markFavorite }) => (
  <div className="columns">
    <div className="column is-half is-offset-one-quarter">
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image -128x128">
              <img src={data.imageUrl} alt={data.title} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <span className="title">{data.title}</span>
                <span className={`tag tagSpace ${data.type == 'offer' ? 'is-primary' : 'is-danger'}`} >{data.type}</span>
                <br />
                <span className="subtitle">{data.desc}</span>
                <br />
                <br />
                <span className="views">{parseViewsCount(data['view-count'])}</span>
              </p>
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                {
                  !data.isFavorite ?
                    <a className="button is-danger is-outlined" onClick={() => { markFavorite(data) }}>Mark as Favourite</a>
                    : ''
                }
                {
                  data.isFavorite && markFavorite ?
                    <span className="icon has-text-danger"><i className="fa fa-heart"></i></span>
                    : ''
                }
              </div>
            </nav>
          </div>
        </article>
      </div>
    </div>
  </div>
);

export const PhotoCard = (props) => {
  let { data, markFavorite } = props;
  if (!markFavorite) {
    data = data.filter(obj => obj.isFavorite)
  }
  return (
    <div>
      {
        markFavorite ?
          data.map((obj, i) => <Cards data={obj} markFavorite={markFavorite} key={i} />)
          :
          data.length > 0 ?
            data.map((obj, i) => {

              return <Cards data={obj} markFavorite={markFavorite} key={i} />
            }) :
            <div className="column is-half is-offset-one-quarter">
             <article className="message is-dark">
               <div className="message-header">
                 <p>Opps..</p>
               </div>
               <div className="message-body">
                <strong>Please Mark Your Favourite From The List Menu</strong>
                </div>
             </article>
            </div>
      }
    </div>
  )
};


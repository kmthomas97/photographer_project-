const Portfolio = ({ image, name }) =>  { 

  return (<article id ="portfolio" className="single-portfolio">
    <div className='idk'></div>
    <img src={image} alt={name} className="img-portfolio" />
    <div className="portfolio-info">
    </div>
  </article>
  );
}
export default Portfolio
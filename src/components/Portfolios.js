import Portfolio from "./Portfolio"

const Portfolios = ({portfolios, removePortfolio}) => {
  return <section>
    <div className="main-portfolio-div">
    <div className="title-portfolio">
      <h2>Photography Portfolio</h2>
    </div>
    <div className="portfolios">
      {portfolios.map((portfolio)=>{
        console.log(portfolio);
      return <Portfolio key={portfolio.id} {...portfolio} removePortfolio ={removePortfolio}/>;
      })}
    </div>
    </div>
  </section>
}
export default Portfolios
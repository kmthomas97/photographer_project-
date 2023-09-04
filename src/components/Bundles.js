import Bundle from './Bundle';

const Bundles = ({bundles, removeBundle}) => {
  return <section>
    <div className="title-photography">
      <h2>Photography Bundles</h2>
    </div>
    <div className="bundles">
      {bundles.map((bundle)=>{
        console.log(bundle);
      return <Bundle key={bundle.id} {...bundle} removeBundle = {removeBundle}/>;
      })}
    </div>
  </section>
}

export default Bundles
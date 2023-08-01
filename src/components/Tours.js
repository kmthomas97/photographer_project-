import Tour from './Tour';

const Tours = ({tours, removeTour}) => {
  return <section>
    <div className="title-photography">
      <h2>Photography Packages</h2>
    </div>
    <div className="tours">
      {tours.map((tour)=>{
        console.log(tour);
      return <Tour key={tour.id} {...tour} removeTour = {removeTour}/>;
      })}
    </div>
  </section>
}
export default Tours
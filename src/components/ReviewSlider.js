import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import ReviewData from "../ReviewData"

    const ReviewSlider = () => {
    const [people] = useState(ReviewData);
    const [index, setIndex] = useState(0);

    useEffect(()=> {
        const lastIndex = people.length -1;
        if (index < 0){
            setIndex(lastIndex);
        }
        if(index > lastIndex){
            setIndex(0);
        }
    }, [index, people]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 5000);
        return() => {
            clearInterval(slider)
        }
    }, [index])

  return (
    <StyledReviewSection id='reviews'>
        <div className='review-title'>
            <h2>My Team</h2>
        </div>
        <div className='review-section-center'>
            {people.map((item, indexPeople) => {
                const {id,image,name,job,quote} = item;
                let position = "nextSlide";
                if(indexPeople === index) {
                    position = "activeSlide"
                }
                if(indexPeople === index -1 || (index === 0 && indexPeople === people.length - 1)){
                    position ="lastSlide"
                }
                return (
                    <article className= {position} key={id}>
                        <img src={image} alt={name} className='person-img'/>
                        <h4 className='review-h4'>{name}</h4>
                        <h3 className='job'>{job}</h3>
                        <p className='review-text'>{quote}</p>
                    </article>
                );
            })}
            <button className='prev' onClick={() => setIndex(index - 1)}>
                <i className='fa fa-circle-arrow-left fa-lg'/>
            </button>
            <button className='next' onClick={() => setIndex(index + 1)}>
                <i className='fa fa-circle-arrow-right fa-lg'/>
            </button>
        </div>
    </StyledReviewSection>
  );
}


 const StyledReviewSection = styled.section`
  width: 90vw;
  margin: 4rem auto;
  max-width: 1170px;

.review-h4{
  letter-spacing: 0.1rem;
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 1rem;
}

@media screen and (min-width: 992px) {
  .review-section{
    width: 95vw;
  }
}

.icon{
  font-size: 3rem;
  color: hsl(21, 62%, 45%);
}
.job{
  letter-spacing: 0.1rem;
  font-size: x-large;
  text-transform: capitalize;
  color: hsl(209, 34%, 30%);
  font-weight: 500;
}
.review-section-center{
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 4rem;
  width: 80vw;
  height: 540px;
  max-width: 800px;
  text-align: center;
  position: relative;
  display: flex;
  overflow: hidden;
  background: var(--white-blue);
}
article{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.3s linear;
}
article.activeSlide {
  opacity: 1;
  transform: translateX(0);
}
article.lastSlide {
  transform: translateX(-100%);
}
article.nextSlide{
  transform: translateX(100%);
}
.person-img{
  border-radius: 50%;
  margin-bottom: .5rem;
  margin-top: 2rem;
  width: 200px;
  height: 200px;
  object-fit: cover;
  border: 4px solid var(--white-blue);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
article h4 {
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  font-family: 'Handlee', cursive;
  font-family: 'Sansita', sans-serif;
  font-size: xx-large;
  text-transform: uppercase;
  color: hsl(21, 62%, 45%);
  margin-top: 0rem;
  font-weight: 500;
}
.review-title {
  letter-spacing: 0.2rem;
  font-size: x-large;
  text-transform: capitalize;
  color: hsl(209, 34%, 30%);
  font-weight: 500;
}
.review-title {
  text-align: center;
  margin-bottom: .5rem;
}
.review-title h2{
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: xxx-large;
  font-weight: 500;
  font-family: 'Handlee', cursive;
  font-family: 'Sansita', sans-serif;
}
.review-text{
  letter-spacing: .05 rem;
  font-size: large;
  text-transform: capitalize;
  color: hsl(209, 34%, 30%);
  font-weight: 600;
  max-width: 35rem;
  padding: .5rem;
  margin: 0 auto;
  line-height: 2;
  height: 110px;
}
.prev, 
.next {
  position: absolute;
  top: 200px;
  transform: translateY(-50%);
  background: transparent;
  color: var(--medium-orange);
  width: 1.25rem;
  height: 1.25rem;
  display: grid;
  place-items: center;
  border-color: transparent;
  font-size: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.3s linear;
}
.prev:hover,
.next:hover {
  background: hsl(21, 62%, 45%);
}
.prev{
  left: 0;
}
.next{
  right: 0;
}
@media (min-width: 800px ){
  .review-text {
    max-width: 45rem;
  }
  .prev,
  .next{
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
  }
} 
`

export default ReviewSlider
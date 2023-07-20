import { styled } from "styled-components"
import LoadingWrapper from "./LoadingWrapper";

const Content = ({countries, isLoading}) => {
  
  return (
    <ContentView >
      <LoadingWrapper isLoading={isLoading}>
        <div className='countries'>
          {countries.map((country, index) => {
            return (
              <div key={index} className='country-card'>
                <div className='img-container' height={'10rem'}>
                  <img src={country.flags.png} alt={country.flags.alt} className='image'/>
                </div>

                <div className='country-info-display'>
                  <div className="country-name">
                    <h3>{country.name.official}</h3>
                  </div>

                  <div className="country-info">
                    <p>Population: <span>{country.population.toLocaleString()}</span></p>
                    <p>Region: <span>{country.region}</span></p>
                    <p>Capital: <span>{country.capital}</span></p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </LoadingWrapper>
    </ContentView>
  )
}

const ContentView = styled.div`
  margin: 1rem 3.75rem;
  background-color: #fafafa;

  .filter-search {
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .countries{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
  }
  
  .country-card {
    height: 20rem;
    border-radius: 0.3rem;
    background: #ffffff;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);
    
    .img-container {
      width: 100%;
      height: 10.75rem;
      
      .image {
        width: 100%;
        height: 100%;
        border-radius: 0.25rem 0.25rem 0 0;
      }
    }

    .country-info-display {
      padding: 0.75rem 2rem;
      display: flex;
      flex-flow: column nowrap;
      gap: 1rem;

      .country-name {

      }
      
      .country-info {
        
      }
    }
  }
  `;

export default Content

  // <div></div>

  // <div>
  //   

  //   {/* <select name='filters' value={region} id="">
  //     {countries.filter(country => {
  //       return (
  //         <option key={country.region} value={country.region}>{country.region}</option>
  //       )
  //     })}
  //   </select> */}
  // </div>
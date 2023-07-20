import axios from "axios";
import { useEffect, useState } from "react";
import { styled } from "styled-components"
import Content from "./components/Content";
import Header from "./components/Header";
import Paginator from "./components/Paginator";
import Filter from "./components/Filter";

const Home = () => {
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredCountries, setFilteredCountries] = useState(countries)
  const [region, setRegion] = useState('all')
  
  //Handling countries render
  const fetchCountries = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all')
      console.log(response.data)
      setCountries(response.data)
      setIsLoading(false)
    } catch (error) {
      console.log(error.response)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  //Handling filter render
  const filterCountry = (region) => {
    const filteredCountry = countries.filter(country => country.region === region)
    console.log(filteredCountry)
    return filteredCountry
  }

  const handleRegionChange = (event) =>{
    setRegion(event.target.value)
  }

  useEffect(() => {
    if(region !== 'all') {
      console.log(region)
      setFilteredCountries(filterCountry(region))
    } else {
      setFilteredCountries(countries)
    }
  }, [region, countries])

  // Get current countries
  const countriesPerPage = 25
  const lastIndex = currentPage * countriesPerPage
  const firstIndex = lastIndex - countriesPerPage
  const currentCountries = filteredCountries.slice(firstIndex, lastIndex)

  // Change page
  const paginate = async (pageNumber) => {
    setIsLoading(true)
    try {
      await fetchCountries()
      setCurrentPage(pageNumber)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  } 

  return (
    <HomeView>
      <Header/>
      <div className='filter-search'>
        <div></div>
        <Filter 
          region={region}
          onRegionChange={handleRegionChange}
        />
      </div>
      <Content 
        isLoading={isLoading}
        countries={currentCountries}
      />
      <Paginator
        currentPage={currentPage}
        countriesPerPage={countriesPerPage} 
        paginate={paginate} 
        totalCountries={countries.length}
      />
    </HomeView>
  )
}

const HomeView = styled.div`
  .filter-search {
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default Home
import axios from "axios";
import { useEffect, useState } from "react";
import { styled } from "styled-components"
import Content from "./Content";
import Header from "./Header";
import Paginator from "./Paginator";

const Home = () => {
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1);
  

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

  // Get current countries
  const countriesPerPage = 25
  const lastIndex = currentPage * countriesPerPage
  const firstIndex = lastIndex - countriesPerPage
  const currentCountries = countries.slice(firstIndex, lastIndex)

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

`;

export default Home
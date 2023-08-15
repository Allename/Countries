import { useState } from "react"
import { styled } from "styled-components"

const Paginator = ({currentPage, countriesPerPage, totalCountries, paginate, filteredCountries}) => {
  const pageNumbers = []

  // iterate over array and push pageNumbers
  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i)
  }

  const renderPages = pageNumbers.map((number) => {
    const active = currentPage === number;

    return (
      <PaginationItem key={number}>
         <PaginationLink
          active={active}
          onClick={() => paginate(number)}
         >
          {number}
        </PaginationLink>
      </PaginationItem>
    )
  })

  return (
    <Paginate>
      <PaginationList className='pagination'>
        <PaginationItem>
          <PaginationLink
            disabled={currentPage === 1}
            onClick={() => paginate(currentPage - 1)}
          >
            Prev
          </PaginationLink>
        </PaginationItem>
        <PaginationList>{renderPages}</PaginationList>
        <PaginationItem>
          <PaginationLink
            disabled={currentPage * countriesPerPage >= totalCountries}
            onClick={() => paginate(currentPage + 1)}
          >
            Next
          </PaginationLink>
        </PaginationItem>
      </PaginationList>
    </Paginate>
  )
}

const Paginate = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;

const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

const PaginationItem = styled.li`
  margin: 0 5px;
`;

const PaginationLink = styled.button`
  color: #2b3945;
  text-decoration: none;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#2b3945' : 'transparent')};
  color: ${({ active }) => (active ? 'white' : '#2b3945')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export default Paginator
import { styled } from "styled-components"

const Filter = ({region, onRegionChange}) => {

  return (
    <FilterView>
      <select className="filter" name="filters" value={region} onChange={onRegionChange}>
        <option value="all">Filter by region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </FilterView>
  )
}

const FilterView = styled.div`
  .filter {
    /* padding: 0.25rem 1rem; */
    width: 10rem;
    height: 4rem;
    border: none;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);
    
  }
  option {
    padding: 0.25rem;
  }
`;

export default Filter
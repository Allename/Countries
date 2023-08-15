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
  width: 16%;

  .filter {
    width: 100%;
    height: 4rem;
    border: none;
    cursor: pointer;
    padding: 0.25rem 1rem;
    border-radius: 0.25rem;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);
  }
  option {
    margin-right: 0.25rem;
  }
`;

export default Filter
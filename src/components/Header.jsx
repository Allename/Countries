import { useState } from "react";
import { styled } from "styled-components"
import { BsMoon, BsMoonFill } from 'react-icons/bs'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <HeaderView>
      <div className='title'>
        <p>Where in the world?</p>
      </div>

      <div className='icon-wrapper'>
        <div className='icon'
          onClick={toggleDarkMode}
        >
          { darkMode ? (<BsMoon/>) : (<BsMoonFill/>) }
        </div>

        <p className='text'>
          Dark Mode
        </p>
      </div>
    </HeaderView>
  )
}

const HeaderView = styled.header`
  width: 100%;
  padding: 1rem; 
  height: 5rem;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  /* background: white; */
  background: ${({theme, darkMode}) => darkMode ? theme.dark.color.background : theme.light.color.background };
  box-shadow: 0 10px 15px -3px rgba(137, 137, 137, 0.1),0 4px 6px -4px rgba(141, 141, 141, 0.1);

  .title {
    padding: 0 2rem;
  }

  .icon-wrapper {
    padding: 1rem;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;

    .icon {
      padding: 0.3rem 1rem;
      margin: 0.2rem 0;
      cursor: pointer;
    }

    .text {
      padding: 0.3rem 1rem;
    }
  }
`;

export default Header
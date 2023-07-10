import { BarLoader } from 'react-spinners'
import { styled } from 'styled-components';

const LoadingWrapper = ({isLoading, children}) => {
  return (
    <Loading>
      {isLoading ? (
        <BarLoader
          className='center'
          color= {'#202c37'}
          loading={isLoading}
          css={override}
          width={'10rem'}
          size={60}
        />
      ) : (
        children
      )}
    </Loading>
  )
}

const Loading = styled.div`
  .center {
    margin: 20rem auto;
  }
`;

export const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default LoadingWrapper
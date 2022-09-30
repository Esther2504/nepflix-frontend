import styled from 'styled-components';

export const Search = styled.form`
  position: relative;
  display: flex;
  width: 3.5rem;
  height: 3.5rem;
  border: none;
  transition: width 0.3s ease-out;
  overflow-x: hidden;

  input {
    position: absolute;
    border: 0;
    background: transparent;
    padding-left: 3rem;
    flex-grow: 1;
    font-size: 1.5rem;
    top: 0;
    bottom: 0;
    color: white;
    opacity: 0;
    cursor: pointer;

    &:focus {
      outline: 0;
      color: white;
    }
  }
  button {
    background: transparent;
    border: 0;
    cursor: pointer;

    img {
      width: 25px;
    }
  }

  &:focus-within {
    width: 25rem;
    border: solid 1px rgba(255,255,255,0.85);
    background-color: rgb(0, 0, 0, 0.5);

    input {
      opacity: 1;
      color: white;
     
      cursor: initial;
    }

    button {
      margin-right: auto;
     
    }
  }
`;

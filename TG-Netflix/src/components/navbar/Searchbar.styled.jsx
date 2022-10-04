import styled from 'styled-components';

export const Search = styled.form`
  position: relative;
  display: none;
  width: 3.6rem;
  height: 3.6rem;
  padding: 5px;
  overflow-x: hidden;
  border: none;
  transition: width 0ms;

  @media (min-width: 600px) {
    display: flex;
  }

  input {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 95%;
    padding-left: 30px;
    flex-grow: 1;
    font-size: 1.4rem;
    opacity: 0;
    border: 0;
    background: transparent;
    cursor: pointer;

    &:focus {
      outline: 0;
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
    border: 1px solid rgb(255, 255, 255, 0.6);
    background-color: rgb(0, 0, 0, 0.5);
    transition: width 300ms ease-out;

    input {
      opacity: 1;
      color: white;
      cursor: initial;
    }
  }
`;

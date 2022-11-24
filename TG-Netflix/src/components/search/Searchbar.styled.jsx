import styled from 'styled-components';

export const Form = styled.div`
  position: relative;
  display: none;
  width: 3.6rem;
  height: 3.6rem;
  padding: 5px;
  overflow-x: hidden;
  border: none;
  border-radius: 3px;
  transition: width 300ms;

  @media (min-width: 375px) {
    display: flex;
  }

  &:focus-within {
    width: 150px;
    border: 1px solid rgb(255, 255, 255, 0.6);
    background-color: rgb(0, 0, 0, 0.5);
    transition: width 300ms ease-out;

    @media (min-width: 400px) {
      width: 170px;
    }
    @media (min-width: 450px) {
      width: 220px;
    }
    @media (min-width: 500px) {
      width: 270px;
    }

    input {
      opacity: 1;
      color: white;
      cursor: initial;
    }
  }

  input {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 95%;
    height: 100%;
    padding-left: 35px;
    flex-grow: 1;
    font-size: 1.4rem;
    opacity: 0;
    border: 0;
    background: transparent;
    cursor: pointer;

    &:focus {
      outline: transparent;
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
`;

export function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="search-icon"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 11C13 13.7614 10.7614 16 8 16C5.23858 16 3 13.7614 3 11C3 8.23858 5.23858 6 8 6C10.7614 6 13 8.23858 13 11ZM14.0425 16.2431C12.5758 17.932 10.4126 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 11.9287 15.8417 12.8205 15.5507 13.6497L24.2533 18.7028L22.7468 21.2972L14.0425 16.2431Z"
        fill="white"
      ></path>
    </svg>
  );
}

import styled from 'styled-components';

export const ControlsSection = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 14vh;
    width: 100%;
    background: #bdc3c7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const TitleSection = styled.div`
    height: 4vh;
    width: 100%;
    max-width: 76rem;
    padding: 0 3rem;
    border-bottom: .1rem solid #333;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    letter-spacing: .1rem;
    h4{
        font-size: 1.4rem;
        text-transform: capitalize;
        margin-right: 2.2rem;
    }
    p{
        font-size: 1.2rem;
        text-transform: capitalize;
    }
`;

export const ControlContainer = styled.div`
    height: 100%;
    width: 100%;
    max-width: 56rem;
    padding: 0 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const IconHolder = styled.div`
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    box-shadow: 0 -.2rem .5rem rgba(255,255,255,.3),
    0 .1rem .1rem rgba(40,40,40,.3);
    font-size: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .25s ease-out;
    &#play{
        height: 5rem;
        width: 5rem;
        font-size: 4rem;
        padding-left: 0;
    }
    &:hover{
      box-shadow: 0 -.1rem .1rem rgba(255,255,255,.2),
      0 .1rem .1rem rgba(0,0,0,.2);
      color: aquamarine;
      //filter: blur(.1rem);
      cursor: pointer;
    }
    &:active, &:focus {
        box-shadow: 0;
        border: .1rem solid rgba(200,200,200,.1);
    }
  &.active{
      color: red;
  }
`;
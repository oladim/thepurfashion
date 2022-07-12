import React from 'react'
import styled from 'styled-components'
import { FaPlus, FaMinus } from 'react-icons/fa'

const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <Wrapper>
      <button type='button' className='amount-btn' onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className='amount'>{amount}</h2>
      <button type='button' className='amount-btn' onClick={increase}>
        <FaPlus />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  margin-top: 0;
  h2 {
   font-size: 2rem;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  // h2 {
  //   margin-bottom: 0;
  // }

  @media (min-width: 360px) {
      width: 80px;
      margin-left:-10px;
    }
`

export default AmountButtons

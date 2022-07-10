import React from 'react'
// import styled from 'styled-components'
import { useFilterContext } from '../src/context/filter_context';
import { getUniqueValues } from '../src/utils/helpers';
// import { FaCheck } from 'react-icons/fa'

const Filters = () => {
  const {
    filters: {
      category,
      // category,
      // company,
      // color,
      // min_price,
      // price,
      // max_price,
      // shipping,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext()

  const categories = getUniqueValues(all_products, 'category')
  // const companies = getUniqueValues(all_products, 'company')
  // const colors = getUniqueValues(all_products, 'colors')

  return (
    <>
    
       
        
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type='button'
                    name='category'
                    className={`${
                      category === c ? 'active' : null
                    }`}
                  >
                    {c}
                  </button>
                )
              })}
        
       
      
        <button type='button' className='clear-btn' onClick={clearFilters}>
          {' '}
          Clear filters
        </button>
   
    </>
  )
}

// const Wrapper = styled.section`

//   .active {
//     border-color: var(--clr-grey-5);
//   }

  
// `

export default Filters

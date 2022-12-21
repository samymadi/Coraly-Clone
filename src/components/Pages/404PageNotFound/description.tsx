import React from 'react'


import TitleDescTemp from '../../shared/titleDescTemp'


const PAGE_NOT_FOUND='Page not found';
const PAGE_NOT_FOUND_DESC ='The page you are trying to reach is not available. It may have been deleted or its URL was misspelled.'

function Description() {
  return (
    <TitleDescTemp
        title={PAGE_NOT_FOUND}
        description={PAGE_NOT_FOUND_DESC}
        titleStyle={{
            textAlign:'center',
            marginBottom:'24px',

        }}
        descStyle={{
            textAlign:'center',
        }}/>
        
  )
}

export default Description
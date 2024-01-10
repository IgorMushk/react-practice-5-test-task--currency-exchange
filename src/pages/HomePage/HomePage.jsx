//import Form from 'components/Form/Form'
import { useSelector } from 'react-redux'
import {Form} from '../../components/Form/Form'
import React from 'react'
import { selectResults } from 'redux/selectors'

const HomePage = () => {
  const results = useSelector(selectResults)
  return (
    // <div>HomePage</div>
    <>
    <Form/>
    {/* {results && <p>{results}</p>} */}
    {results > 0 && <p>{results}</p>}
    </>
  )
}

export default HomePage
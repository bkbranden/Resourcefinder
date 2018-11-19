import React from 'react'

const Search = ({ onChange }) => (
  <input type="text" onChange={onChange} placeholder="Enter a resource name..." />
)

export default Search
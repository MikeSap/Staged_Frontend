import API from '../API'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const SearchBar = (props) => {

  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState([]);
  const { setIds, bandMembers } = props

  const handleSearch = (query) => {
    setIsLoading(true);

    fetch(`${API}/api/v1/users_search`, {
      method: "POST",
      headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({query: query})
      })
      .then((resp) => resp.json())
      .then( users => {
        const options = users.map( u => ({
          id: u.id,
          name: u.username,
        }));

        setOptions(options);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIds(selected.map(u => u.id))
  }, [selected, setIds])

  useEffect(() => {
    if (bandMembers){
      let currentMemb = bandMembers.map( u => ({
        id: u.id, 
        name: u.username
      }))
      setSelected([])
      setSelected([...currentMemb])
    }
  }, [bandMembers])

  const filterBy = () => true;

  return (
    <AsyncTypeahead
      filterBy={filterBy}
      id="async-typeahead-multiple"
      isLoading={isLoading}
      labelKey="name"
      multiple
      minLength={1}
      onSearch={handleSearch}
      options={options}
      selected={selected}
      onChange={setSelected}
      placeholder={`Addtional Band Members...`}
      renderMenuItemChildren={(option, props) => (
        <>
          <span>{option.name}</span>
        </>
      )}
    />
  );
};

const readAccess =  state => {
  return {
    bandMembers: state.managedBand.users
  }
}

export default connect(readAccess)(SearchBar)
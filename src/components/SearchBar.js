import API from '../API'
import React, { useState, useEffect } from 'react'
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import history from '../history'

const SearchBar = (props) => {

  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState([]);

  const { type } = props

  const handleSearch = (query) => {
    setIsLoading(true);

    fetch(`${API}/api/v1/${props.type}_search`, {
      method: "POST",
      headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({query: query})
      })
      .then((resp) => resp.json())
      .then( bands => {
        const options = bands.map( b => ({
          photo: b.photo,
          id: b.id,
          name: b.name,
        }));

        setOptions(options);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if(selected[0]){
      history.push(`/${type}/${selected[0].id}`)
    }
  }, [selected, type])

  const filterBy = () => true;

  return (
    <AsyncTypeahead
      filterBy={filterBy}
      id="async-typeahead-multiple"
      isLoading={isLoading}
      labelKey="name"
      minLength={1}
      onSearch={handleSearch}
      options={options}
      selected={selected}
      onChange={setSelected}
      placeholder={`search ${type}...`}
      renderMenuItemChildren={(option, props) => (
        <>

          <img

            alt={option.name}
            src={API + option.photo}
            style={{
              height: '24px',
              marginRight: '10px',
              width: '24px',
            }}
          />
          <span>{option.name}</span>
        </>
      )}
    />
  );
};

export default SearchBar
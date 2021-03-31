import React, { useState } from 'react';

function FileLister(props) {
  const [activeId, setActiveId] = useState(false);
  const [sort, setSort] = useState(false);

  const triggerSort = () => {
      if (!sort) {
          setSort(!sort)
      }        
  }

  function displayItems(items) {
    if (sort) {
      return (items.sort(function(a, b) {
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
      }).map((item, index) => {
        if (item.type !== 'folder') {
          return <li key={index}>{item.name}</li>
        } else {
          return <li key={index} onClick={() => setActiveId(index)} className={`c-filelister__has-children ${activeId === index ? 'active' : 'inactive'}`}>{item.name} <ul>{displayItems(item.files)}</ul></li>;
        }
      }));
    }
    return (items.map((item, index) => {
      if (item.type !== 'folder') {
        return <li key={index}>{item.name}</li>;
      } else {
        return <li key={index} onClick={() => setActiveId(index)} className={`c-filelister__has-children ${activeId === index ? 'active' : 'inactive'}`}>{item.name} <ul>{displayItems(item.files)}</ul></li>;
      }
    }));
  };

  return (
    <div className="c-filelister">
      <ul>{ displayItems(props.files) }</ul>
      <button onClick={triggerSort}>Sort by name</button>
    </div>
  )
}


export default FileLister;
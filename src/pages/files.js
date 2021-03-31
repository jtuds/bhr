import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import fileData from '../data/uploads';
import FileLister from '../components/FileLister';

function FilesPage() {
  return (
    <div className="FilePage">
      <h1>All Files</h1>

      <FileLister files={fileData} />

      <div className="e-back-link">
        <Link to="/">back to home</Link>
      </div>
    </div>
  );
}

export default FilesPage;
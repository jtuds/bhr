import { render, screen } from '@testing-library/react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import App from './App';
import FileLister from './components/FileLister'

test('renders learn react link', () => {
  render(
  <BrowserRouter>
    <App />
  </BrowserRouter>);
  const linkElement = screen.getByText(/View all files/i);
  expect(linkElement).toBeInTheDocument();
});
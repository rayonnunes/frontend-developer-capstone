import { PropTypes } from "prop-types";
import { Search } from 'lucide-react';

import { Input } from "../Input";

export function SearchBox(props) {
  return (
    <div className="search-box">
      <Input id="search-box" type="text" placeholder="Search a restaurant" Prefix={<Search color="#f4ce14" />} {...props} />
    </div>
  )
}

SearchBox.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}
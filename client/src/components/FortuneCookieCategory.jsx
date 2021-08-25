import React from 'react';
import PropTypes from 'prop-types';

const FortuneCookieCategory = ({ handleCategoryChange }) => (
  <div className="FortuneCookieMessageCategory">
    <span>
      Ask the Fortune Cookie About
      {' '}
    </span>
    <select onChange={handleCategoryChange} id="fc-category">
      <option value="all">ALL</option>
      <option value="computers">COMPUTERS</option>
      <option value="definitions">DIFINITIONS</option>
      <option value="miscellaneous">MISCELLANEOUS</option>
      <option value="people">PEOPLE</option>
      <option value="science">SCIENCE</option>
      <option value="wisdom">WISDOM</option>
    </select>
  </div>
);
FortuneCookieCategory.propTypes = {
  handleCategoryChange: PropTypes.func.isRequired,
};
export default FortuneCookieCategory;

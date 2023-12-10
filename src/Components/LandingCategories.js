import React from 'react';
import categories from './LandingCategoriesData';

const LandingCategories = () => {
  return (
    <div className='landing-categories'>
      {categories.map(category => (
        <div key={category.id} className='category'>
          {category.icon}
          <p>{category.name}</p>
        </div>
      ))}
    </div>
  );
}

export default LandingCategories;


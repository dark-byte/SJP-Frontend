import React from 'react';

const categories = [
  {
    id: 1,
    name: 'Software Development',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M5 5v14h14V5H5zm12 12H7v-2h10v2zm0-4H7V7h10v6z" />
      </svg>
    ),
  },
  {
    id: 2,
    name: 'Marketing',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M20.89 11.73l-9-9a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0-.21 1.09 1 1 0 0 0 .87.62H6v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8h3.33a1 1 0 0 0 .87-.53 1 1 0 0 0-.21-1.09zM12 17a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
      </svg>
    ),
  },
  {
    id: 3,
    name: 'Customer Support',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-1.8 0-3.41-.73-4.58-1.9A8.008 8.008 0 0 1 4.1 9.6c1.17-.11 2.34.19 3.4.76 1.3-1.35 2.96-2.12 4.72-2.2 2.04-.09 3.95.6 5.5 1.74A7.963 7.963 0 0 1 12 20zM7 12c0 .28.22.5.5.5h9a.5.50 0 0 0 .5-.5c0-1.61-.68-3.08-1.77-4.11l-1.42 1.42c.19.3.3.66.3 1.09a2 2 0 1 1-4 0 .5.5 0 0 0-1 0 2 2 0 1 1-4 0c0-.43.11-.79.3-1.09L7.77 6.22A7.963 7.963 0 0 1 12 4c3.4 0 6.3 2.08 7.58 5.04a3.496 3.496 0 0 1-1.09 3.7A.5.5 0 0 0 18 14H6a.5.5 0 0 0-.5.5z" />
      </svg>
    ),
  },
  {
    id: 4,
    name: 'Finance',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M4 6h2V4h2v2h10V4h2v2h2v16H4V6zm10 4H8v2h6v-2zm-2 6v2H8v-2h4zm-4 0v2H8v-2h2zm4-8H8v2h4V8zm-2 8v2H8v-2h2zm0-10v2H8V6h4z" />
      </svg>
    ),
  },
  {
    id: 5,
    name: 'Healthcare',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M20 5v6h2v11h-2v2H4v-2H2V5h2V3h16v2h2zm0 2H4v5h16V7zm0 7v6H4v-6h16z" />
      </svg>
    ),
  },
  {
    id: 6,
    name: 'Design',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M21 16.5L18.66 14l-3.87 4.38-3.13-2.36-4.14 5.5H21zm-11 3.5H3.79c-.51 0-1.04-.21-1.41-.59a2.06 2.06 0 0 1 0-2.83L9 8.97l2.68 2.02 2.66-3.36L18 15.7c.37.38.55.86.55 1.41s-.18 1.02-.55 1.41L14.46 20z" />
      </svg>
    ),
  },
];

export default categories;

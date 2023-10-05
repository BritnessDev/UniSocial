const Play = ({ selected = false }) => {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.09513 11.8574C3.59745 12.8148 1.6333 11.7392 1.6333 9.96166V3.17858C1.6333 1.40115 3.59729 0.325521 5.09498 1.28271L10.4012 4.67395C11.7855 5.55871 11.7856 7.58073 10.4013 8.4656L5.09513 11.8574Z"
        stroke={selected ? 'white' : '#0B0E2C'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Play

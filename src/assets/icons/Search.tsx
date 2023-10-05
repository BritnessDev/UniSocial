const Search = ({ selected = false }) => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.16667 14.5638C11.8486 14.5638 14.8333 11.579 14.8333 7.89714C14.8333 4.21524 11.8486 1.23047 8.16667 1.23047C4.48477 1.23047 1.5 4.21524 1.5 7.89714C1.5 11.579 4.48477 14.5638 8.16667 14.5638Z"
        stroke={selected ? 'white' : '#0B0E2C'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.4995 16.2305L12.8745 12.6055"
        stroke={selected ? 'white' : '#0B0E2C'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default Search

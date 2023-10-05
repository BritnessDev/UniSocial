const User = ({ expanded = false }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        style={expanded ? { stroke: '#1476FF' } : { stroke: 'black' }}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0001 13.3154C6.14773 13.3154 2.85791 13.8979 2.85791 16.2305C2.85791 18.5632 6.12686 19.1665 10.0001 19.1665C13.8524 19.1665 17.1413 18.5831 17.1413 16.2514C17.1413 13.9197 13.8733 13.3154 10.0001 13.3154Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        style={expanded ? { stroke: '#1476FF' } : { stroke: 'black' }}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99946 9.98815C12.5275 9.98815 14.5766 7.93818 14.5766 5.4101C14.5766 2.88203 12.5275 0.833008 9.99946 0.833008C7.47138 0.833008 5.42141 2.88203 5.42141 5.4101C5.41288 7.92964 7.44862 9.97961 9.96721 9.98815H9.99946Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default User

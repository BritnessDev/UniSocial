const Chat = ({ expanded = false }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_184_24792)">
        <path
          style={expanded ? { stroke: '#1476FF' } : { stroke: 'black' }}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.8926 15.8919C13.3458 18.4389 9.57465 18.9892 6.48852 17.562C6.03293 17.3786 5.65941 17.2303 5.30431 17.2303C4.31524 17.2362 3.08414 18.1952 2.4443 17.5561C1.80447 16.9162 2.76422 15.6842 2.76422 14.6891C2.76422 14.334 2.62185 13.9671 2.43844 13.5106C1.01053 10.425 1.56159 6.65256 4.10839 4.10633C7.3595 0.854019 12.6415 0.854019 15.8926 4.10549C19.1496 7.36283 19.1438 12.6404 15.8926 15.8919Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          style={expanded ? { stroke: '#1476FF' } : { stroke: 'black' }}
          d="M13.2821 10.3444H13.2896"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          style={expanded ? { stroke: '#1476FF' } : { stroke: 'black' }}
          d="M9.94221 10.3444H9.94971"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          style={expanded ? { stroke: '#1476FF' } : { stroke: 'black' }}
          d="M6.6009 10.3444H6.6084"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_184_24792">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default Chat

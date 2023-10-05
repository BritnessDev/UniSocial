const Home = ({ expanded = false }) => {
  return (
    <div>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          style={expanded ? { stroke: '#1476FF' } : { stroke: 'black' }}
          d="M7.63118 17.009V14.4534C7.63116 13.8034 8.16109 13.2752 8.81767 13.2709H11.2227C11.8824 13.2709 12.4173 13.8003 12.4173 14.4534V14.4534V17.017C12.4171 17.5689 12.862 18.0199 13.4194 18.0329H15.0227C16.6211 18.0329 17.9168 16.7501 17.9168 15.1677V15.1677V7.89774C17.9083 7.27523 17.6131 6.69067 17.1151 6.3104L11.6316 1.9373C10.6709 1.17585 9.30533 1.17585 8.34468 1.9373L2.88518 6.31834C2.38538 6.69706 2.08965 7.2826 2.0835 7.90568V15.1677C2.0835 16.7501 3.37923 18.0329 4.97759 18.0329H6.58096C7.15212 18.0329 7.61514 17.5745 7.61514 17.009V17.009"
          stroke="#303350"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
export default Home
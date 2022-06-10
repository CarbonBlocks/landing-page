import styled from 'styled-components'

const Body = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	background: ${({ theme }) => theme.colors.primaryGray};
	overflow: hidden;
`

export default Body

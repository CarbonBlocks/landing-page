import Link from 'next/link'
import styled from 'styled-components'
import Blockies from 'react-blockies'

// NavBar Container
export const HeaderWrapper = styled.nav`
	width: 100vw;
	height: 10vh;
	transition: height 1s;
	background: ${({ theme }) => theme.colors.primaryGray};
	top: 0;
	z-index: 2;

	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 4vw 0 4vw;
	border-bottom: 8px solid ${({ theme }) => theme.colors.blue};
`

export const TitleAndLogo = styled.div`
	display: flex;
	width: fit-content;
	align-items: center;
	margin-right: 5vw;
`

// Title
export const TitleLogo = styled.img`
	cursor: pointer;
	z-index: 100;
	height: 6vh;
	width: auto;
	margin-right: 1vw;
	/* 
	@media (min-width: ${({ theme }) => theme.device.laptop}) {
		height: 9vh;
	} */
	@media (min-width: ${({ theme }) => theme.device.laptopL}) {
	}
`

export const Title = styled.p`
	cursor: pointer;
	color: ${({ theme }) => theme.colors.white};
	font-family: ${({ theme }) => theme.fonts.inter};
	font-weight: 600;
	letter-spacing: 1px;

	text-decoration: none;
	padding: 0;

	/* margin: 2vh 1vw; */
	font-size: 24px;

	@media (min-width: ${({ theme }) => theme.device.laptop}) {
		font-size: 30px;
	}

	/* @media (min-width: ${({ theme }) => theme.device.laptopL}) {
		font-size: 48px;
	} */
`

export const TitleAndLinkFlex = styled.div`
	display: flex;
	align-items: center;
`

// Links

export const StyledNavLinkList = styled.ul`
	padding: 0;
	list-style: none;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: column;

	height: 100%;
	width: 100%;
	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		flex-direction: row;
	}
`

export const NavLink = styled.a`
	cursor: pointer;
	color: ${({ theme }) => theme.colors.white};
	font-family: ${({ theme }) => theme.fonts.inter};

	/* text-transform: uppercase; */
	/* font-weight: bold; */
	letter-spacing: 1px;

	text-decoration: none;
	padding: 0;

	margin: 2vh 1vw;
	font-size: 12px;

	@media (min-width: ${({ theme }) => theme.device.laptop}) {
		font-size: 16px;
		margin: 0 2vw;
	}

	@media (min-width: ${({ theme }) => theme.device.laptopL}) {
		font-size: 20px;
	}

	&:hover {
		color: ${({ theme }) => theme.colors.blue};
	}
`

// Login Button

export const LoginWrapper = styled.div`
	cursor: pointer;
	overflow: hidden;
	height: 5vh;
	border: solid 2px ${({ theme }) => theme.colors.blue};
	border-radius: 20px;
	padding: 0 2.5vw;

	display: flex;
	justify-content: center;
	align-items: center;

	width: fit-content;
`

export const LoginText = styled.h2`
	font-family: ${({ theme }) => theme.fonts.inter};
	color: ${({ theme }) => theme.colors.white};
	font-size: 16px;

	@media (min-width: ${({ theme }) => theme.device.laptopL}) {
		/* font-size: 24px; */
	}
`

// Logged In Button

export const LoggedInWrapper = styled.div`
	/* background: ${({ theme }) => theme.colors.orange}; */
	cursor: pointer;
	overflow: hidden;
	height: 5vh;
	border: solid 2px ${({ theme }) => theme.colors.blue};
	border-radius: 2.5vh;
	padding: 0 1vw;

	display: flex;
	justify-content: space-around;
	align-items: center;

	width: fit-content;
`

export const Avatar = styled(Blockies)`
	height: 5vh;
	width: 5vh;
	border: solid 2px white;
	border-radius: 50%;
	margin: 0 auto;
`

export const AddressText = styled.h2`
	font-family: ${({ theme }) => theme.fonts.inter};
	color: ${({ theme }) => theme.colors.white};
	font-size: 16px;
	margin-right: 1vh;
	@media (min-width: ${({ theme }) => theme.device.laptopL}) {
		font-size: 16px;
	}
`

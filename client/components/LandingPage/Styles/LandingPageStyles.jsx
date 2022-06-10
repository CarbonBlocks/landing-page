import styled from 'styled-components'
import { HexMain } from '../../../public/images/HexSVGs'

export const PageWrapper = styled.div`
	height: 90vh;
	width: 100vw;
	margin: 0;
	padding: 5vh;
	overflow-x: hidden;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;

	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		padding: 10vh;
	}
`

export const TopWrapper = styled.div`
	height: fit-content;
	width: 80vw;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		/* height: 35vh; */
		align-items: flex-start;
		padding-left: 5vw;
		width: 70vw;
	}

	@media (min-width: ${({ theme }) => theme.device.laptop}) {
		padding-left: 5vw;
		width: 50vw;
	}
`

export const PrimaryText = styled.h1`
	font-family: ${({ theme }) => theme.fonts.inter};
	color: ${({ theme }) => theme.colors.white};
	text-align: left;
	/* font-weight: bold; */

	font-size: 36px;
	line-height: 36px;
	font-weight: 600;
	z-index: 1;
	margin: 0;
	margin-bottom: 7vh;

	@media (min-width: ${({ theme }) => theme.device.laptop}) {
		font-size: 48px;
		line-height: 48px;
	}

	@media (min-width: ${({ theme }) => theme.device.laptopL}) {
		font-size: 64px;
		line-height: 64px;
	}
`

export const SecondaryText = styled.p`
	color: ${({ theme }) => theme.colors.white};

	font-family: ${({ theme }) => theme.fonts.inter};
	text-align: left;
	margin: 0;
	font-size: 16px;
	line-height: 16px;
	font-weight: 500;
	z-index: 1;

	@media (min-width: ${({ theme }) => theme.device.laptop}) {
		font-size: 24px;
		line-height: 30px;
	}
`

export const Footer = styled.section`
	/* Needed for children to be absolutely positioned relative to the parent. */
	position: relative;
	/* The height of the container.
    Must be set, but it doesn't really matter what the value is. */
	height: 15vh;

	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	/* background-image: linear-gradient(#7a9cc6 4%, #639bff); */

	background: ${({ theme }) => theme.colors.primaryGray};

	box-shadow: 0px 2px 20px black, 0px 50px 20px black;
`

export const FooterTextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const FooterText = styled.p`
	color: white;
	font-family: ${({ theme }) => theme.fonts.spaceMono};
	text-align: center;
	width: 40vw;

	margin: 0;
	margin-bottom: 2vh;

	font-size: 12px;

	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		font-size: 16px;
		line-height: 16px;
	}

	@media (min-width: ${({ theme }) => theme.device.laptop}) {
		font-size: 24px;

		line-height: 24px;
	}
`

export const HexagonOne = styled.div`
	height: 10vh;
	width: 12vh;
	clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
	background: ${({ theme }) => theme.colors.blue};
	filter: url('#round');
`

export const MainHex = styled.div`
	position: absolute;
	top: 20%;
	/* margin: auto; */
	left: 1.25vh;

	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		top: 20%;
		right: 10%;
		left: unset;
	}
`

export const BottomWrapper = styled.div`
	height: fit-content;
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-evenly;
	z-index: 1;
`

export const InfoBox = styled.div`
	height: 35vh;
	width: 50vw;
	border-radius: 20px;
	z-index: 1;
	padding: 2%;

	background: ${({ theme }) => theme.colors.blue};
`

export const LogoWrapper = styled.div`
	height: fit-content;
	width: 80vw;

	display: flex;
	align-items: center;
	justify-content: space-evenly;

	@media (min-width: ${({ theme }) => theme.device.laptop}) {
		width: 50vw;
	}
`

export const LogoCircle = styled.div`
	height: 7vh;
	width: 25vw;
	border-radius: 20px;
	background: ${({ theme }) => theme.colors.blue};

	display: flex;
	align-items: center;
	justify-content: center;

	@media (min-width: ${({ theme }) => theme.device.laptop}) {
		height: 10vh;
		width: 10vw;
	}
`

export const StyledIcon = styled.svg`
	fill: white;
	height: 80%;
	width: 80%;
	z-index: 1;
	cursor: pointer;
`

export const Placeholder = styled.img`
	height: 80%;
	width: auto;
	cursor: pointer;
	z-index: 1;
`

export const SocialLink = styled.a`
	all: unset;
`

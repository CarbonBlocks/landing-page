import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
	HeaderWrapper,
	Title,
	TitleAndLinkFlex,
	LoginWrapper,
	LoginText,
} from './Styles/HeaderStyles'
import { DesktopBreakpoint, PhoneBreakpoint } from '../../global/MediaQueries'
// import Burger from './BurgerMenu/Burger'
// import Menu from './BurgerMenu/Menu'
// import NavLinks from './NavLinks'

const Header = () => {
	let listener = null
	const [open, setOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		listener = document.addEventListener('scroll', (e) => {
			var scrolled = document.scrollingElement.scrollTop
			if (scrolled >= 100) {
				if (!isScrolled) {
					setIsScrolled(true)
				}
			} else {
				if (isScrolled) {
					setIsScrolled(false)
				}
			}
		})
		return () => {
			document.removeEventListener('scroll', listener)
		}
	}, [listener])

	return (
		<HeaderWrapper isScrolled={isScrolled}>
			<PhoneBreakpoint>
				<Link href='/'>
					<Title>CarbonBlocks</Title>
				</Link>
				{/* <LoginWrapper>
					<LoginText>Go to app</LoginText>
				</LoginWrapper> */}
			</PhoneBreakpoint>

			<DesktopBreakpoint>
				<Link href='/'>
					<Title>CarbonBlocks</Title>
				</Link>
				{/* <LoginWrapper>
					<LoginText>Go to app</LoginText>
				</LoginWrapper> */}
			</DesktopBreakpoint>
		</HeaderWrapper>
	)
}

export default Header

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
	HeaderWrapper,
	Title,
	TitleAndLogo,
	TitleLogo,
	TitleAndLinkFlex,
	LoginWrapper,
	LoginText,
} from './Styles/HeaderStyles'
import { DesktopBreakpoint, PhoneBreakpoint } from '../../global/MediaQueries'
import Burger from './BurgerMenu/Burger'
import Menu from './BurgerMenu/Menu'
import NavLinks from './NavLinks'

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
					<TitleAndLogo>
						<TitleLogo src='/images/Carblock.png' />
						<Title>CarbonBlocks</Title>
					</TitleAndLogo>
				</Link>
				{/* <LoginWrapper>
					<LoginText>Go to app</LoginText>
				</LoginWrapper> */}
				<Burger open={open} setOpen={setOpen} />
				<Menu open={open} setOpen={setOpen} />
			</PhoneBreakpoint>

			<DesktopBreakpoint>
				<TitleAndLinkFlex>
					<Link href='/'>
						<TitleAndLogo>
							<TitleLogo src='/images/Carblock.png' />
							<Title>CarbonBlocks</Title>
						</TitleAndLogo>
					</Link>
					<NavLinks />
				</TitleAndLinkFlex>

				{/* <LoginWrapper>
					<LoginText>Go to app</LoginText>
				</LoginWrapper> */}
			</DesktopBreakpoint>
		</HeaderWrapper>
	)
}

export default Header

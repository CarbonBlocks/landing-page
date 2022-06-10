import Link from 'next/link'

import { StyledNavLinkList, NavLink } from './Styles/HeaderStyles'

const NavList = [
	{
		route: '/developers',
		title: 'developers',
	},
	{
		route: '/docs',
		title: 'docs',
	},
	{
		route: '/careers',
		title: 'careers',
	},
]

const NavLinks = ({ open, setOpen }) => {
	// const checkIfActive = ({ route }) => (isActive === route ? true : false)
	return (
		<StyledNavLinkList>
			{NavList.map((NavItem) => (
				<li key={NavItem.title} onClick={() => setOpen(!open)}>
					<Link href={NavItem.route} as={NavItem.route} passHref>
						<NavLink href={NavItem.route}>{NavItem.title}</NavLink>
					</Link>
				</li>
			))}
		</StyledNavLinkList>
	)
}

export default NavLinks

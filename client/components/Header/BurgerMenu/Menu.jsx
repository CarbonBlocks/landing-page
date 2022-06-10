import React from 'react'

import { Overlay } from './BurgerMenuStyles'
import NavLinks from '../NavLinks'

const Menu = ({ open }) => {
	return (
		<Overlay open={open}>
			<NavLinks />
		</Overlay>
	)
}
export default Menu

import React, { useState } from 'react'
import Header from '../components/Header'
import Body from '../global/globalStyles/Body'
import LandingPage from '../components/LandingPage'

const Index = () => {
	return (
		<Body id='MainWindow'>
			<Header />

			<LandingPage />
		</Body>
	)
}

export default Index

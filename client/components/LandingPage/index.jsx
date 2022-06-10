import React, { useState, useEffect } from 'react'

import { useRouter } from 'next/router'
import { useWallet } from 'use-wallet'
import Web3 from 'web3'
import { HexOne, HexMain } from '../../public/images/HexSVGs'

import * as Style from './Styles/LandingPageStyles'

const LandingPage = () => {
	// const web3 = new Web3(Web3.givenProvider)
	// const wallet = useWallet()

	return (
		<Style.PageWrapper>
			<Style.MainHex>
				<HexMain height='60vh' />
			</Style.MainHex>

			<Style.TopWrapper>
				<Style.PrimaryText>
					Creating an on-chain web3 carbon economy
				</Style.PrimaryText>

				<Style.SecondaryText>
					CarbonBlocks is bridging carbon credits on-chain. Developing
					tools to offset carbon through web3.
				</Style.SecondaryText>
			</Style.TopWrapper>

			<Style.BottomWrapper>
				{/* <Style.InfoBox>
					<Style.SecondaryText>
						Easily add code to any .sol contract to implement carbon
						removal
					</Style.SecondaryText>
				</Style.InfoBox>
				<Style.LogoWrapper>
					<Style.Logo src='/images/Logos/EthLogo.png' />
					<Style.Logo src='/images/Logos/PolyLogo.png' />
					<Style.Logo src='/images/Logos/BnbLogo.png' />
					<Style.Logo src='/images/Logos/AvaxLogo.png' />
					<Style.Logo src='/images/Logos/FantomLogo.png' />
					<Style.Logo src='/images/Logos/ArbLogo.png' />
					<Style.Logo src='/images/Logos/OpLogo.png' />
				</Style.LogoWrapper> */}

			<Style.LogoWrapper>
				<Style.SocialLink
					href='https://twitter.com/carbonblocks'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Style.StyledIcon
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
					>
						<path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
					</Style.StyledIcon>
				</Style.SocialLink>

				<Style.SocialLink
					href='https://carbonblocks.gitbook.io/api-docs/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Style.Placeholder src='https://cdn.icon-icons.com/icons2/2699/PNG/512/gitbook_logo_icon_168173.png' />
				</Style.SocialLink>
				</Style.LogoWrapper>
			</Style.BottomWrapper>
		</Style.PageWrapper>
	)
}

export default LandingPage

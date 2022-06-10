import { useEffect } from 'react'
import { useWallet } from 'use-wallet'
import Web3 from 'web3'

import {
	Avatar,
	LoginText,
	LoginWrapper,
	LoggedInWrapper,
	AddressText,
} from '../Styles/HeaderStyles'

const Login = () => {
	const wallet = useWallet()
	const web3 = new Web3(Web3.givenProvider)

	useEffect(() => {
		if (window.ethereum) {
			window.ethereum.on('chainChanged', (res) => {
				if (res !== '') document.location.reload()
			})

			window.ethereum.on('accountsChanged', (res) => {
				if (res.length === 0) document.location.reload()
			})

			web3.eth.getAccounts().then((res) => {
				if (res.length > 0) wallet.connect()
			})
		}
	}, [])

	const switchNetworkArbitrum = async () => {
		await web3.currentProvider
			.request({
				method: 'wallet_switchEthereumChain',
				params: [{ chainId: '0xa4b1' }],
			})
			.then((res) => {
				wallet.connect()
			})
			.catch((error) => {
				if (error.code === 4902) {
					addNetworkArbitrum()
				} else {
					alert(error.message)
				}
			})
	}

	const addNetworkArbitrum = async () => {
		await web3.currentProvider
			.request({
				method: 'wallet_addEthereumChain',
				params: [
					{
						chainId: '0xa4b1',
						chainName: 'Arbitrum One',
						rpcUrls: ['https://arb1.arbitrum.io/rpc'],
						nativeCurrency: {
							name: 'Eth',
							symbol: 'ETH',
							decimals: 18,
						},
						blockExplorerUrls: ['https://arbiscan.io/'],
					},
				],
			})
			.then((res) => {
				wallet.connect()
			})
			.catch((error) => {
				alert(error.message)
			})
	}

	// checks if wallet is set to Rinkeby, then connects if valid
	const handleClick = () => {
		if (wallet.status == 'error')
			wallet.error.name == 'ChainUnsupportedError'
				? switchNetworkArbitrum()
				: alert(wallet.error.message)
		else wallet.connect()
	}

	return wallet.status === 'connected' && wallet.account ? (
		<LoggedInWrapper>
			<AddressText>{`${wallet.account.substr(
				0,
				6
			)}....${wallet.account.substr(38, 42)}`}</AddressText>
			<Avatar seed={wallet.account.toLowerCase()} size={8} scale={4} />
		</LoggedInWrapper>
	) : (
		<LoginWrapper onClick={handleClick}>
			<LoginText>Connect</LoginText>
		</LoginWrapper>
	)
}

export default Login

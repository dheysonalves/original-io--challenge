/* eslint-disable */

import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import styled, { keyframes } from 'styled-components';

import PageContainer from '../../components/PageContainer';
import Header from '../../components/Layout/Header/NavBar';
import Main from '../../components/Layout/Main';
import Footer from '../../components/Layout/Footer';

const Homepage = () => {
	const { t } = useTranslation();

	return (
		<PageContainer>
			<Header />
			<Main />
			<Footer />
		</PageContainer>
	);
};

export default Homepage;

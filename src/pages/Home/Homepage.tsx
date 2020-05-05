/* eslint-disable */

import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import styled, { keyframes } from 'styled-components';

import PageContainer from '../../components/PageContainer';
import Header from '../../components/Layout/Header/NavBar';
import Main from '../../components/Layout/Main';

const Homepage = () => {
	const { t } = useTranslation();

	return (
		<PageContainer>
			<Header />
			<Main />
		</PageContainer>
	);
};

export default Homepage;

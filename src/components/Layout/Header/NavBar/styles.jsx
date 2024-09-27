import styled from 'styled-components';

export const Container = styled.header`
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 15px;
    background-color: #ffffff;

/* tablets (portrait) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1223px) {
	flex-direction: row;
}
/* Styles */

/* Desktops and laptops ----------- */
@media only screen  and (min-width : 1224px) {
	flex-direction: column;
}
`;

import Shortener from 'components/Shortener/Shortener';
import styled from 'styled-components';

const Title = styled.h1`
	text-align: center;
	font-weight: 400;
	font-size: 46px;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	pointer-events: none;
	user-select: none;
`;

const TestPage = () => {
	return (
		<>
			<Title>Super Url Shortener</Title>
			<Shortener />
		</>
	);
};

export default TestPage;

import styled from 'styled-components';

export const StyledButton = styled.button`
	margin-left: 529px;
	margin-right: 529px;
	margin-bottom: 15px;
	appearance: none;
	background-color: #2ea44f;
	border: 1px solid rgba(27, 31, 35, 0.15);
	border-radius: 6px;
	box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;
	box-sizing: border-box;
	color: #fff;
	cursor: pointer;
	display: inline-block;
	font-family: -apple-system, system-ui, 'Segoe UI', Helvetica, Arial,
		sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
	font-size: 14px;
	font-weight: 600;
	line-height: 20px;
	padding: 6px 16px;
	position: relative;
	text-align: center;
	text-decoration: none;
	user-select: none;
	-webkit-user-select: none;
	touch-action: manipulation;
	vertical-align: middle;
	white-space: nowrap;

	&:focus:not(:focus-visible):not(.focus-visible) {
		box-shadow: none;
		outline: none;
	}

	&:hover {
		background-color: #2c974b;
	}

	&:focus {
		box-shadow: rgba(46, 164, 79, 0.4) 0 0 0 3px;
		outline: none;
	}

	&:disabled {
		background-color: #94d3a2;
		border-color: rgba(27, 31, 35, 0.1);
		color: rgba(255, 255, 255, 0.8);
		cursor: default;
	}

	&:active {
		background-color: #298e46;
		box-shadow: rgba(20, 70, 32, 0.2) 0 1px 0 inset;
	}
`;

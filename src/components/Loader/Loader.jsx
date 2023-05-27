import React from 'react';
import './Loader.css'

import { Grid } from 'react-loader-spinner';

const MyLoader = () => {
	return (
		<>
			<Grid
				height="80"
				width="80"
				color="darkgrey"
				ariaLabel="grid-loading"
				radius="12.5"
				wrapperStyle={{
					
				}}
				wrapperClass="gridLoader"
				visible={true}
			/>
		</>
	);
};

export default MyLoader;

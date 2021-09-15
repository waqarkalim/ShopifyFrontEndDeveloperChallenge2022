import { ReactElement } from 'react';

import './styles.scss';

type Props = {
	children: ReactElement[];
};

/**
 * @description The Layout component is a component that contains all of the elements of the website
 *
 * @param {ReactElement[]} children
 * @returns ReactElement
 */
const Layout = ({ children }: Props): ReactElement => {
	return <div className="layout">{children}</div>;
};

export default Layout;

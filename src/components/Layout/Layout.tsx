import React, { Fragment, ReactElement } from 'react';

import "./styles.scss";

interface Props {
    children: ReactElement[];
}

const Layout = ({ children }: Props): ReactElement => {
    return (
        <div className="layout">
            {children}
        </div>
    )
}

export default Layout;

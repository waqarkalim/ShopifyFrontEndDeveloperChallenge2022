import React, { Fragment, ReactElement } from 'react';

import "./styles.scss";

type Props = {
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

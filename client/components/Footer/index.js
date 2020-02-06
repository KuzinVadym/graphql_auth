import React from 'react';

import useStyles from './style';

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            Footer
        </div>
    );
};

export default Header;
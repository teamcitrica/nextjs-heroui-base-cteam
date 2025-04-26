import React from 'react'
import classNames from 'classnames';

export const Container = ({className = '', noPadding = false, noLimit=false, children}) => {

    const arrayClasses = [
        { [`${className}`] : className},
        'o-container'
    ]

    if (noPadding){
        arrayClasses.push('no-padding')
    }

    if (noLimit){
        arrayClasses.push('no-width-limit');
    }

    let classes = classNames(arrayClasses);

    return (
        <div className={classes}>{children}</div>
    )
}
export const Col = ({cols, noPadding=false, className="", children}) => {
    const { lg, md, sm, lgPush, mdPush, smPush } = cols;

    const arrayClasses = [
        { [`o-col-${lg}@lg`] : lg},
        { [`o-col-push-${lgPush}@lg`] : lgPush},
        { [`o-col-${md}@md`] : md},
        { [`o-col-push-${mdPush}@md`] : mdPush},
        { [`o-col-${sm}@sm`] : sm},
        { [`o-col-${smPush}@sm`] : smPush},
    ]

    if (className){
        arrayClasses.push(className);
    }
    
    if (noPadding){
        arrayClasses.push('no-padding');
    }

    let classes = classNames(arrayClasses);

    return (
        <div className={classes}>{children}</div>
    )
}


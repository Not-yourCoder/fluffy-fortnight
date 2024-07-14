import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './transition.scss';

type Props = {
    children: ReactNode;
};

const TransitionWrapper: React.FC<Props> = ({ children }) => {
    const location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                timeout={300}
                classNames="fade"
            >
                <div>{children}</div>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default TransitionWrapper;

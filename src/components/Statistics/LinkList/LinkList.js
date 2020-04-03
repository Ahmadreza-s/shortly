import React from 'react';
import './LinkList.css';
import LinkItem from './LinkItem/LinkItem';

const linkList = ({links}) => {
    return (
        <div className='links'>
            {
                links.map(link => <LinkItem key={link.hashUrl}
                                            originalUrl={link.originalUrl}
                                            hashUrl={link.hashUrl}/>)
            }
        </div>
    );
};

export default linkList;

import React from 'react';
import './Statistics.css';
import ShortenBox from './ShortenBox/ShortenBox';
import LinkList from './LinkList/LinkList';

const Statisctics = () => {
    const [links, setLinks] = React.useState([]);
    const linksHandler = link => setLinks(prevState => {
        if (prevState.findIndex(l => l.hashId === link.hashid) !== -1)
            return prevState;
        const links = [...prevState];
        if (links.length === 3)
            links.splice(-1, 1);
        links.unshift({
            hashId     : link.hashid,
            hashUrl    : 'rel.ink/' + link.hashid,
            originalUrl: link.url
        });
        return links;
    });
    return (
        <div className='statistics'>
            <ShortenBox onLinksAdded={linksHandler}/>
            {
                links &&
                <LinkList links={links}/>
            }
        </div>
    );
};

export default Statisctics;

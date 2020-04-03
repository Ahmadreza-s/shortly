import React from 'react';
import './Statistics.css';
import ShortenBox from './ShortenBox/ShortenBox';
import LinkList from './LinkList/LinkList';
import brandRecIcon from '../../assets/images/icon-brand-recognition.svg';
import detailedRecIcon from '../../assets/images/icon-detailed-records.svg';
import fullyCustIcon from '../../assets/images/icon-fully-customizable.svg';

const Statistics = () => {
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

    const advancedStatisticsFeatures = [{
        id      : Math.random(),
        icon    : brandRecIcon,
        title   : 'Brand Recognition',
        subtitle: 'Boost your brand recognition with each click. Generic links don\'t mean a thing. Branded links helps instil confidence in your content.'
    }, {
        id      : Math.random(),
        icon    : detailedRecIcon,
        title   : 'Detailed Records',
        subtitle: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
    }, {
        id      : Math.random(),
        icon    : fullyCustIcon,
        title   : 'Fully Customizable',
        subtitle: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
    }];
    return (
        <>
            <div className='statistics'>
                <ShortenBox onLinksAdded={linksHandler}/>
                {
                    links.length !== 0 ? <LinkList links={links}/> : null
                }
                <div className='advanced-statistics'>
                    <h3 className='advanced-statistics-title'>Advanced Statistics</h3>

                    <p className='advanced-statistics-subtitle'>
                        Track how your links are performing across the web with our advanced statistics dashboard.</p>

                    <div className='advanced-statistics-box-container'>
                        {
                            advancedStatisticsFeatures.map((c, index) => <div className='advanced-statistics-box'
                                                                              style={{marginTop: `${index * 80}px`}}>
                                <div className='advanced-statistics-box-circle'>
                                    <img src={c.icon} alt={c.title}/>
                                </div>
                                <h4 className='advanced-statistics-box-title'>
                                    {c.title}
                                </h4>
                                <p className='advanced-statistics-box-subtitle'>
                                    {c.subtitle}
                                </p>
                            </div>)
                        }
                    </div>
                </div>
            </div>

        </>
    );
};

export default Statistics;

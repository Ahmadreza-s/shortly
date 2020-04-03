import React from 'react';
import './ShortenBox.css';
import background from '../../../assets/images/bg-shorten-desktop.svg';

const fetchOptions = {
    headers: {
        'Accept'      : 'application/json',
        'Content-Type': 'application/json'
    },
    method : 'POST'
};


const ShortenBox = ({onLinksAdded}) => {
    const [url, setUrl] = React.useState('');
    const [error, setError] = React.useState('');
    const onUrlChanged = e => setUrl(e.target.value);

    const fetchHashedLink = async () => {
        let newUrl = url.trim();
        try {
            if (!newUrl)
                throw {empty: true};
            setError(null);
            if (!url.startsWith('http://') && !url.startsWith('https://')) {
                newUrl = ('https://' + url);
                setUrl(newUrl);
            }

            const response = await fetch(`https://rel.ink/api/links/`, {
                ...fetchOptions,
                body: JSON.stringify({url: newUrl})
            });
            const data = await response.json();
            if (!response.ok) throw data;
            else onLinksAdded(data);

        } catch (error) {
            if (error.hasOwnProperty('url'))
                setError(error.url[0]);
            else if (error.empty)
                setError('Please add a link');
            else
                setError('Something went wrong! see the console');
            console.log(error);
        } finally {
            setUrl('');
        }

    };
    const handleEnterKey = async e => {
        if (e.key === 'Enter')
            await fetchHashedLink();
    };
    return (
        <div className='shorten-box' style={{
            backgroundImage: `url(${background})`
        }}>
            <div className='input-box'>
                {
                    error &&
                    <span className='shorten-box-error'>
                         
                    </span>
                }
                <input placeholder='Shorten a link here...'
                       onChange={onUrlChanged}
                       type='url'
                       spellCheck={false}
                       value={url}
                       onKeyDown={handleEnterKey}
                       style={{border: error && '3px solid var(--red)'}}/>

                {
                    error &&
                    <span className='shorten-box-error'>
                        {error}
                    </span>
                }
            </div>
            <button onClick={fetchHashedLink}>
                Shorten it!
            </button>

        </div>
    );
};

export default React.memo(ShortenBox);

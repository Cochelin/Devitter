import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { bookmarkTweetId, updateState } from '../atom/atoms';
import { useAxios } from '../util/useAxios';
import BookmarkTweet from './BookmarkTweet';

const BookMarkRander = () => {

    const BookmarkTweetId = useRecoilValue(bookmarkTweetId)
    const { response, loading, error, clickFetchFunc } = useAxios({

    }, false);
    response && console.log(response)


    useEffect(() => {
        clickFetchFunc({
            method: 'GET',
            url: `/tweet/get/${BookmarkTweetId}`,
        })

    }, [BookmarkTweetId])
    return (
        <>
            {
                response ?
                    response.map((tweet, idx) => {
                        const media = tweet.media === '[]' ? [] : tweet.media.slice(1, -1).replaceAll('\"', '').replaceAll(' ', '').split(',');
                        return (<BookmarkTweet
                            profile={tweet.profile}
                            name={tweet.tweet_name}
                            key={idx}
                            tweetId={tweet.id}
                            link={tweet.tweet_link}
                            id={tweet.tweet_id}
                            contents={tweet.tweet_content}
                            media={media}
                            retweet={tweet.tweet_retweet}
                            likes={tweet.tweet_heart}
                        />)

                    })
                    :
                    null

            }

        </>
    );
};

export default BookMarkRander;
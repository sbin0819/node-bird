import React from 'react';
import Link from 'next/link';
import ProTypes from 'prop-types';

const PostCardContent = ({ postData }) => (
  <div>
    {/* {postData.content} */}
    {postData.split(/(#[^\s#]+)/g).map((v, i) => {
      if (v.match(/(#[^\s#]+)/g)) {
        return (
          <Link href={`/hashtag/${v.slice(1)}`} key={i}>
            <a>{v}</a>
          </Link>
        );
      }
      return v;
    })}
  </div>
);

PostCardContent.propTypes = {
  postData: ProTypes.string.isRequired,
};

export default PostCardContent;

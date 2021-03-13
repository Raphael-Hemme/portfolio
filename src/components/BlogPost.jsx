import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm'

const post = `
## Test

![Series B and C](/assets/images/post-images/20210128/post-20210128-img-03.jpeg)

Yesterday, I was reminded that arrays in JavaScript really don't like to be copied but love to take all the names they can get for themselves.

I was going through a few vanilla JavaScript projects on codecademy to refresh and consolidate the basics and I got stuck for quite a long time on an issue I had where the program gave me as its output completely new arrays with values nowhere present in the "raw data". And the program did that even though I was expecting it just to push those arrays that pass a test into a new array.

To illustrate what I mean, this is a small snippet from the raw data that codecademy provided as a basis for this project:
~~~javascript
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
~~~

This first snippet represents two arrays of digits that - if you join the digits together - form dummy credit card numbers.`

const BlogPost = () => {
  return (
    <article className="blog-post">
      <ReactMarkdown plugins={[gfm]} children={post}>
        
      </ReactMarkdown>
    </article>
  );
};

export default BlogPost;

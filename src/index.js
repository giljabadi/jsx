import React from "react";
import ReactDOM from 'react-dom';
import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCards from "./ApprovalCards";
import '/Users/gilabadi/jsx/src/App.css';

//////////////////////////////////////////////////

const App =() => {
        return (
          <div className="ui container comments">
              <ApprovalCards>
                  <div>
                      <h4>Warning!</h4>
                      Are you sure?
                  </div>
              </ApprovalCards>

              <ApprovalCards>
                <CommentDetail
                author = "Sam"
                timeAgo = "Today at 4:54PM"
                avatar = {faker.image.avatar()}
                post = "hahahah"
                />
              </ApprovalCards>
              <ApprovalCards>
                  <CommentDetail
                      author = "Alex"
                      timeAgo = "Today at 1:24PM"
                      avatar = {faker.image.avatar()}
                      post = "LMAO"
                  />
              </ApprovalCards>

              <ApprovalCards>
                  <CommentDetail
                      author = "Jane"
                      timeAgo = "Yesterday at 2:16AM"
                      avatar = {faker.image.avatar()}
                      post = "test"
                  />
              </ApprovalCards>
          </div>

        )
};

ReactDOM.render(<App />, document.querySelector('#root'));
/*
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
/>



 */
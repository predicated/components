import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return  (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:50pm" 
                    content="That's, like, groovy man!" 
                    avatarImg={faker.image.avatar()} 
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 2:00am" 
                    content="This is totally not fake." 
                    avatarImg={faker.image.avatar()} 
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Yestrerday at 5:000pm" 
                    content="Gort! Klaatu burata nikto!" 
                    avatarImg={faker.image.avatar()} 
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

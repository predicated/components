import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return  (
        <div className="ui container comments">
            <CommentDetail author="Sam" timeAgo="Today at 4:50pm" content="That's, like, groovy man!" avatarImg={faker.image.avatar()} />
            <CommentDetail author="Alex" timeAgo="Today at 2:00am" content="This is totally not fake." avatarImg={faker.image.avatar()} />
            <CommentDetail author="Jane" timeAgo="Yestrerday at 5:000pm" content="Gort! Klaatu burata cheese!" avatarImg={faker.image.avatar()} />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

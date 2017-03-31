import React from 'react';

export default class CommentAvatarList extends React.Component {
<<<<<<< HEAD
    render() {

        const { avatars = [] } = this.props;

        return (
            <div className="comment-avatars">
                <h4>Authors</h4>
                <ul>
                    {avatars.map((avatarUrl, i) => (
                        <li key={i}>
                            <img src={avatarUrl} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
=======
  render() {

    const { avatars = [] } = this.props;

    return (
      <div className="comment-avatars">
        <h4>Authors</h4>
        <ul>
          {avatars.map((avatarUrl, i) => (
            <li key={i}>
              <img src={avatarUrl} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
>>>>>>> a82b17d255f804d18be49efcd4f3a250d8aa25f4
}

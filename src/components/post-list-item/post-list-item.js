import React from 'react';

const PostListItem = () => {
    return (
        <li className="app-list-item d-flex justify-content-between">
            <span className="app-list-item-label">
                hello World!
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="btn-star btn-sm">
                    <i className="fa fa-star"><empty/></i>
                </button>

                <button type="button"
                        className="btn-stash btn-sm">
                        <i className="fa fa-stash-o"><empty/></i>
                </button>
                <i className="fa fa-heart"><empty/></i>
            </div>

        </li>
    )
}

export default PostListItem;
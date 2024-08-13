'use client'

import React from 'react'
import { Link } from 'react-router-dom'
import { Img as Image } from 'react-image'

import userImg1 from '../../assets/images/blog-details/comment1.jpg'
import userImg2 from '../../assets/images/blog-details/comment2.jpg'
import userImg3 from '../../assets/images/blog-details/comment3.jpg'

const CommentsArea: React.FC = () => {
  return (
    <>
      <div className="comments-area">
        <h3 className="comments-title">2 Comments:</h3>

        <ol className="comment-list">
          <li className="comment">
            <div className="comment-body">
              <footer className="comment-meta">
                <div className="comment-author vcard">
                  <Image
                    src={userImg1}
                    className="avatar"
                    alt="image"
                    width={70}
                    height={70}
                  />
                  <b className="fn">John Jones</b>
                  <span className="says">says:</span>
                </div>

                <div className="comment-metadata">
                  <span>January 24, 2020 at 10:59 am</span>
                </div>
              </footer>

              <div className="comment-content">
                <p>
                  Lorem Ipsum has been the industry’s standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type.
                </p>
              </div>

              <div className="reply">
                <Link to="#" className="comment-reply-link">
                  Reply
                </Link>
              </div>
            </div>

            <ol className="children">
              <li className="comment">
                <div className="comment-body">
                  <footer className="comment-meta">
                    <div className="comment-author vcard">
                      <Image
                        src={userImg2}
                        className="avatar"
                        alt="image"
                        width={70}
                        height={70}
                      />
                      <b className="fn">Steven Smith</b>
                      <span className="says">says:</span>
                    </div>

                    <div className="comment-metadata">
                      <span>January 24, 2020 at 10:59 am</span>
                    </div>
                  </footer>

                  <div className="comment-content">
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim
                    </p>
                  </div>

                  <div className="reply">
                    <Link to="#" className="comment-reply-link">
                      Reply
                    </Link>
                  </div>
                </div>
              </li>
            </ol>
          </li>

          <li className="comment">
            <div className="comment-body">
              <footer className="comment-meta">
                <div className="comment-author vcard">
                  <Image
                    src={userImg3}
                    className="avatar"
                    alt="image"
                    width={70}
                    height={70}
                  />
                  <b className="fn">John Doe</b>
                  <span className="says">says:</span>
                </div>

                <div className="comment-metadata">
                  <span>January 24, 2020 at 10:59 am</span>
                </div>
              </footer>

              <div className="comment-content">
                <p>
                  Lorem Ipsum has been the industry’s standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type.
                </p>
              </div>

              <div className="reply">
                <Link to="#" className="comment-reply-link">
                  Reply
                </Link>
              </div>
            </div>
          </li>
        </ol>

        {/* Comment form */}
        <div className="comment-respond">
          <h3 className="comment-reply-title">Leave a Reply</h3>

          <form className="comment-form">
            <p className="comment-notes">
              <span id="email-notes">
                Your email address will not be published.
              </span>
              Required fields are marked <span className="required">*</span>
            </p>
            <p className="comment-form-author">
              <label>
                Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="author"
                name="author"
                required
              />
            </p>
            <p className="comment-form-email">
              <label>
                Email <span className="required">*</span>
              </label>
              <input type="email" id="email" name="email" required />
            </p>
            <p className="comment-form-url">
              <label>Website</label>
              <input type="url" id="url" name="url" />
            </p>
            <p className="comment-form-comment">
              <label>Comment</label>
              <textarea
                name="comment"
                id="comment"
                cols={30}
                rows={5}
                required
              ></textarea>
            </p>
            <p className="form-submit text-center">
              <input
                type="submit"
                name="submit"
                id="submit"
                className="submit"
                value="Post A Comment"
              />
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default CommentsArea

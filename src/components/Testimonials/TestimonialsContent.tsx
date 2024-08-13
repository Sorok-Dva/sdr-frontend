'use client'


import React from 'react'
import { Img as Image } from 'react-image'

const testimonialsData = [
  {
    image: '/images/clients/client1.jpg',
    name: 'Alen Meair',
    designation: 'Web Developer',
    feedbackText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.',

    rating: [
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
    ],
  },
  {
    image: '/images/clients/client2.jpg',
    name: 'Axon Detos',
    designation: 'CEO of ET',
    feedbackText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.',

    rating: [
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
    ],
  },
  {
    image: '/images/clients/client3.jpg',
    name: 'John Dona',
    designation: 'UI/UX Designer',
    feedbackText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.',

    rating: [
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
    ],
  },
  {
    image: '/images/clients/client4.jpg',
    name: 'Jon Smith',
    designation: 'ReactJS Developer',
    feedbackText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.',

    rating: [
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
    ],
  },
  {
    image: '/images/clients/client5.jpg',
    name: 'Dew Smith',
    designation: 'UI/UX Designer',
    feedbackText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.',

    rating: [
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
    ],
  },
  {
    image: '/images/clients/client6.jpg',
    name: 'Jeath Smith',
    designation: 'SEO Developer',
    feedbackText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.',

    rating: [
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
    ],
  },
  {
    image: '/images/clients/client7.jpg',
    name: 'Kilkaz Dew',
    designation: 'UI/UX Designer',
    feedbackText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.',

    rating: [
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
    ],
  },
  {
    image: '/images/clients/client8.jpg',
    name: 'Ana Deth',
    designation: 'PHP Developer',
    feedbackText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.',

    rating: [
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
    ],
  },
  {
    image: '/images/clients/client9.jpg',
    name: 'Zeck Smith',
    designation: 'Founder CEO',
    feedbackText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.',

    rating: [
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
      {
        iconName: 'bx bxs-star',
      },
    ],
  },
]

const TestimonialsContent: React.FC = () => {
  return (
    <>
      <div className="client-area inner-client-page ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            {testimonialsData &&
              testimonialsData.map((value, i) => (
                <div className="col-lg-4 col-sm-6" key={i}>
                  <div className="single-client">
                    <i className="quotes flaticon-left-quotes-sign"></i>
                    <p>{value.feedbackText}</p>

                    <ul>
                      {value.rating.map((value, i) => (
                        <li key={i}>
                          <i className={value.iconName}></i>
                        </li>
                      ))}
                    </ul>

                    <div className="client-img">
                      <Image
                        src={value.image}
                        alt="Image"
                        width={70}
                        height={70}
                      />
                      <h3>{value.name}</h3>
                      <span>{value.designation}</span>
                    </div>
                  </div>
                </div>
              ))}

            {/* Pagination */}
            <div className="col-lg-12">
              <div className="page-navigation-area">
                <nav aria-label="Page navigation example text-center">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link page-links">
                        <i className="bx bx-chevrons-left"></i>
                      </a>
                    </li>

                    <li className="page-item active">
                      <a className="page-link">1</a>
                    </li>

                    <li className="page-item">
                      <a className="page-link">2</a>
                    </li>

                    <li className="page-item">
                      <a className="page-link">3</a>
                    </li>

                    <li className="page-item">
                      <a className="page-link">
                        <i className="bx bx-chevrons-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TestimonialsContent

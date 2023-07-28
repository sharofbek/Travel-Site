import React from 'react'
import { HomeFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import '../AppMedia.scss'



const FooterMedia = () => {
      return (
            <div className='FooterMedia'>
                  <Link to={'/'} className="icon-media">
                        <svg className='svg' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g id="ant-design:home-filled">
                                    <path id="Vector"
                                          d="M22.1843 11.8444L12.5302 2.19731C12.4607
                                      2.12766 12.3781 2.07241 12.2872 2.03471C12.1963 
                                      1.99701 12.0989 1.9776 12.0005 1.9776C11.9021 1.9776
                                       11.8046 1.99701 11.7137 2.03471C11.6228 2.07241 
                                       11.5403 2.12766 11.4708 2.19731L1.81661 11.8444C1.53536 
                                       12.1257 1.37598 12.5077 1.37598 12.9062C1.37598 13.7336
                                        2.04865 14.4062 2.87602 14.4062H3.89323V21.29C3.89323 21.7049 
                                        4.22839 22.04 4.64325 22.04H10.5004V16.7899H13.1255V22.04H19.3577C19.7726 
                                        22.04 20.1077 21.7049 20.1077 21.29V14.4062H21.1249C21.5234 14.4062 21.9054 
                                        14.2492 22.1867 13.9656C22.7703 13.3796 22.7703 12.4304 22.1843 11.8444Z" fill="#2659C3" />
                              </g>
                        </svg>

                        <p>Home</p>
                  </Link>
                  <Link to={'page_2'} className="icon-media">
                        <svg className='svg' width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_1_4218)">
                                    <path d="M17.7518 6.00834H15.504L15.5046 2.25824C15.5046 1.01602 14.4968 0.00817871 13.2545 0.00817871H8.75443C7.51221 0.00817871 6.50437 1.01602 6.50437 2.25824L6.50146 6.00834H4.2514C3.00918 6.00834 2.00134 7.01617 2.00134 8.25839V20.2587C2.00134 21.5009 3.00918 22.5088 4.2514 22.5088H5.00376L5.00142 23.2588C5.00142 23.676 5.33424 24.0088 5.75144 24.0088H7.25148C7.66868 24.0088 8.0015 23.676 8.0015 23.2588L8.00619 22.5088H14.0063L14.0017 23.2588C14.0017 23.6748 14.3356 24.0088 14.7517 24.0088H16.2517C16.6677 24.0088 17.0017 23.6748 17.0017 23.2588L17.0041 22.5088H17.7518C18.994 22.5088 20.0018 21.5009 20.0018 20.2587V8.25839C20.0018 7.01617 18.994 6.00834 17.7518 6.00834ZM8.75621 2.25824H13.2563V6.00834H8.75621V2.25824ZM16.2517 18.0086H5.75144C5.33893 18.0086 5.00142 17.6711 5.00142 17.2586C5.00142 16.8461 5.33893 16.5086 5.75144 16.5086H16.2517C16.6643 16.5086 17.0017 16.8461 17.0017 17.2586C17.0017 17.6711 16.6642 18.0086 16.2517 18.0086ZM16.2517 12.0085H5.75144C5.33893 12.0085 5.00142 11.671 5.00142 11.2585C5.00142 10.846 5.33893 10.5085 5.75144 10.5085H16.2517C16.6642 10.5085 17.0017 10.846 17.0017 11.2585C17.0017 11.671 16.6642 12.0085 16.2517 12.0085Z" fill="#2659C3" />
                              </g>
                              <defs>
                                    <clipPath id="clip0_1_4218">
                                          <rect width="21.0005" height="24.0006" fill="white" transform="translate(0.501221 0.00817871)" />
                                    </clipPath>
                              </defs>
                        </svg>

                        <p>Packages</p>
                  </Link>
                  <Link to={'/page_2'} className="icon-media">
                        <svg className='svg' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g id="ri:hotel-fill">
                                    <path id="Vector" d="M17.0027 19.0089H19.0028V11.0086H13.0025V19.0089H15.0026V13.0087H17.0027V19.0089ZM3.00212 19.0089V4.00828C3.00212 3.74305 3.10748 3.48869 3.29502 3.30115C3.48257 3.1136 3.73693 3.00824 4.00216 3.00824H18.0028C18.268 3.00824 18.5223 3.1136 18.7099 3.30115C18.8974 3.48869 19.0028 3.74305 19.0028 4.00828V9.00849H21.0029V19.0089H22.0029V21.009H2.00208V19.0089H3.00212ZM7.00229 11.0086V13.0087H9.00237V11.0086H7.00229ZM7.00229 15.0087V17.0088H9.00237V15.0087H7.00229ZM7.00229 7.00841V9.00849H9.00237V7.00841H7.00229Z" fill="#2659C3" />
                              </g>
                        </svg>
                        <p>Stays</p>
                  </Link>
                  <Link to={'/page_2'} className="icon-media">
                        <svg className='svg' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g id="ic:baseline-flight">
                                    <path id="Vector" d="M19.7675 15.4882V13.7485L12.8084 9.39901V4.61462C12.8084 3.89261 12.2256 3.30978 11.5036 3.30978C10.7816 3.30978 10.1987 3.89261 10.1987 4.61462V9.39901L3.23962 13.7485V15.4882L10.1987 13.3135V18.0979L8.45896 19.4027V20.7076L11.5036 19.8377L14.5482 20.7076V19.4027L12.8084 18.0979V13.3135L19.7675 15.4882Z" fill="#2659C3" stroke="#2659C3" stroke-width="1.50001" />
                              </g>
                        </svg>

                        <p>FLights</p>
                  </Link>
            </div>
      )
}

export default FooterMedia;
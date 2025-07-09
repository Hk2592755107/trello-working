import React from 'react'

const CardDetailModal = () => {
    return (
        <>
            <div className="modal fade" id="cardDetailModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content bg-dark text-white rounded-4 overflow-hidden">

                        <div className="row card-cover">
                            <div className="col-md-4">
                                <span className="badge bg-secondary board_badge">Done <i className="fa-solid fa-angle-down"></i>
                                    </span>
                            </div>
                            <div className="col-md-4">
                                <img src="/images/card_img.webp" alt="Cover Image"/>
                            </div>
                            <div className="col-md-4">
                                <div className="icon-group d-flex gap-2">
                                    <i className="fa-solid fa-bullhorn"></i>
                                    <i className="fa-regular fa-image"></i>
                                    <i className="fa-solid fa-eye"></i>
                                    <i className="fa-solid fa-ellipsis"></i>
                                    <i className="fa-solid fa-xmark" data-bs-dismiss="modal"></i>
                                </div>


                            </div>

                        </div>

                        <div className="modal-body row">

                            <div className="col-md-8 card_left_box">
                                <h5 className="d-flex card_title">
                                    <i className="fa-regular fa-circle"></i>
                                    new
                                </h5>

                                <div className="d-flex ">
                                    <div className="member_sec">
                                        <h5 className="">Members</h5>
                                        <div className="d-flex align-items-center gap-1">
                                            <span className="member-badge">A</span>
                                            <span className="member-badge">B</span>
                                            <span className="member-badge">C</span>
                                            <span className="add_member"><i className="fa-solid fa-plus"></i></span>
                                        </div>
                                    </div>
                                    <div className="label_sec">
                                        <h5 className="">Labels</h5>
                                        <div className="d-flex">
                                            <span className="label_btn">High</span>
                                            <span className="add_label"><i className="fa-solid fa-plus"></i></span>
                                        </div>
                                    </div>
                                    <div className="date_sec">
                                        <h5 className="">Due date</h5>
                                        <div className="d-flex">
                                            <span className="">
                                                <i className="fa-solid fa-clock me-1"></i> Jul 4, 12:21 PM
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex desc_flex">
                                    <div className="desc_sec ">
                                        <h5 className=""><i className="fa-solid fa-align-left me-3"></i> Description
                                        </h5>
                                    </div>
                                    <span className="desc_edit_btn">Edit</span>
                                </div>
                                <div className="view_desc">
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout. The point of using.</p>
                                </div>

                                <div className="d-flex attch_flex">
                                    <div className="desc_sec ">
                                        <h5 className=""><i className="fa-solid fa-align-left me-3"></i> Description
                                        </h5>
                                    </div>
                                    <span className="desc_edit_btn">Edit</span>
                                </div>
                            </div>
                            <div className="col-md-1"></div>

                            <div className="col-md-3">
                                <div className="card_detail_right_side">
                                    <ul className="btn_sec">
                                        <li className="detail_btn_sec"><i className="fa-solid fa-user-plus"></i>
                                            <span>Join</span></li>
                                        <li className="detail_btn_sec"><i className="fa-solid fa-user"></i>
                                            <span>Members</span></li>

                                        <li className="detail_btn_sec"><i className="fa-solid fa-tag"></i>
                                            <span>Labels</span></li>

                                        <li className="detail_btn_sec"><i className="fa-solid fa-clock"></i>
                                            <span>Date</span></li>

                                        <li className="detail_btn_sec"><i className="fa-solid fa-paperclip"></i>
                                            <span>Attachments</span></li>

                                        <li className="detail_btn_sec"><i className="fa-solid fa-user-plus"></i>
                                            <span>Join</span></li>

                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardDetailModal

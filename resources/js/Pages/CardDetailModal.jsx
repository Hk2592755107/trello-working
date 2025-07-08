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

                                <div className="mb-3 d-flex flex-wrap gap-2">
                                    <button className="btn btn-outline-light btn-sm">+ Add</button>
                                    <button className="btn btn-outline-light btn-sm"><i
                                        className="fa-solid fa-list-check me-1"></i> Checklist
                                    </button>
                                    <button className="btn btn-outline-light btn-sm"><i
                                        className="fa-regular fa-paperclip me-1"></i> Attachment
                                    </button>
                                </div>

                                <div className="d-flex flex-wrap gap-4 align-items-center mb-4">
                                    <div>
                                        <small className="text-muted">Members</small>
                                        <div className="d-flex align-items-center gap-1 mt-1">
                                            <span className="member-badge">AB</span>
                                            <span className="member-badge">AA</span>
                                            <span className="member-badge">M</span>
                                            <button className="btn btn-sm btn-outline-secondary py-0 px-2">+</button>
                                        </div>
                                    </div>
                                    <div>
                                        <small className="text-muted">Labels</small>
                                        <div className="mt-1 d-flex gap-1 align-items-center">
                                            <span className="badge bg-danger">High</span>
                                            <button className="btn btn-sm btn-outline-secondary py-0 px-2">+</button>
                                        </div>
                                    </div>
                                    <div>
                                        <small className="text-muted">Due date</small>
                                        <div className="d-flex align-items-center gap-2 mt-1">
                                            <button className="btn btn-sm btn-outline-light">
                                                <i className="fa-solid fa-clock me-1"></i> Jul 4, 12:21 PM
                                            </button>
                                            <span className="badge bg-warning text-dark">Due soon</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <h6><i className="fa-solid fa-align-left me-2"></i> Description</h6>
                                    <p className="text-muted">lorem ipsum</p>
                                    <button className="btn btn-sm btn-outline-light">Edit</button>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <h6 className="mb-0">Comments and activity</h6>
                                    <button className="btn btn-sm btn-outline-secondary">Hide details</button>
                                </div>

                                <textarea className="form-control bg-dark text-white border-secondary mb-2" rows="2"
                                          placeholder="Write a comment..."></textarea>
                                <button className="btn btn-primary btn-sm mb-4">Comment</button>

                                <div className="activity-feed">
                                    <div className="d-flex mb-3">
                                        <span className="member-badge me-2">H</span>
                                        <div>
                                            <small><strong>hussain.khan</strong> added <strong>Moiz</strong> to this
                                                card</small>
                                            <div className="text-muted small">7 hours ago</div>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <span className="member-badge me-2">H</span>
                                        <div>
                                            <small><strong>hussain.khan</strong> set this card due at <strong>12:21
                                                PM</strong></small>
                                            <div className="text-muted small">7 hours ago</div>
                                        </div>
                                    </div>
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

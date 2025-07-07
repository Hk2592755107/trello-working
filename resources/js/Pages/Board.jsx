import React, { useState, useRef } from 'react';

const Board = () => {
    const [isAddingCard, setIsAddingCard] = useState(false);


    const handleAddClick = () => {
        setIsAddingCard(true);
    };

    const handleClose = () => {
        setIsAddingCard(false);
    };

    return (
        <>
            <div className="board-wrapper">
                <div className="board-container">
                    {/*<div className="board-column">*/}
                    {/*    <div className="column-header">*/}
                    {/*        <span className="column-title">Done</span>*/}
                    {/*        <span className="column-menu">*/}
                    {/*        <i className="fa-solid fa-ellipsis"></i>*/}
                    {/*    </span>*/}
                    {/*    </div>*/}

                    {/*    <div className="column-body">*/}

                    {/*        {isAddingCard ? (*/}
                    {/*            <div className="card-input-container">*/}
                    {/*            <textarea*/}
                    {/*                className="card-input"*/}
                    {/*                placeholder="Enter card title..."*/}
                    {/*            />*/}

                    {/*                <div className="card-input-actions">*/}
                    {/*                    <button className="add-card-btn">*/}
                    {/*                        Add Card*/}
                    {/*                    </button>*/}
                    {/*                    <button*/}
                    {/*                        className="close-card-btn"*/}
                    {/*                        onClick={handleClose}*/}
                    {/*                    >*/}
                    {/*                        <i className="fa-solid fa-xmark"></i>*/}
                    {/*                    </button>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        ) : (*/}
                    {/*            <div className="add-card" onClick={handleAddClick}>*/}
                    {/*            <span className="add-icon">*/}
                    {/*                <i className="fa-solid fa-plus"></i>*/}
                    {/*            </span>*/}
                    {/*                <span className="add-title">Add a card</span>*/}
                    {/*            </div>*/}
                    {/*        )}*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="board-column">
                        <div className="column-header">
                            <span className="column-title">Done</span>
                            <span className="column-menu">
                            <i className="fa-solid fa-ellipsis"></i>
                        </span>
                        </div>

                        <div className="column-body">
                            <div className="board-card">
                                <div className="board-card-img">
                                    <img src="/images/card_img.webp" alt=""/>
                                </div>
                                <div className="board-content-box">
                                    <div className="priority_sec">
                                    </div>
                                    <div className="board-card-title">
                                        <h3>new</h3>
                                    </div>
                                    <div className="board-card-detail d-flex">
                                        <i className="fa-solid fa-eye"></i>
                                        <button className="board-card-btn"><i className="fa-solid fa-clock"></i> Jul 4
                                        </button>
                                        <i className="fa-solid fa-barcode"></i>
                                        <i className="fa-regular fa-comment"> 1</i>
                                        <div className="board-card-user">
                                            <span>M</span>
                                            <span>A</span>
                                            <span>H</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {isAddingCard ? (
                                <div className="card-input-container">
                                <textarea
                                    className="card-input"
                                    placeholder="Enter card title..."
                                />

                                    <div className="card-input-actions">
                                        <button className="add-card-btn">
                                            Add Card
                                        </button>
                                        <button
                                            className="close-card-btn"
                                            onClick={handleClose}
                                        >
                                            <i className="fa-solid fa-xmark"></i>
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="add-card" onClick={handleAddClick}>
                                <span className="add-icon">
                                    <i className="fa-solid fa-plus"></i>
                                </span>
                                    <span className="add-title">Add a card</span>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Board;

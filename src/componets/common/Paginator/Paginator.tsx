import * as React from 'react';
import s from './Paginator.module.css'

type Props = {
    totalCount: number
    pageSize: number
    currentPage: number
    onClickHandler: (el: number) => void
};
export const Paginator = ({
                              totalCount,
                              pageSize,
                              currentPage,
                              onClickHandler
                          }: Props) => {

    let pagesCount = Math.ceil(totalCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map((el, i) => {

                return <span
                    key={i}
                    className={currentPage === el ? s.selected : ''}
                    onClick={() => onClickHandler(el)}
                >{el}</span>;
            })}
        </div>
    );
};

import s from './Paginator.module.css'
import cn from 'classnames'
import {useState} from 'react';

type Props = {
    totalCount: number
    pageSize: number
    currentPage: number
    onClickHandler: (el: number) => void
    portionSize: number
};
export const Paginator = ({
                              totalCount,
                              pageSize,
                              currentPage,
                              onClickHandler,
                              portionSize = 10
                          }: Props) => {

    let pagesCount = Math.ceil(totalCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(totalCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize


    return (
        <div className={s.pagination}>
            {portionNumber > 1 &&
            <button onClick={ () => {setPortionNumber(portionNumber - 1) }}>PREV</button> }

            {pages
                .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map((p, i) => {
                return <span
                    key={p}
                    className={cn ({[s.selectedPage]: currentPage === p}, s.pageNumber)}
                    onClick={() => onClickHandler(p)}
                >{p}</span>;
            })}

            { portionCount > portionNumber &&
            <button onClick={ () => { setPortionNumber(portionNumber + 1)}} >NEXT</button>}

        </div>
    );
};

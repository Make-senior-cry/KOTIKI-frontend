import cn from 'classnames';

export default function PostPaginatedListPagination({
  hasPrevPage, hasNextPage, onPrev, onNext, page,
}) {
  return (
    <nav>
      <ul className="pagination">
        <li className={cn('page-item', !hasPrevPage && 'disabled')}>
          <button
            type="button"
            className="page-link"
            onClick={onPrev}
            disabled={!hasPrevPage}
          >
            Предыдущая страница
          </button>
        </li>
        <li className="page-item">
          <button
            type="button"
            className="page-link"
            disabled
          >
            {page}
          </button>
        </li>
        <li className={cn('page-item', !hasNextPage && 'disabled')}>
          <button
            type="button"
            className="page-link"
            onClick={onNext}
            disabled={!hasNextPage}
          >
            Слелующая страница
          </button>
        </li>
      </ul>
    </nav>
  );
}

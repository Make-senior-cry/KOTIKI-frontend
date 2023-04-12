import cn from 'classnames';

export default function PostPaginatedListPagination({
  hasPrev, hasNext, onPrev, onNext, page,
}) {
  return (
    <nav>
      <ul className="pagination">
        <li className={cn('page-item', !hasPrev && 'disabled')}>
          <button
            type="button"
            className="page-link"
            onClick={onPrev}
          >
            Предыдущая страница
          </button>
        </li>
        <li className="page-item">
          {page}
        </li>
        <li className={cn('page-item', !hasNext && 'disabled')}>
          <button
            type="button"
            className="page-link"
            onClick={onNext}
          >
            Слелующая страница
          </button>
        </li>
      </ul>
    </nav>
  );
}

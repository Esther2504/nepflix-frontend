import Footer from '../../components/footer/footer';
import * as S from './Search.styled';
import Films from '../../mock-data/search_database.json';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function Search() {
  const [search, setSearch] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation()

  const byTitle = (title) => (data) =>
    data.title.toLowerCase().includes((title || '').toLowerCase());

  const handleTitle = (event) => {
    setSearch({ q: event.target.value });
  };

  // useEffect(() => {
  //   if (!search.get('q') && location.pathname === '/search') {
  //     navigate('/browse');
  //   }
  // }, [search]);

  return (
    <>
      <div className="padding-container">
        <S.Container>
          <input
            type="search"
            value={search.get('q')}
            onChange={handleTitle}
          />
          <h3>Search results:</h3>

          <ul>
            {Films.filter(byTitle(search.get('q'))).map((data) => (
              <li key={data.id}>{data.title}</li>
            ))}
          </ul>
        </S.Container>
        <Footer />
      </div>
    </>
  );
}

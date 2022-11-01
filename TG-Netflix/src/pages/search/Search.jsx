import Footer from '../../components/footer/footer';
import * as S from './Search.styled';
import Films from '../../mock-data/search_database.json';
import { useSearchParams } from 'react-router-dom';

export default function Search() {
  const [search] = useSearchParams();
  const query = search.get('q');

  const matchTitle = (query) => (data) =>
    data.title.toLowerCase().includes((query || '').toLowerCase());

  return (
    <>
      <div className="padding-container">
        <S.Container>
          <h3>Search results:</h3>
          <ul>
            {Films.filter(matchTitle(query)).map((data) => (
              <li key={data.id}>{data.title}</li>
            ))}
          </ul>
        </S.Container>
        <Footer />
      </div>
    </>
  );
}

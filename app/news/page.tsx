import { apiInstagram } from '@/services';
import { apiPublications } from '../model/instagramTypes';
import { InstaCard } from './components';

const getPublications = async (): Promise<apiPublications[]> => {
  const response = await apiInstagram.get('/me/media');
  return response.data.data;
};

const NewsPage = async () => {
  const publications = await getPublications();

  return (
    <section className='flex flex-wrap gap-4 justify-center'>
      {
        publications.map((publication) => (
          <InstaCard
            key={publication.id}
            image={publication.media_url}
            description={publication.caption}
            date={publication.timestamp}
            url={publication.permalink}
          />
        ))
      }
    </section>
  );
};

export default NewsPage;

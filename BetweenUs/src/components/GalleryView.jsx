import {useParams} from 'react-router-dom';
import {useState, useEffect, Suspense} from 'react';
import {supabase} from '../supabaseClient';

function GalleryView() {
  const { id } = useParams(); //get gallery ID from URL
  const [gallery, setGallery] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGallery() {
      const{data, error} = await supabase
        .from('galleries')
        .select('*')
        .eq('id', id)
        .single();
    
      if (error) {
        console.error('Error fetching gallery:', error);
      } else {
        console.log('Gallery data:', data);  // Check what we got
        setGallery(data);
      }
      setLoading(false);
    }
    fetchGallery();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!gallery) return <div>Gallery not found</div>;

  return (
    <div className="gallery-view">
      <h2>Gallery</h2>
      {/* We'll display the grid here */}
    </div>
  );
}

export default GalleryView;
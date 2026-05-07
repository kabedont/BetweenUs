import {useParams} from 'react-router-dom';
import {useState, useEffect, Suspense} from 'react';
import {supabase} from '../supabaseClient';
import PhotoUpload from './PhotoUpload';
import './GalleryView.css';

function GalleryView() {
  const { id } = useParams(); //get gallery ID from URL
  const [gallery, setGallery] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expired, setExpired] = useState(false);

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

    if (data.expires_at && Date.now() > new Date(data.expires_at).getTime()){
      setExpired(true);
      setLoading(false);
      return;
    }

    }
    fetchGallery();
  }, [id]);

  if (loading) return (
      <div className="state-message loading">
          <div className="state-content">
              just a moment...
          </div>
      </div>
  );
  if (!gallery) return <div className="state-message">this memory can’t be found 🌷</div>;
  if (expired) return <div className="state-message expired">this moment has passed 🌷</div>

  const [rows, cols] = gallery.grid_size.split('x').map(Number);
  const totalSlots = rows * cols;

  return (
    <div className="gallery-container">
      <PhotoUpload
        gridSize={gallery.grid_size}
        mode="view"
        rows={rows}
        cols={cols}
        totalSlots={totalSlots}
        photos={gallery.image_urls}
        setPhotos={() => {}}
        description={gallery.descriptions}
        setDescription={() => {}}
      />
    </div>
  );
}

export default GalleryView;
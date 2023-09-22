import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import SwitzerlandImage from '@/assets/Switzerland.svg';

const Populardestination = () => {
  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  const itemData = [
    {
      img: 'https://wallpapers.com/images/hd/switzerland-village-by-the-lake-c2s925gxhnk7bz8v.jpg',
      title: 'Switzerland',
      author: '@bkristastucchio',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://c4.wallpaperflare.com/wallpaper/977/548/906/beach-water-pier-tropical-wallpaper-preview.jpg',
      title: 'Maldives',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://c4.wallpaperflare.com/wallpaper/73/887/604/spain-barcelona-church-wallpaper-preview.jpg',
      title: 'spain',
      author: '@helloimnik',
    },
    {
      img: 'https://c4.wallpaperflare.com/wallpaper/419/725/96/city-street-london-bus-wallpaper-preview.jpg',
      title: 'London',
      author: '@nolanissac',
      cols: 2,
    },
    {
      img: 'https://c4.wallpaperflare.com/wallpaper/836/110/371/5bd3315e6aa5d-wallpaper-preview.jpg',
      title: 'Greece',
      author: '@hjrc33',
      cols: 2,
    },
    {
      img: 'https://c4.wallpaperflare.com/wallpaper/680/388/949/nature-landscape-field-terraces-wallpaper-preview.jpg',
      title: 'Bali',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
      featured: true,
    }
  ];

  return(
    <>

      <div className="row py-4">
        <div className="col-12 text-center">
          <h3 className="py-4 text-custom-primary fw-bold">Most Popular Destinations</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ImageList sx={{ height: 450 }}
            variant="quilted"
            cols={4}
            rowHeight={121}>
            {itemData.map((item) => (
              <ImageListItem key={item.img} cols={item.cols || 2} rows={item.rows || 3}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={item.author}
                  actionIcon={
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${item.title}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    </>
  )
}

export default Populardestination;
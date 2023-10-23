import { Card, CardActionArea, CardMedia, CardContent } from '@mui/material'

interface CardCustomProps {
  title: string,
  description: string,
  img: string
}

const CardCustom: React.FC<CardCustomProps> = ({ title, description, img }) => {
  return (
    <Card className='card-custom' sx={{ maxWidth: 345, maxHeight: 800 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={img}
          alt="green iguana"
        />
        <CardContent className='card-custom__content'>
          <h2 className='card-custom__title'>{title}</h2>
          <h6 className="card-custom__description">{description}</h6>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardCustom;
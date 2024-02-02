import { Card, CardActionArea, CardMedia, CardContent, CardHeader, } from '@mui/material'

interface CardCustomProps {
  title: string,
  description: string,
  img: string
}

const CardCustom: React.FC<CardCustomProps> = ({ title, description, img }) => {
  return (
    <Card className='card-custom' sx={{  maxHeight: 800 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={img}
          alt={title}
        />
        <CardHeader className='card-custom__title' title={ title} />

        <CardContent className='card-custom__content'>
          <h6 className="card-custom__description">{description}</h6>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardCustom;
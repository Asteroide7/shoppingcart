import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import accounting from 'accounting';
import { ActionTypes } from '../reducer';
import {useStateValue} from '../StateProvider'
import {useStyles} from '../CheckoutPage'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function Product({product: {id, nombre, tipoProducto, imagen, precio, rating, descripcion}}) {
  const classes = useStyles();
  const [{basket}, dispatch] = useStateValue();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToBasket = () => {
    dispatch({
      type: ActionTypes.ADD_TO_BASKET,
      item: {
        id,
        nombre, 
        tipoProducto,
        imagen,
        precio,
        rating,
        descripcion,
      },
    });
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography
          variant='h5'
          color='textSecondary'>
          {accounting.formatMoney(precio, "$")}
          </Typography>
        }
        title={nombre}
        subheader="en Stock"
      />
      <CardMedia
      sx={{
        objectFit: 'cover',
        width: '400px'
      }}
        component="img"
        height="194"
        image={imagen}
        alt="Nike"
        title={nombre}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {tipoProducto}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="Add to cart" onClick={addToBasket}>
      <StyledBadge badgeContent={0} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {descripcion}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

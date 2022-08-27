import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import DeleteIcon from '@mui/icons-material/Delete';
import accounting from 'accounting';
import { useStateValue } from '../StateProvider';
import { ActionTypes } from '../reducer';


// import { ClassNames } from '@emotion/react';
// import IconButton from '@mui/material/IconButton';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',

    CardActions: {
        displayflex: 'flex',
        justifyContent: 'space-between',
        textAlign: 'center',
    }
  },
}));

export default function CheckoutCard({product: {id, nombre, tipoProducto, imagen, precio, rating, descripcion}}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [{basket}, dispatch] = useStateValue();

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };
  const removeItem = () => dispatch({
    type: ActionTypes.REMOVE_ITEM,
    id
  })

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
      {/* 1:56 */}
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
     
      <CardActions disableSpacing className={CardActions}>
        <IconButton>
            <DeleteIcon fontSize='large' onClick={removeItem}/>
        </IconButton>
      </CardActions>
    </Card>
  );
}

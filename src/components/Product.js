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
// import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

export default function Product() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography
          variant='h5'
          color='textSecondary'>
          $50
          </Typography>
        }
        title="Shoes"
        subheader="in Stock"
      />
      <CardMedia
      sx={{
        objectFit: 'cover',
        width: '400px'
      }}
        component="img"
        height="194"
        image="https://s2.r29static.com/bin/entry/ebd/0,675,200,1050/x,80/1929471/image.jpg"
        alt="Nike"
        title='nike shoes'
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Running shoes
        </Typography>
      </CardContent>
      <CardActions disableSpacing>


      <IconButton aria-label="cart">
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
            las zapatillas nike son ........
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

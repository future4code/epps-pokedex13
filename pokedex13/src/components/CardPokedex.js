import Card from "@material-ui/core/Card";
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
  import {useHistory} from 'react-router-dom'
import {goToDetails} from '../../src/routes/coordinator'

export default function CardPokedex() {
  const history = useHistory()
  return(
    <Card elevation={2}>
      <CardContent>
        <p>Card Pokedex</p>
        <img src={"https://picsum.photos/300"}/>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">Remover</Button>
        <Button onClick={()=>goToDetails(history)} size="small" variant="contained">Detalhes</Button>
      </CardActions>
    </Card>
  )
}

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
function Path() {
  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb" style={{marginTop:"50px",marginBottom:"0px"}}>
    <Link underline="hover" color="inherit" href="/">
    <i class="fa-solid fa-house" style={{color:"#06286E"}}></i>
    </Link>
    <Link
      underline="hover"
      color="inherit"
      href="/material-ui/getting-started/installation/"
    >
      Flashcard
    </Link>
    <Link
      underline="hover"
      color="inherit"
      href="/material-ui/getting-started/installation/"
    >
      Mathematics
    </Link>
    <Typography color="text.primary" style={{color:"#06286E"}}>Relation and Function</Typography>
  </Breadcrumbs>
  );
}

export default Path;
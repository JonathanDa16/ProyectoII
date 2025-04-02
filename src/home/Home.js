import React from 'react';
import './Home.css';
import { 
  AppBar, Toolbar, Typography, Button, Container, Box, Grid, 
  Card, CardMedia, CardContent, CardActions, Paper, Link 
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';

import wallpaper from '../assets/wallpaper.jpeg';
import wallpaperProgramacion from '../assets/wallpaper_programacion.jpg';
import wallpaperDisenoGrafico from '../assets/wallpaper_diseño grafico.webp';
import wallpaperMarketing from '../assets/wallpaper_marketing.png';
import wallpaperWeb from '../assets/wallpaper_web.png';

import wallpaperPython from '../assets/resource_python.webp';
import wallpaperPhotoshop from '../assets/resource_photoshop.jpeg';
import wallpaperDotnet from '../assets/resource_dotnet.png';

function Home() {
  return (
    <>
      {/* Header - Barra de navegación */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Estudiar Es Gratis
          </Typography>
          <Link href="#inicio" color="inherit" underline="none" sx={{ mx: 1 }}>
            Inicio
          </Link>
          <Link href="#cursos" color="inherit" underline="none" sx={{ mx: 1 }}>
            Cursos
          </Link>
          <Link href="#recursos" color="inherit" underline="none" sx={{ mx: 1 }}>
            Recursos
          </Link>
          <Link href="#sobre-nosotros" color="inherit" underline="none" sx={{ mx: 1 }}>
            Sobre Nosotros
          </Link>
        </Toolbar>
      </AppBar>

      {/* Hero Section - Bienvenida con imagen de fondo */}
      <Box
        id="inicio"
        sx={{
          backgroundImage: `url(${wallpaper})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          py: 10,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Bienvenido a Estudiar Es Gratis
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            Una plataforma educativa gratuita para transformar vidas.
          </Typography>
        </Container>
      </Box>

      {/* Sección Sobre Nosotros */}
      <Container id="sobre-nosotros" sx={{ py: 5 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Sobre Nosotros
        </Typography>
        <Typography variant="body1" paragraph>
          Estudiar Es Gratis es una iniciativa sin fines de lucro comprometida con la educación de calidad para comunidades vulnerables. Nuestro objetivo es ofrecer cursos gratuitos y recursos de aprendizaje que ayuden a potenciar habilidades y oportunidades para el futuro.
        </Typography>
        <Typography variant="body1" paragraph>
          Trabajamos con expertos y colaboradores de diversas áreas para brindar contenidos actualizados y relevantes. Creemos en el poder transformador de la educación y en el impacto positivo que puede tener en la sociedad.
        </Typography>
      </Container>

      {/* Sección de Cursos */}
      <Container id="cursos" sx={{ py: 5, backgroundColor: '#f5f5f5' }} maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Nuestros Cursos
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="180"
                image={wallpaperProgramacion}
                alt="Curso de Programación"
              />
              <CardContent>
                <Typography variant="h6">
                  Curso de Programación
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Aprende a programar desde cero con ejercicios prácticos y teoría aplicada.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" component={RouterLink} to="/curso/programacion">
                  Ver Curso
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="180"
                image={wallpaperDisenoGrafico}
                alt="Curso de Diseño Gráfico"
              />
              <CardContent>
                <Typography variant="h6">
                  Curso de Diseño Gráfico
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Descubre herramientas y técnicas para expresar tu creatividad en diseño.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" component={RouterLink} to="/curso/diseno">
                  Ver Curso
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="180"
                image={wallpaperMarketing}
                alt="Curso de Marketing Digital"
              />
              <CardContent>
                <Typography variant="h6">
                  Curso de Marketing Digital
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Aprende estrategias de marketing en línea para impulsar proyectos y negocios.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" component={RouterLink} to="/curso/marketing">
                  Ver Curso
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="180"
                image={wallpaperWeb}
                alt="Curso de Desarrollo Web"
              />
              <CardContent>
                <Typography variant="h6">
                  Curso de Desarrollo Web
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Aprende a crear sitios web modernos con HTML, CSS y JavaScript.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" component={RouterLink} to="/curso/web">
                  Ver Curso
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Sección Testimonios */}
      <Container sx={{ py: 5 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Testimonios
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="body1" gutterBottom>
                "Gracias a Estudiar Es Gratis, pude aprender nuevas habilidades que me ayudaron a conseguir un mejor trabajo."
              </Typography>
              <Typography variant="subtitle1" align="right">
                - Juan Pérez
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="body1" gutterBottom>
                "Los cursos son muy completos y están diseñados para todos los niveles. ¡Recomendado 100%!"
              </Typography>
              <Typography variant="subtitle1" align="right">
                - María García
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Sección Recursos Educativos */}
      <Container id="recursos" sx={{ py: 5 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Recursos Educativos
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="180"
                image={wallpaperPython}
                alt="Noticia 1"
              />
              <CardContent>
                <Typography variant="h6">
                  Como instalar python en menos de 5 minutos
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  En este tutorial aprenderemos a como instalar python en una computadora windows 10.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" component={RouterLink} to="/blog/python">Leer Más</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="180"
                image={wallpaperPhotoshop}
                alt="Noticia 2"
              />
              <CardContent>
                <Typography variant="h6">
                  Como quitar el fondo de una imagen en Photoshop
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  En este tutorial aprenderemos a como quitar el fondo de una imagen en Photoshop.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" component={RouterLink} to="/blog/photoshop">Leer Más</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="180"
                image={wallpaperDotnet}
                alt="Noticia 3"
              />
              <CardContent>
                <Typography variant="h6">
                  Contruye una API en .NET en 10 minutos
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  En este tutorial aprenderemos a como contruir una API en .NET en 10 minutos.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" component={RouterLink} to="/blog/dotnet">Leer Más</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Footer - Pie de página */}
      <Box sx={{ backgroundColor: '#333', color: 'white', py: 3, mt: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6">
                Estudiar Es Gratis
              </Typography>
              <Typography variant="body2">
                Educar para transformar. Todos los derechos reservados © {new Date().getFullYear()}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
              <Link href="#" color="inherit" sx={{ mx: 1 }}>
                Facebook
              </Link>
              <Link href="#" color="inherit" sx={{ mx: 1 }}>
                X
              </Link>
              <Link href="#" color="inherit" sx={{ mx: 1 }}>
                Instagram
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export { Home };

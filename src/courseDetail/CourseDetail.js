// CourseDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  AppBar, Toolbar, IconButton, Typography, Button, Container, Box, Grid, Card, CardContent, Paper, Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import wallpaperProgramacion from '../assets/wallpaper_programacion.jpg';
import wallpaperDisenoGrafico from '../assets/wallpaper_diseño grafico.webp';
import wallpaperMarketing from '../assets/wallpaper_marketing.png';
import wallpaperWeb from '../assets/wallpaper_web.png';

const courseData = {
  programacion: {
    title: 'Curso de Programación',
    description: 'Aprende a programar desde cero con ejercicios prácticos y teoría aplicada. Incluye HTML, CSS, JavaScript, y algoritmos básicos.',
    image: wallpaperProgramacion,
    modules: ['Introducción a la Programación', 'HTML y CSS', 'JavaScript Básico', 'Proyectos Prácticos'],
    duration: '8 semanas',
    level: 'Principiante',
    language: 'Español',
  },
  diseno: {
    title: 'Curso de Diseño Gráfico',
    description: 'Exprésate con creatividad usando herramientas de diseño como Photoshop e Illustrator. Aprende composición, tipografía y color.',
    image: wallpaperDisenoGrafico,
    modules: ['Fundamentos del Diseño', 'Adobe Photoshop', 'Adobe Illustrator', 'Proyectos Creativos'],
    duration: '6 semanas',
    level: 'Intermedio',
    language: 'Español',
  },
  marketing: {
    title: 'Curso de Marketing Digital',
    description: 'Domina estrategias digitales como SEO, SEM, redes sociales y email marketing para crecer tu marca.',
    image: wallpaperMarketing,
    modules: ['Introducción al Marketing', 'SEO y SEM', 'Redes Sociales', 'Campañas y Analíticas'],
    duration: '7 semanas',
    level: 'Intermedio',
    language: 'Español',
  },
  web: {
    title: 'Curso de Desarrollo Web',
    description: 'Aprende a crear sitios web modernos con HTML, CSS, JavaScript y frameworks como React.',
    image: wallpaperWeb,
    modules: ['HTML y CSS Avanzado', 'JavaScript Interactivo', 'React Básico', 'Proyecto Final'],
    duration: '10 semanas',
    level: 'Avanzado',
    language: 'Español',
  },
};

function CourseDetail() {
  const { id } = useParams();
  const course = courseData[id];

  if (!course) {
    return (
      <Container sx={{ py: 5 }}>
        <Typography variant="h5">Curso no encontrado</Typography>
        <Button variant="contained" color="primary" component={Link} to="/" sx={{ mt: 2 }}>
          Volver al Inicio
        </Button>
      </Container>
    );
  }

  return (
    <>
      {/* Header - Barra de navegación */}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Estudiar Es Gratis
          </Typography>
          <Button color="inherit" component={Link} to="/">Inicio</Button>
          <Button color="inherit">Cursos</Button>
          <Button color="inherit">Recursos</Button>
          <Button color="inherit">Sobre Nosotros</Button>
        </Toolbar>
      </AppBar>

      {/* Hero del Curso */}
      <Box
        sx={{
          backgroundImage: `url(${course.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          py: 12,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>
            {course.title}
          </Typography>
          <Typography variant="h5" component="p" sx={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
            {course.description}
          </Typography>
        </Container>
      </Box>

      {/* Detalles del Curso */}
      <Container sx={{ py: 5 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom>Módulos del Curso</Typography>
            <Divider sx={{ mb: 2 }} />
            {course.modules.map((module, index) => (
              <Card key={index} sx={{ mb: 2 }}>
                <CardContent>
                  <Typography variant="h6">Módulo {index + 1}</Typography>
                  <Typography variant="body1">{module}</Typography>
                </CardContent>
              </Card>
            ))}
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, backgroundColor: '#f5f5f5' }}>
              <Typography variant="h5" gutterBottom>Detalles</Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="body1"><strong>Duración:</strong> {course.duration}</Typography>
              <Typography variant="body1"><strong>Nivel:</strong> {course.level}</Typography>
              <Typography variant="body1"><strong>Idioma:</strong> {course.language}</Typography>
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button variant="contained" color="primary" component={Link} to="/">
            Volver al Inicio
          </Button>
        </Box>
      </Container>

      {/* Footer */}
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
                Twitter
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

export { CourseDetail };
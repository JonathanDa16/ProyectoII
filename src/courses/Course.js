import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@mui/material';

const Course = () => {
  // Datos simulados de cursos
  const [courses] = useState([
    {
      id: 1,
      title: 'Curso de Programación',
      description: 'Aprende los fundamentos de la programación con ejemplos prácticos.',
      image: 'https://via.placeholder.com/300x140?text=Programaci%C3%B3n',
      details: 'En este curso se abordan conceptos básicos y avanzados de programación, utilizando lenguajes como JavaScript y Python.',
      instructor: 'Juan Pérez',
      duration: '6 semanas'
    },
    {
      id: 2,
      title: 'Curso de Diseño Gráfico',
      description: 'Descubre las herramientas y técnicas del diseño gráfico.',
      image: 'https://via.placeholder.com/300x140?text=Dise%C3%B1o+Gr%C3%A1fico',
      details: 'Aprende a utilizar herramientas de diseño como Adobe Photoshop e Illustrator, enfocado en proyectos prácticos.',
      instructor: 'Ana Gómez',
      duration: '4 semanas'
    },
    {
      id: 3,
      title: 'Curso de Marketing Digital',
      description: 'Estrategias y herramientas para triunfar en el mundo digital.',
      image: 'https://via.placeholder.com/300x140?text=Marketing+Digital',
      details: 'Este curso te enseñará a crear campañas digitales efectivas, optimizar SEO y usar las redes sociales de forma estratégica.',
      instructor: 'Carlos Sánchez',
      duration: '5 semanas'
    },
    {
      id: 4,
      title: 'Curso de Fotografía',
      description: 'Domina el arte de la fotografía con técnicas modernas.',
      image: 'https://via.placeholder.com/300x140?text=Fotograf%C3%ADa',
      details: 'Aprende sobre composición, iluminación y edición para capturar momentos únicos y profesionales.',
      instructor: 'Laura Martínez',
      duration: '3 semanas'
    },
    {
      id: 5,
      title: 'Curso de Desarrollo Web',
      description: 'Construye sitios web responsivos y dinámicos desde cero.',
      image: 'https://via.placeholder.com/300x140?text=Desarrollo+Web',
      details: 'El curso cubre HTML, CSS, JavaScript y frameworks modernos para que puedas crear proyectos reales.',
      instructor: 'Miguel Torres',
      duration: '8 semanas'
    }
    // Puedes agregar más cursos según se requiera.
  ]);

  // Estado para el filtro de búsqueda
  const [searchTerm, setSearchTerm] = useState('');
  // Estado para controlar el diálogo y el curso seleccionado
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenDialog = (course) => {
    setSelectedCourse(course);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setSelectedCourse(null);
    setOpenDialog(false);
  };

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Nuestros Cursos
      </Typography>
      {/* Campo de búsqueda */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <TextField
          label="Buscar curso"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearch}
          sx={{ width: '300px' }}
        />
      </Box>

      {/* Galería de cursos */}
      <Grid container spacing={4}>
        {filteredCourses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="140"
                image={course.image}
                alt={course.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {course.description}
                </Typography>
              </CardContent>
              <Box sx={{ p: 2, pt: 0 }}>
                <Button variant="contained" onClick={() => handleOpenDialog(course)}>
                  Ver Detalles
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Diálogo modal para mostrar detalles del curso */}
      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="sm">
        {selectedCourse && (
          <>
            <DialogTitle>{selectedCourse.title}</DialogTitle>
            <DialogContent dividers>
              <DialogContentText>
                {selectedCourse.details}
              </DialogContentText>
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle1">
                  <strong>Instructor:</strong> {selectedCourse.instructor}
                </Typography>
                <Typography variant="subtitle1">
                  <strong>Duración:</strong> {selectedCourse.duration}
                </Typography>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Cerrar</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container>
  );
};

export {Course};

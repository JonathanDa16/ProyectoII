// Blog.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  AppBar, Toolbar, IconButton, Typography, Button, Container, Box, Grid, Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import wallpaperPython from '../assets/resource_python.webp';
import wallpaperPhotoshop from '../assets/resource_photoshop.jpeg';
import wallpaperDotnet from '../assets/resource_dotnet.png';

const blogPosts = {
  python: {
    title: 'Como instalar Python en menos de 5 minutos',
    description: 'En este tutorial aprenderemos a como instalar Python en una computadora Windows 10.',
    image: wallpaperPython,
    content: (
      <>
        <Typography variant="body1" paragraph>
          Python es uno de los lenguajes de programación más populares del mundo, ideal para principiantes y profesionales. Para instalarlo en Windows 10, sigue los siguientes pasos detallados:
        </Typography>
        <Typography variant="h5" gutterBottom>Paso 1: Descarga de Python</Typography>
        <Typography variant="body1" paragraph>
          Ingresa a la página oficial <strong>https://www.python.org</strong>, dirígete a la sección de descargas y selecciona la versión recomendada para Windows. Descarga el instalador ejecutable.
        </Typography>
        <Typography variant="h5" gutterBottom>Paso 2: Ejecución del Instalador</Typography>
        <Typography variant="body1" paragraph>
          Al abrir el instalador, verás una opción que dice "Add Python to PATH". Es fundamental que esta casilla esté marcada para poder usar Python desde la terminal. Luego, selecciona "Install Now".
        </Typography>
        <Typography variant="h5" gutterBottom>Paso 3: Verificación de la Instalación</Typography>
        <Typography variant="body1" paragraph>
          Una vez completada la instalación, abre la consola de comandos (cmd) y escribe <code>python --version</code>. Si ves la versión instalada, la instalación fue exitosa.
        </Typography>
        <Typography variant="h5" gutterBottom>Paso 4: Instalación de Librerías</Typography>
        <Typography variant="body1" paragraph>
          Python incluye una herramienta llamada <strong>pip</strong> que permite instalar librerías adicionales. Por ejemplo, para instalar la librería NumPy escribe <code>pip install numpy</code>.
        </Typography>
        <Typography variant="h5" gutterBottom>Conclusión</Typography>
        <Typography variant="body1" paragraph>
          ¡Listo! Ahora tienes Python instalado y puedes comenzar a programar. Explora editores como VSCode para facilitar tu experiencia de desarrollo.
        </Typography>
      </>
    ),
  },
  photoshop: {
    title: 'Como quitar el fondo de una imagen en Photoshop',
    description: 'En este tutorial aprenderemos a como quitar el fondo de una imagen en Photoshop.',
    image: wallpaperPhotoshop,
    content: (
      <>
        <Typography variant="body1" paragraph>
          Photoshop es una herramienta poderosa para la edición de imágenes. Para quitar el fondo de una imagen sigue estos pasos:
        </Typography>
        <Typography variant="h5" gutterBottom>Paso 1: Abrir la Imagen</Typography>
        <Typography variant="body1" paragraph>
          Abre tu imagen en Photoshop desde el menú "Archivo > Abrir".
        </Typography>
        <Typography variant="h5" gutterBottom>Paso 2: Herramienta de Selección Rápida</Typography>
        <Typography variant="body1" paragraph>
          Selecciona la herramienta de selección rápida y traza alrededor del objeto que deseas mantener. Usa "Seleccionar y aplicar máscara" para refinar los bordes.
        </Typography>
        <Typography variant="h5" gutterBottom>Paso 3: Eliminar el Fondo</Typography>
        <Typography variant="body1" paragraph>
          Una vez tengas la selección, presiona "Suprimir" para eliminar el fondo o crea una máscara de capa. Guarda tu imagen como PNG para conservar la transparencia.
        </Typography>
        <Typography variant="h5" gutterBottom>Consejos Adicionales</Typography>
        <Typography variant="body1" paragraph>
          Usa el zoom para detalles y la herramienta de perfeccionamiento de bordes para un mejor acabado. También puedes utilizar el filtro "Desenfoque gaussiano" en los bordes.
        </Typography>
      </>
    ),
  },
  dotnet: {
    title: 'Construye una API en .NET en 10 minutos',
    description: 'En este tutorial aprenderemos a como construir una API en .NET en 10 minutos.',
    image: wallpaperDotnet,
    content: (
      <>
        <Typography variant="body1" paragraph>
          .NET permite crear APIs rápida y fácilmente. Sigue estos pasos:
        </Typography>
        <Typography variant="h5" gutterBottom>Paso 1: Crear el Proyecto</Typography>
        <Typography variant="body1" paragraph>
          Abre Visual Studio, selecciona "Nuevo Proyecto" y elige "API Web ASP.NET Core". Asigna un nombre y selecciona .NET 6 o superior.
        </Typography>
        <Typography variant="h5" gutterBottom>Paso 2: Crear un Controlador</Typography>
        <Typography variant="body1" paragraph>
          En la carpeta "Controllers", crea un nuevo controlador con métodos GET, POST, PUT y DELETE. Usa atributos como [HttpGet] y [HttpPost] para definir las rutas.
        </Typography>
        <Typography variant="h5" gutterBottom>Paso 3: Configurar Swagger</Typography>
        <Typography variant="body1" paragraph>
          Asegúrate de tener Swagger habilitado en el archivo Program.cs para probar tu API desde el navegador.
        </Typography>
        <Typography variant="h5" gutterBottom>Paso 4: Ejecutar y Probar</Typography>
        <Typography variant="body1" paragraph>
          Ejecuta la aplicación y prueba los endpoints en Swagger. Puedes usar Postman para realizar pruebas adicionales.
        </Typography>
        <Typography variant="h5" gutterBottom>Conclusión</Typography>
        <Typography variant="body1" paragraph>
          Ahora tienes una API funcional que puedes expandir y conectar a bases de datos usando Entity Framework Core.
        </Typography>
      </>
    ),
  },
};

function Blog() {
  const { id } = useParams();
  const post = blogPosts[id];

  if (!post) {
    return (
      <Container sx={{ py: 5 }}>
        <Typography variant="h5">Recurso no encontrado</Typography>
        <Button variant="contained" color="primary" component={Link} to="/" sx={{ mt: 2 }}>
          Volver al Inicio
        </Button>
      </Container>
    );
  }

  return (
    <>
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

      <Box sx={{ py: 5 }}>
        <Container maxWidth="md">
          <img src={post.image} alt={post.title} style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }} />
          <Typography variant="h3" gutterBottom>{post.title}</Typography>
          <Typography variant="h6" gutterBottom color="text.secondary">{post.description}</Typography>
          <Divider sx={{ my: 3 }} />
          {post.content}
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button variant="contained" color="primary" component={Link} to="/">
              Volver al Inicio
            </Button>
          </Box>
        </Container>
      </Box>

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

export { Blog };
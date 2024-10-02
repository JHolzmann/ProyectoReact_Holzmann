Tienda de Semillas de Marihuana
Este es un proyecto de una tienda de semillas de marihuana, desarrollado utilizando Vite, React JS y Firestore como base de datos.

Características
Catálogo de Productos: Muestra una lista de productos con detalles como nombre, precio, y stock.
Carrito de Compras: Permite a los usuarios agregar productos al carrito y ajustar las cantidades.
Filtros: Los usuarios pueden filtrar las semillas por categorías (por ejemplo, indicas, sativas, etc.).
Detalle de Productos: Cada semilla tiene una vista detallada con más información.
Gestión de Datos con Firestore: Los datos de los productos están almacenados y gestionados con Firestore.
Tecnologías Utilizadas
Vite: Como empaquetador rápido para optimizar el desarrollo.
React JS: Para crear la interfaz interactiva de la tienda.
Firestore: Para almacenar y gestionar los datos de los productos.

Instalación

-Clonar el repositorio:

git clone https://github.com/JHolzmann/ProyectoReact_Holzmann.git

-Navegar al directorio del proyecto:

cd ProyectoReact_Holzmann

-Instalar las dependencias:

npm install
Crear un archivo .env en la raíz del proyecto con tus credenciales de Firestore:

VITE_FIREBASE_API_KEY=tu-api-key
VITE_FIREBASE_AUTH_DOMAIN=tu-auth-domain
VITE_FIREBASE_PROJECT_ID=tu-project-id
Iniciar el servidor de desarrollo:

npm run dev
Funcionalidades Futuras
Autenticación de Usuarios: Permitir a los usuarios registrarse e iniciar sesión para realizar compras.
Métodos de Pago: Integrar plataformas de pago como PayPal o Stripe.
Reseñas de Productos: Los usuarios podrán dejar reseñas y calificaciones para cada semilla.
Contribuciones
Las contribuciones son bienvenidas. Si deseas contribuir al proyecto, por favor sigue estos pasos:

Haz un fork del repositorio.
Crea una rama para tu nueva característica (git checkout -b nueva-caracteristica).
Haz tus cambios y commitea (git commit -m 'Agrega nueva característica').
Envía tus cambios (git push origin nueva-caracteristica).
Abre un pull request.

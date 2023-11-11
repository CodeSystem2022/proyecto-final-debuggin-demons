Debugging Demons Games 👾
# proyecto-final-debuggin-demons
Este es el repositorio del equipo Debuggin Demons.

Integrantes:

- [Mariano Farias](https://github.com/Marianoleonardofarias)  😈
- [Agustín Pérez Pesce](https://github.com/Aguppesce) 😈
- [Braian Troncoso](https://github.com/BraianTroncoso) 😈
- [Franco Sebastián Genre](https://github.com/francogenre) 😈
- [Mario Cristian Sanchez](https://github.com/TanitoCode) 😈
- [Santiago Mendoza](https://github.com/SantSR) 😈
- [Sebastián Galván](https://github.com/SebasGalvan) 😈




## API Reference

#### Get Carrito

```http
  GET /carrito?username=
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. usuario |

#### Agregar Videojuego al Carrito

```http
  POST /carrito
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required**. Id user |
| `videojuego`      | `string` | **Required**. Id videojuego |


#### Limpiar carrito

```http
   DELETE carrito/:username
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required**. Id user |

#### Borrar un videojuego del carrito

```http
   DELETE carrito/:username/:videojuego
```

## Instalacion

Instalar dependencias del back con npm

```bash
  npm install 
  cd proyecto-final-debuggin-demons
  npm run start
```
    
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required**. Id user |
| `videojuego`      | `string` | **Required**. Id videojuego |


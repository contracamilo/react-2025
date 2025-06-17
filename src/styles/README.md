# Estructura de Estilos SCSS

Este proyecto utiliza la sintaxis moderna de Sass con `@use` y `@forward` en lugar de la sintaxis `@import` obsoleta.

## Estructura de Directorios

```scss
src/
  styles/
    abstracts/           # Variables, mixins y funciones
      _variables.scss    # Variables globales
      _index.scss        # Reexporta todas las abstracciones
    base/                # Estilos base
      _reset.scss        # Reset y normalización
      _index.scss        # Reexporta todos los estilos base
    components/          # Estilos de componentes
      _header.scss       # Estilos del componente Header
      _navigation.scss   # Estilos del componente Navigation
      _index.scss        # Reexporta todos los estilos de componentes
    _index.scss          # Punto de entrada principal para los estilos
  index.scss             # Archivo principal que importa todos los estilos
  adapters/
    components/          # Componentes React
      Header/
        Header.tsx       # Importa estilos desde styles/components
      Navigation/
        Navigation.tsx   # Importa estilos desde styles/components
```

## Cómo importar estilos

En los componentes:

```scss
// Importar todo sin espacio de nombres
@use '../../../styles' as *;

// O con espacio de nombres para mayor claridad
@use '../../../styles' as s;

.component {
  padding: $spacing-4; // Sin espacio de nombres
  margin: s.$margin-4; // Con espacio de nombres
}
```

## Añadir nuevas variables

Para añadir nuevas variables, agrégalas al archivo adecuado en `styles/abstracts/` y asegúrate de que estén siendo reexportadas a través de los archivos `_index.scss`.

#  Proyecto React + TypeScript + Vite

Este proyecto está configurado con buenas prácticas modernas y arquitectura hexagonal.

## Estructura del proyecto

- `src/domain`: Lógica de negocio y entidades (Domain)
- `src/application`: Casos de uso y servicios de aplicación (Application)
- `src/infrastructure`: Implementaciones técnicas (APIs, stores, etc)
- `src/adapters`: Controladores, vistas, gateways, etc (Adapters)
- `src/shared`: Utilidades y tipos compartidos

## Principales tecnologías

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) para desarrollo rápido
- [Zustand](https://zustand-demo.pmnd.rs/) para manejo de estado
- [React Router](https://reactrouter.com/) para routing
- [Tailwind CSS](https://tailwindcss.com/) para estilos utilitarios
- [Jest](https://jestjs.io/) + [Testing Library](https://testing-library.com/) para testing y coverage
- [Storybook](https://storybook.js.org/) para UI components

## Scripts útiles

- `npm run dev` — Inicia el servidor de desarrollo
- `npm run build` — Compila la app para producción
- `npm run test` — Ejecuta los tests
- `npm run test:coverage` — Ejecuta los tests y muestra el coverage
- `npm run storybook` — Inicia Storybook
- `npm run build-storybook` — Compila Storybook

## Tailwind CSS

Las clases utilitarias de Tailwind están disponibles en todo el proyecto. Edita `src/index.css` para personalizar.

## Testing

Los tests están en `src/__tests__`. Usa `npm run test:coverage` para ver el porcentaje de cobertura.

## Arquitectura Hexagonal

Organiza tu código en las carpetas mencionadas para separar dominio, aplicación, infraestructura y adaptadores.

---

> Proyecto generado y configurado con buenas prácticas para escalar y mantener fácilmente.

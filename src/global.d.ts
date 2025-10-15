/**
 * Este arquivo informa ao TypeScript que certos módulos externos podem ser importados,
 * mesmo que o TypeScript não tenha suas definições de tipo.
 *
 * - Os imports do Swiper CSS (swiper/css, swiper/css/pagination, swiper/css/navigation)
 *   são reconhecidos sem erro.
 *
 * Isso evita erros de compilação relacionados a tipos desconhecidos ao importar estilos
 * ou imagens em componentes React/TypeScript.
 */

declare module "swiper/css";
declare module "swiper/css/pagination";
declare module "swiper/css/navigation";
declare module "swiper/css/effect-fade";

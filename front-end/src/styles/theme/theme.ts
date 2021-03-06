import { createGlobalStyle } from 'styled-components';

export const ThemeStyle = createGlobalStyle`
  // TODO: Adicionar cores e sombras do tema
 :root {
  --primary-50: #f2e7fe;
  --primary-100: #dbb2ff;
  --primary-200: #bb86fc;
  --primary-300: #985eff;
  --primary-400: #7f39fb;
  --primary-500: #6200ee;
  --primary-600: #5600e8;
  --primary-700: #3700b3;
  --primary-800: #30009c;
  --primary-900: #23036a;

  --primary-t-hover: rgba(130,220,220,0.18);

  --error: #b00020;
  --on-error: #fff;
  --warning: #ffd600;
  --on-warning: #000;
  --info: #03a9f4;
  --on-info: #fff;
  --success: #55dd00;
  --on-success: #000;

  --transparent: rgba(255, 255, 255, 0);

  --elevation-umbra: rgba(0, 0, 0, 0.2);
  --elevation-penumbra: rgba(0, 0, 0, 0.14);
  --elevation-ambient: rgba(0, 0, 0, 0.12);
 }
 `;

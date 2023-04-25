import { type Palette, type PaletteOptions } from "@mui/material/styles";

declare module "*.module.css";
declare module "*.module.scss";
declare module "@mui/material/styles/createPalette" {
  interface Palette {
    types: {
      bug?: string;
      dark?: string;
      fire?: string;
      grass?: string;
      electric?: string;
      water?: string;
      ground?: string;
      rock?: string;
      fairy?: string;
      poison?: string;
      dragon?: string;
      psychic?: string;
      flying?: string;
      fighting?: string;
      normal?: string;
      ghost?: string;
      ice?: string;
      steel?: string;
    };
  }
  interface PaletteOptions {
    types: {
      bug?: string;
      dark?: string;
      fire?: string;
      grass?: string;
      electric?: string;
      water?: string;
      ground?: string;
      rock?: string;
      fairy?: string;
      poison?: string;
      dragon?: string;
      psychic?: string;
      flying?: string;
      fighting?: string;
      normal?: string;
      ghost?: string;
      ice?: string;
      steel?: string;
    };
  }
}

export default function createPalette(palette: PaletteOptions): Palette;

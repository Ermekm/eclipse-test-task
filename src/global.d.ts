import { type Palette, type PaletteOptions } from "@mui/material/styles";

declare module "*.module.css";
declare module "*.module.scss";
declare module "@mui/material/styles/createPalette" {
  interface Palette {
    types: {
      fire?: string;
      grass?: string;
      electric?: string;
      water?: string;
      ground?: string;
      rock?: string;
      fairy?: string;
      poison?: string;
      bug?: string;
      dragon?: string;
      psychic?: string;
      flying?: string;
      fighting?: string;
      normal?: string;
    };
  }
  interface PaletteOptions {
    types: {
      fire?: string;
      grass?: string;
      electric?: string;
      water?: string;
      ground?: string;
      rock?: string;
      fairy?: string;
      poison?: string;
      bug?: string;
      dragon?: string;
      psychic?: string;
      flying?: string;
      fighting?: string;
      normal?: string;
    };
  }
}

export default function createPalette(palette: PaletteOptions): Palette;

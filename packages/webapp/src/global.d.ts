/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/dist/client" />

/**
 * Wiht these declarations images can be imported in the components.
 *
 * @example
 * ```svelte
 * 	<script lang=ts>
 * 		import logo from 'static/images/logo.svg';
 * 	</script>
 *
 * 	<img src="{logo}" />
 * ```
 */
declare module "*.gif" {
  const value: string;
  export = value;
}

declare module "*.jpg" {
  const value: string;
  export = value;
}

declare module "*.jpeg" {
  const value: string;
  export = value;
}

declare module "*.png" {
  const value: string;
  export = value;
}

declare module "*.JPG" {
  const value: string;
  export = value;
}

declare module "*.JPEG" {
  const value: string;
  export = value;
}

declare module "*.PNG" {
  const value: string;
  export = value;
}

declare module "*.svg" {
  const value: string;
  export = value;
}

declare module "*.wbep" {
  const value: string;
  export = value;
}

// Start: Interfaces

interface ImportMetaEnv {
  VITE_BASE_URL: string;
}

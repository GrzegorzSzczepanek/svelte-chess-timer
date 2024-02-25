
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const SESSION_MANAGER: string;
	export const QT_ACCESSIBILITY: string;
	export const COLORTERM: string;
	export const ANKI_WAYLAND: string;
	export const XDG_CONFIG_DIRS: string;
	export const SSH_AGENT_LAUNCHER: string;
	export const NVM_INC: string;
	export const XDG_MENU_PREFIX: string;
	export const GNOME_DESKTOP_SESSION_ID: string;
	export const LANGUAGE: string;
	export const NODE: string;
	export const LC_ADDRESS: string;
	export const GNOME_SHELL_SESSION_MODE: string;
	export const LC_NAME: string;
	export const SSH_AUTH_SOCK: string;
	export const npm_config_local_prefix: string;
	export const XMODIFIERS: string;
	export const DESKTOP_SESSION: string;
	export const LC_MONETARY: string;
	export const GTK_MODULES: string;
	export const PWD: string;
	export const XDG_SESSION_DESKTOP: string;
	export const LOGNAME: string;
	export const XDG_SESSION_TYPE: string;
	export const SYSTEMD_EXEC_PID: string;
	export const _: string;
	export const XAUTHORITY: string;
	export const HOME: string;
	export const USERNAME: string;
	export const IM_CONFIG_PHASE: string;
	export const LC_PAPER: string;
	export const LANG: string;
	export const LS_COLORS: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const npm_package_version: string;
	export const VTE_VERSION: string;
	export const WAYLAND_DISPLAY: string;
	export const GNOME_TERMINAL_SCREEN: string;
	export const NVM_DIR: string;
	export const GNOME_SETUP_DISPLAY: string;
	export const LESSCLOSE: string;
	export const XDG_SESSION_CLASS: string;
	export const LC_IDENTIFICATION: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const ASDF_DIR: string;
	export const LESSOPEN: string;
	export const USER: string;
	export const GNOME_TERMINAL_SERVICE: string;
	export const DISPLAY: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const NVM_CD_FLAGS: string;
	export const LC_TELEPHONE: string;
	export const QT_IM_MODULE: string;
	export const LC_MEASUREMENT: string;
	export const PAPERSIZE: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const XDG_RUNTIME_DIR: string;
	export const LC_TIME: string;
	export const npm_package_json: string;
	export const BUN_INSTALL: string;
	export const XDG_DATA_DIRS: string;
	export const PATH: string;
	export const GDMSESSION: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const NVM_BIN: string;
	export const npm_node_execpath: string;
	export const LC_NUMERIC: string;
	export const OLDPWD: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		SESSION_MANAGER: string;
		QT_ACCESSIBILITY: string;
		COLORTERM: string;
		ANKI_WAYLAND: string;
		XDG_CONFIG_DIRS: string;
		SSH_AGENT_LAUNCHER: string;
		NVM_INC: string;
		XDG_MENU_PREFIX: string;
		GNOME_DESKTOP_SESSION_ID: string;
		LANGUAGE: string;
		NODE: string;
		LC_ADDRESS: string;
		GNOME_SHELL_SESSION_MODE: string;
		LC_NAME: string;
		SSH_AUTH_SOCK: string;
		npm_config_local_prefix: string;
		XMODIFIERS: string;
		DESKTOP_SESSION: string;
		LC_MONETARY: string;
		GTK_MODULES: string;
		PWD: string;
		XDG_SESSION_DESKTOP: string;
		LOGNAME: string;
		XDG_SESSION_TYPE: string;
		SYSTEMD_EXEC_PID: string;
		_: string;
		XAUTHORITY: string;
		HOME: string;
		USERNAME: string;
		IM_CONFIG_PHASE: string;
		LC_PAPER: string;
		LANG: string;
		LS_COLORS: string;
		XDG_CURRENT_DESKTOP: string;
		npm_package_version: string;
		VTE_VERSION: string;
		WAYLAND_DISPLAY: string;
		GNOME_TERMINAL_SCREEN: string;
		NVM_DIR: string;
		GNOME_SETUP_DISPLAY: string;
		LESSCLOSE: string;
		XDG_SESSION_CLASS: string;
		LC_IDENTIFICATION: string;
		TERM: string;
		npm_package_name: string;
		ASDF_DIR: string;
		LESSOPEN: string;
		USER: string;
		GNOME_TERMINAL_SERVICE: string;
		DISPLAY: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		NVM_CD_FLAGS: string;
		LC_TELEPHONE: string;
		QT_IM_MODULE: string;
		LC_MEASUREMENT: string;
		PAPERSIZE: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		XDG_RUNTIME_DIR: string;
		LC_TIME: string;
		npm_package_json: string;
		BUN_INSTALL: string;
		XDG_DATA_DIRS: string;
		PATH: string;
		GDMSESSION: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		NVM_BIN: string;
		npm_node_execpath: string;
		LC_NUMERIC: string;
		OLDPWD: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}

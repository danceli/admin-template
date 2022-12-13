

export type ThemeConfig = {
  primary: string,
		// 深色模式
  isDark: boolean,
}

export type GlobalState = {
  assemblySize: string,
  language: string,
  themeConfig: ThemeConfig
}
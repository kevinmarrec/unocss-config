import { defineConfig, type UserConfig } from 'unocss'

import preset, { type PresetOptions, type Theme } from './preset'

export function useConfig(userConfig: UserConfig<Theme> & PresetOptions = {}) {
  const { fonts, icons, ...config } = userConfig

  return defineConfig({
    presets: [preset({ fonts, icons })],
    ...config,
  })
}

export default useConfig()

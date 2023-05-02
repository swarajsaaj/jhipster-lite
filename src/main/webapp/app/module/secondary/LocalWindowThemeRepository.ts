import { ThemeRepository } from '../domain/ThemeRepository';
import { ThemePreference as Theme, getMediaPreference } from './GetMediaPreference';

const THEME_STORAGE_KEY = 'theme';

export class LocalWindowThemeRepository implements ThemeRepository {
  constructor(private readonly win: Window, private readonly storage: Storage) {}

  get(): Theme {
    return (this.storage.getItem(THEME_STORAGE_KEY) as Theme) || getMediaPreference(this.win);
  }

  choose(theme: Theme): void {
    this.storage.setItem(THEME_STORAGE_KEY, theme);
    document.documentElement.className = theme;
  }
}

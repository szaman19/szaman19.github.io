import Eleventy from '@11ty/eleventy';
import { rm } from 'node:fs/promises';

// A clean output prevents removed posts or newly marked drafts from surviving a build.
await rm(new URL('../_site/', import.meta.url), { recursive: true, force: true });
await new Eleventy().write();

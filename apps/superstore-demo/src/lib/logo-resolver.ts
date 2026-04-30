import { existsSync } from "fs";
import { join } from "path";
import { defaultStoreConfig } from "@/lib/store-config";

const EXTENSIONS = [".svg", ".png", ".jpg", ".jpeg", ".webp"];

export function getLogoUrl(): string {
  const publicDir = join(process.cwd(), "public");
  for (const ext of EXTENSIONS) {
    if (existsSync(join(publicDir, `logo-custom${ext}`))) return `/logo-custom${ext}`;
  }
  return defaultStoreConfig.logo;
}

export function getLightLogoUrl(): string {
  const publicDir = join(process.cwd(), "public");
  for (const ext of EXTENSIONS) {
    if (existsSync(join(publicDir, `logo-custom-light${ext}`))) return `/logo-custom-light${ext}`;
  }
  return defaultStoreConfig.logo;
}

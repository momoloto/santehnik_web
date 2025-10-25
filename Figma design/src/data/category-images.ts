// Изображения для каждой категории услуг
export const categoryImages = {
  installation: "https://images.unsplash.com/photo-1635221798248-8a3452ad07cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmVyJTIwaW5zdGFsbGluZyUyMHNpbmt8ZW58MXx8fHwxNzYxMzkwNzk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  systems: "https://images.unsplash.com/photo-1751486289950-5c4898a4c773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWF0aW5nJTIwcGlwZXMlMjBzeXN0ZW18ZW58MXx8fHwxNzYxMzkwNzk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  radiators: "https://images.unsplash.com/photo-1761061079418-e7b9fde0707c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWRpYXRvciUyMGhlYXRpbmd8ZW58MXx8fHwxNzYxMzkwNzk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  pumps: "https://images.unsplash.com/photo-1759692072150-166d6387c616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHB1bXAlMjBwbHVtYmluZ3xlbnwxfHx8fDE3NjEzOTA3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  boilers: "https://images.unsplash.com/photo-1564164494009-3876b2d197f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2lsZXIlMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzYxMzkwNzk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  general: [
    "https://images.unsplash.com/photo-1599463698367-11cb72775b67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmVyJTIwZml4aW5nJTIwdGFwfGVufDF8fHx8MTc2MTM5MDc5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1664227430687-9299c593e3da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMHBsdW1iaW5nJTIwd29ya3xlbnwxfHx8fDE3NjEzOTA3OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1726931535180-d27a2ffd7474?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmVyJTIwcmVwYWlyaW5nJTIwcGlwZXxlbnwxfHx8fDE3NjEzOTA3OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  ],
};

// Функция для получения изображения для услуги
export function getServiceImage(category: string, index: number): string {
  if (category === "general" && Array.isArray(categoryImages.general)) {
    return categoryImages.general[index % categoryImages.general.length];
  }
  return categoryImages[category as keyof typeof categoryImages] as string;
}

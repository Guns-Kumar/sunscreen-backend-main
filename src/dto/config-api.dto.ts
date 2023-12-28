export class ConfigApiDto {
  name: string;
  LibrariesTerms: LibraryTermDto[];
}

export class LibraryTermDto {
  label: string;
  regularExpression: string[];
  comment: string;
  action: string;
  RGB: number;
  value: string;
  redaction: boolean;
  screenBlank: boolean;
}

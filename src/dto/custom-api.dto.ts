export class CustomApiDto {
    name: string;
    LibrariesTerms: CustomLibraryTermDto[];
    redaction: boolean;
    screenBlank: boolean;
  }
  
  export class CustomLibraryTermDto {
    label: string;
    regularExpression: string[];
    comment: string;
    action: string;
    RGB: string[];
    value: string;
  }
  
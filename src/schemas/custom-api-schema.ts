import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class CustomLibraryTerm {
  @Prop()
  label: string;

  @Prop([String])
  regularExpression: string[];

  @Prop()
  comment: string;

  @Prop()
  action: string;

  @Prop()
  value: string;

  @Prop([Number])
  RGB: number[];

}

@Schema()
export class CustomLibrary {
  @Prop()
  name: string;

  @Prop({ type: [CustomLibraryTerm] })
  CustomLibrariesTerms: CustomLibraryTerm[];

  @Prop()
  redaction: boolean;

  @Prop()
  screenBlank: boolean;
}

export const LibrarySchema = SchemaFactory.createForClass(CustomLibrary);

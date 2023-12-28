import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class LibraryTerm {
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

  @Prop()
  redaction: boolean;

  @Prop()
  screenBlank: boolean;

}

@Schema()
export class Library {
  @Prop()
  name: string;

  @Prop({ type: [LibraryTerm] })
  LibrariesTerms: LibraryTerm[];

}

export const LibrarySchema = SchemaFactory.createForClass(Library);

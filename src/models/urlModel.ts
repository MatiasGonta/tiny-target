import { model, Schema, Document, models } from 'mongoose';

export interface UrlItem extends Document {
  original: string;
  short: string;
}

const urlSchema = new Schema<UrlItem>({
  original: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    unique: true,
  },
}, {
  timestamps: true
});

export const UrlModel = models.urls || model<UrlItem>('urls', urlSchema);
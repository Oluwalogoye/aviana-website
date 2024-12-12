export interface SanityImage {
  asset: { 
    url: string;
    metadata?: {
      lgqip: string;
    }
  }
}

export interface PlainTextBlock {
  _type: string;
  children: PlainTextChild[];
}

export interface PlainTextChild {
  _type: string;
  text: string;
}
import type { Schema, Struct } from '@strapi/strapi';

export interface SharedFaqs extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'Faqs';
  };
  attributes: {
    faqDescription: Schema.Attribute.Text;
    faqTitle: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.faqs': SharedFaqs;
      'shared.rich-text': SharedRichText;
    }
  }
}

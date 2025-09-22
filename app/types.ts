export interface Website {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    description: string;
    url: string;
    developers: string[];
    display: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
  contentTypeId: string;
}

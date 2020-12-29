type tagTypes = {
  tagId: string;
  tagName: string;
};

export interface LevelTypes {
  id: string;
  title: string;
  desc: string;
  icon: string;
  mark: string;
  tag: tagTypes[];
}

export interface BrandType {
  title: String;
  desc: String;
  tags: String[];
  img: String;
}

type descType = {
  id: String;
  name: String;
  desc: String;
};

export interface OtherServicesType {
  id: String;
  title: String;
  majorImg: String;
  imgs: String[];
  descs: descType[];
}

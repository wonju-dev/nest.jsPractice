type Tperson = {
  name: string;
  birth: Date;
  description: string;
};

type Tmovie = {
  title: string;
  pusblishedDate: Date;
  director: Tperson;
};

export { Tperson, Tmovie };

/////////////////////////////////Form Search//////////////////////////////////////////


export interface FormEventoSearch extends React.FormEvent<HTMLFormElement> {
  target: HTMLElement
}

export interface DataSearch {
  setLista: Function
  input: string
  setInput: Function
}
////////////////////////////////// Main /////////////////////////////////////////

export interface FilmePropsMain {
  title: string,
  poster_path: string,
  vote_average: number,
  overview: string,
  release_date: string
}

export interface DataMain {
  dataFilmes: number | null
  pagina: number
  setPagina: Function
  lista: FilmePropsMain[]
  setLista: Function
  setInput: Function
}

//////////////////////////////BoxFilme//////////////////////////////////

export interface DataBoxFilme {
  poster_path: string
  title: string
  lista: Array<Object>
  onClick: Function
  setFilme: Function
  index: number
}



//////////////////////////////BoxModal//////////////////////////////////

interface FilmeModal {
  title: string
  poster_path: string,
  vote_average: number,
  overview: string,
  release_date: string
}

export interface DataBoxModal {
  filme: FilmeModal,
}


////////////////////////////////// Nav /////////////////////////////////////////


export interface AnosNav {
  ano: number
}
export interface EventosNav extends React.MouseEvent<HTMLButtonElement> {
  target: HTMLElement
}

export interface DataNav {
  setDataFilmes: Function
  setPagina: Function
  setInput: Function
}

////////////////////////// App //////////////////////////////


export interface FilmeApp {
  title: string,
  poster_path: string,
  vote_average: number,
  overview: string,
  release_date: string
}

export interface EventosApp extends React.MouseEvent<HTMLButtonElement> {
  target: HTMLElement
}

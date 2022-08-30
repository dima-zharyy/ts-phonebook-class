import React from "react";

export interface IAppState {
  contacts: { [key: string]: string }[];
  filter: string;
}

export interface IFilter {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export interface IListItem {
  name: string;
  number: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IList {
  contacts: { id: string; name: string; number: string }[];
  onClick: (id: string) => void;
}

export interface IFormState {
  [key: string]: string;
}

export interface IFormProps {
  onSubmit: (data: IFormState) => void;
}

import React from 'react';

import TextField from '../TextField';

export interface Props {
  /** A unique identifier for the Autocomplete */
  id?: string;
  children?: React.ReactNode;
  loading?: boolean;
  allowMultiple?: boolean;
  onScrolledToBottom?(): void;
  onSelect?(index: number): void;
}

export interface AutoCompleteContextType {
  allowMultiple?: boolean;
  loading?: boolean;
  onScrolledToBottom?(): void;
  onSelect?(index: number): void;
}

const AutoCompleteContext = React.createContext<AutoCompleteContextType | null>(
  null,
);

export default function Autocomplete({
  id,
  children,
  loading,
  onScrolledToBottom,
  onSelect,
  allowMultiple,
}: Props) {
  const context = {
    allowMultiple,
    loading,
    onScrolledToBottom,
    onSelect,
  };

  return (
    <AutoCompleteContext.Provider value={context}>
      {children}
    </AutoCompleteContext.Provider>
  );
}

function DataList({children}: Props) {
  return <React.Fragment>{children}</React.Fragment>;
}

function Title({children}: Props) {
  return <React.Fragment>{children}</React.Fragment>;
}

function EmptyState({children}: Props) {
  return <React.Fragment>{children}</React.Fragment>;
}

Autocomplete.TextField = TextField;
Autocomplete.DataList = DataList;
Autocomplete.Option = Option;
Autocomplete.Title = Title;
Autocomplete.EmptyState = EmptyState;

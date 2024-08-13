import {
  UsePaginationOptions,
  UsePaginationInstanceProps,
  UsePaginationState,
  UseSortByOptions,
  UseSortByInstanceProps,
  UseSortByState,
  UseGlobalFiltersOptions,
  UseGlobalFiltersInstanceProps,
  UseGlobalFiltersState,
  UseTableOptions,
  UseTableInstanceProps,
  UseTableState,
} from 'react-table'

declare module 'react-table' {
  export interface TableOptions<D extends object>
    extends UsePaginationOptions<D>,
      UseSortByOptions<D>,
      UseGlobalFiltersOptions<D>,
      UseTableOptions<D> {}
  
  export interface TableInstance<D extends object = {}>
    extends UseTableInstanceProps<D>,
      UsePaginationInstanceProps<D>,
      UseSortByInstanceProps<D>,
      UseGlobalFiltersInstanceProps<D> {}
  
  export interface TableState<D extends object = {}>
    extends UseTableState<D>,
      UsePaginationState<D>,
      UseSortByState<D>,
      UseGlobalFiltersState<D> {}
}

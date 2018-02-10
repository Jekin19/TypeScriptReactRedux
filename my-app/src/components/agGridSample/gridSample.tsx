import * as React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { GridApi, GridReadyEvent } from 'ag-grid';

interface SimpleGridState {
    rowData: any[];
    columnDefs: any[];
}

export default class SimpleGridExample extends React.Component<{}, SimpleGridState> {
  [x: string]: any;
    private gridApi: GridApi;

    constructor(props: any) {
        super(props);

        this.state = {
            columnDefs: this.createColumnDefs(),
            rowData: this.createRowData()
        };
    }

    onGridReady(params: GridReadyEvent) {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;
        this.gridApi.sizeColumnsToFit();
    }

    createColumnDefs() {
        return [
            {headerName: 'Make', field: 'make'},
            {headerName: 'Model', field: 'model'},
            {headerName: 'Price', field: 'price'}
        ];
    }

    createRowData() {
        return [
            {make: 'Toyota', model: 'Celica', price: 35000},
            {make: 'Ford', model: 'Mondeo', price: 32000},
            {make: 'Porsche', model: 'Boxter', price: 72000}
        ];
    }

    render() {
        let containerStyle = {
            height: 115,
            width: 500
        };

        return (
            <div style={containerStyle} className="ag-fresh">
                <h1>Simple ag-Grid React Example</h1>
                <AgGridReact
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}
                    onGridReady={this.onGridReady}
                />
            </div>
        );
    }
}

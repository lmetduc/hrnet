import "./employeeList.css";
import React from "react";
import { useTable, useSortBy } from "react-table";
import Header from "../../components/Header/Header";

export default function EmployeeList() {
  const data = React.useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "First name",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Last name",
        accessor: "col2",
      },
      {
        Header: "Start Date",
        accessor: "col3",
      },
      {
        Header: "Department",
        accessor: "col4",
      },
      {
        Header: "Date Of Birth",
        accessor: "col5",
      },
      {
        Header: "Street",
        accessor: "col6",
      },
      {
        Header: "City",
        accessor: "col7",
      },
      {
        Header: "State",
        accessor: "col8",
      },
      {
        Header: "Zip code",
        accessor: "col9",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    gotoPage,
    previousPage,
    canPreviousPage,
    nextPage,
    pageCount,
    canNextPage,
    headerGroups,
    rows,
    pageIndex,
    pageOptions,
    pageSize,
    setPageSize,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div className="hrnet-table">
      <Header goTo="Home" link="/" />
      <div className="pages">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
      </div>
      {/* <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span> */}
      <span>
        | Go to page:{" "}
        <input
          type="number"
          defaultValue={pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          }}
          style={{ width: "100px" }}
        />
      </span>{" "}
      <select
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value));
        }}
      >
        {[10, 20, 30, 40, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize} entries
          </option>
        ))}
      </select>
      <table {...getTableProps()} style={{ border: "solid 1px black" }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: "solid 3px green",
                    background: "aliceblue",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        border: "solid 1px white",
                        background: "white",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

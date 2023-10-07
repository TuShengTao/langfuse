import { NoData } from "../NoData";
import { type ReactNode } from "react";

type TableHeaders = ReactNode[];
type TableRows = ReactNode[][];
type DashboardTableProps = {
  headers: TableHeaders;
  rows: TableRows;
  children?: ReactNode;
};

export const DashboardTable = ({
  headers,
  rows,
  children,
}: DashboardTableProps) => {
  return (
    <>
      {children}
      {rows.length > 0 ? (
        <div className="mt-4 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300 animate-in animate-out">
                <thead>
                  <tr>
                    {headers.map((header, i) => (
                      <th
                        key={i}
                        scope="col"
                        className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 bg-white">
                  {rows.map((row) => (
                    <tr key={"1"}>
                      {row.map((cell, i) => (
                        <td
                          key={i}
                          className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <NoData noDataText="No data" />
      )}
    </>
  );
};
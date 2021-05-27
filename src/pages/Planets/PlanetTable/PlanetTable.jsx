import {
  Card,
	Table,
	TableBody,
	TableCell,
  TableContainer,
	TableHead,
	TableRow,
} from '@material-ui/core';

import getTableDefinition from './getTableDefinition';

const PlanetTable = ({ planets }) => {
  const tableDefinition = getTableDefinition();
  return (
    <TableContainer component={Card}>
      <Table>
        <TableHead>
          <TableRow>
            {Object.values(tableDefinition.columns).map(({ title }) => {
              return (
                <TableCell key={title}>
                  <b>{title}</b>
                </TableCell>
              )
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {planets.map((planet) => (
            <TableRow key={tableDefinition.getRowKey(planet)}>
              {Object.values(tableDefinition.columns).map(({ title, formatData }) => {
                return (
                  <TableCell key={title}>
                    {formatData(planet)}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )

};

export default PlanetTable;
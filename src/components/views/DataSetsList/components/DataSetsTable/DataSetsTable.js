import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 900
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  },
  bgheader:{
    backgroundColor:'rgb(251,188,1)'
  }
}));

const DataSetsTable = props => {
  const { className, dataSets, ...rest } = props;

  const classes = useStyles();
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead className={classes.bgheader}>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Tipo</TableCell>
                  <TableCell>Total de Documentos</TableCell>
                  <TableCell>Etiquetas en Documentos</TableCell>
                  <TableCell>Última actualización</TableCell>
                  <TableCell>Estado</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataSets.slice(0, rowsPerPage).map(dataSet => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={dataSet.id}
                  >
                    <TableCell>
                      <div className={classes.nameContainer}>
                        <Typography variant="body1">{dataSet.displayName}</Typography>
                      </div>
                    </TableCell>
                    <TableCell>{dataSet.imageClassificationDatasetMetadata.classificationType}</TableCell>
                    <TableCell></TableCell>
                    <TableCell>{dataSet.exampleCount}</TableCell>
                    <TableCell>
                      {moment(dataSet.createTime).format('DD/MM/YYYY')}
                    </TableCell>
                    {/* <TableCell>{dataSet.status}</TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={dataSets.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions>
    </Card>
  );
};


export default DataSetsTable;

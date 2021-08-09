import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from 'react-native-table-component';

interface SizeContent {
  sizeContent: string[][];
}

interface TableItems {
  tableHead: string[];
  tableTitle: string[];
  tableData: string[][];
}

const View = styled.View`
  flex: 1;
  background-color: #fff;
`;

export default ({sizeContent}: SizeContent) => {
  const [tableItems, setTableItems] = useState<TableItems>();

  useEffect(() => {
    setTableItems({
      tableHead: ['', 'S', 'M', 'L', 'XL', '2XL'],
      tableTitle: ['목', '가슴', '길이'],
      tableData: sizeContent,
    });
  }, [sizeContent]);

  if (tableItems === undefined) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1}}>
          <Row
            data={tableItems.tableHead}
            flexArr={[1, 1, 1, 1]}
            style={styles.head}
            textStyle={styles.text}
          />
          <TableWrapper style={styles.wrapper}>
            <Col
              data={tableItems.tableTitle}
              style={styles.title}
              heightArr={[28, 28]}
              textStyle={styles.text}
            />
            <Rows
              data={tableItems.tableData}
              flexArr={[1, 1, 1, 1, 1]}
              style={styles.row}
              textStyle={styles.text}
            />
          </TableWrapper>
        </Table>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: '#f1f8ff'},
  wrapper: {flexDirection: 'row'},
  title: {flex: 1, backgroundColor: '#f6f8fa'},
  row: {height: 28},
  text: {textAlign: 'center', fontFamily: 'NanumSquareRegular'},
});

import { Table } from "antd";
import { useGetAllCustomersquery } from "../../services/companyApi";
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const CustomerTable = () => {
  const { data } = useGetAllCustomersquery();
  const columns = [
    {
      title: "Company Name",
      dataIndex: "companyName",
    },
    {
      title: "Customer id",
      dataIndex: "id",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Phone",
      dataIndex: "id",
    },
    {
      title: "Add to Favorites",
      dataIndex: "id",
    },
    {
      title: "Delete",
      dataIndex: "id",
    },
  ];
  return (
    <Table
      columns={columns}
      dataSource={data}
      onChange={onChange}
      rowKey={"id"}
      pagination={{
        pageSize: 4,
      }}
    />
  );
};

export default CustomerTable;
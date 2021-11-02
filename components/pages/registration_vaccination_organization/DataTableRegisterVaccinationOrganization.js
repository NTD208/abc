import {useEffect, useState} from "react";
import {DataGrid} from '@mui/x-data-grid';
import {connect} from "react-redux";

import {getDataVaccines} from '../../../redux/actions/vaccinesAction'
import QuickSearchToolbar from './QuickSearchToolbar'
import EditVaccine from  '../vaccine/EditVaccine'
import DeleteVaccine from "../vaccine/DeleteVaccine";

const columns = [
    {field: 'stt', headerName: 'STT', width: 100},
    {field: 'name_user', headerName: 'Họ tên', width: 200},
    {field: 'dob', headerName: 'Ngày sinh', width: 150},
    {field: 'gender', headerName: 'Giới tính', width: 100},
    {field: 'phone_num', headerName: 'Số điện thoại', width: 150},
    {field: 'indentify', headerName: 'Số CMND/CCCD/HC', width: 200},
    {field: 'email', headerName: 'Email', width: 200},
    {field: 'insurance', headerName: 'Số thẻ BHYT', width: 200},
    {field: 'idPriority', headerName: 'Nhóm ưu tiên', width: 150},
    {field: 'isSick', headerName: 'Tình trạng sức khoẻ', width: 170},
    {field: 'address', headerName: 'Địa chỉ', width: 300},
    {
        field: 'editer',
        headerName: 'Chỉnh sửa',
        width: 160,
        renderCell: (params) => {
            const dataRow = {
                id: params.row.id,
                name: params.row.Name,
                nameProduct: params.row.Production_by,
                numberVaccine: params.row.Quantity,
                timeSpace: params.row.Time,
            }
            return (
                <>
                    <EditVaccine {...dataRow} />
                    <DeleteVaccine {...dataRow} />
                </>)
        },
    },
];

function escapeRegExp(value) {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

function DataTableRegisterVaccinationOrganization(props) {

    /// Lấy data từ trên redux về
    const {dataVaccines} = props.dataVaccines

    // State
    const [searchText, setSearchText] = useState('');
    const [rows, setRows] = useState([]);

    // search
    const requestSearch = (searchValue) => {
        setSearchText(searchValue);
        const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
        const filteredRows = dataVaccines.filter((row) => {
            return Object.keys(row).some((field) => {
                return searchRegex.test(row[field].toString());
            });
        });
        setRows(filteredRows);
    };

    const [sortModel, setSortModel] = useState([
        {
            field: 'stt',
            sort: 'asc',
        },
    ]);
    const [pageSize, setPageSize] = useState(5);

    useEffect(() => {
        setRows(dataVaccines);
    }, [dataVaccines]);

    /// Call api
    useEffect(() => {
        props.getDataVaccines();
    }, [])

    return (
        <div style={{height: 470, width: '100%'}}>
            <DataGrid
                components={{Toolbar: QuickSearchToolbar}}
                rows={rows}
                columns={columns}
                sortModel={sortModel}
                onSortModelChange={(model) => setSortModel(model)}
                rowsPerPageOptions={[5, 10, 20, 30]}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                componentsProps={{
                    toolbar: {
                        value: searchText,
                        onChange: (event) => requestSearch(event.target.value),
                        clearSearch: () => requestSearch(''),
                    },
                }}
            />
        </div>
    );
}

const mapStateToProps = (state) => ({
    dataVaccines: state.vaccinesReducer,
});

const mapDispatchToProps = {
    getDataVaccines
};

export default connect(mapStateToProps, mapDispatchToProps)(DataTableRegisterVaccinationOrganization);
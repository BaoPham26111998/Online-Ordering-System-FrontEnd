import React, { Component } from 'react';
import { Link } from "react-router-dom";

class CalanderInfo extends Component {
    render() {
        const { data } = this.props;
        console.log(data);
        // if (data && data.lichChieu) {
        //     return data.lichChieu.map((item) => {
        //         return (
        //             <tr key={item.maLichChieu}>
        //                 <td>{item.thongTinRap.tenCumRap}</td>
        //                 <td>{item.thongTinRap.tenRap}</td>
        //                 <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
        //                 <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
        //                 <td><Link className="btn btn-success" to="/">Dat ve</Link></td>
        //             </tr>
        //         )
        //     })
        // };
    };
};

export default CalanderInfo;
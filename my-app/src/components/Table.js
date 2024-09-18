import React from 'react'
import '../components/Table.css'

const Table = () => {
    return (
        <div className='Table'>
            <table >
                <thead>
                    <tr>
                        <th>Primary</th>
                        <th>Promotions</th>
                        <th>Social</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Primary 1</td>
                        <td>Promotion 1</td>
                        <td>Social 1</td>
                    </tr>
                    <tr>
                        <td>Primary 2</td>
                        <td>Promotion 2</td>
                        <td>Social 2</td>
                    </tr>
                    <tr>
                        <td>Primary 3</td>
                        <td>Promotion 3</td>
                        <td>Social 3</td>
                    </tr>
                </tbody>
            </table>
        </div>


    )
}

export default Table
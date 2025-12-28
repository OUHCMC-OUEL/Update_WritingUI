import React from 'react';
import { Collapse, Button, Card } from 'antd';


const Results = ({ data }) => {
    if (!data) return null;

    return (
        <>
            <Card>
                {data.result}
                <div style={{ marginTop: 8 }}>
                    <Button type="primary">Update</Button>
                    <Button danger style={{ marginLeft: 8 }}>
                        Dismiss
                    </Button>
                </div>
            </Card>

            {/* Chi tiết lỗi ở đây */}
            <Card>
                {data.vocabulary && (
                    <Card>
                        <strong>Wrong word</strong>
                        <p>{data.vocabulary}</p>
                    </Card>
                )}

                {data.grammar && (
                    <Card>
                        <strong>Grammar mistake</strong>
                        <p>{data.grammar}</p>
                    </Card>
                )}

                {data.coh && (
                    <Card>
                        <strong>Unclear sentence</strong>
                        <p>{data.coh}</p>
                    </Card>
                )}
            </Card>
        </>
    );
};


export default Results;


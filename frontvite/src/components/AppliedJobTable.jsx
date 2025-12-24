import React from 'react'
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow, TableCell } from './ui/table'
import { Badge } from './ui/badge'

export default function AppliedJobTable() {
    return (
        <div>
            <Table>
                <TableCaption>List of applied jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Job Title</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Date Applied</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        [1,2,3,4].map((item, index) => (
                            <TableRow>
                        <TableCell>Frontend Developer</TableCell>
                        <TableCell>Tech Corp</TableCell>
                        <TableCell>2024-06-15</TableCell>
                        <TableCell className="text-right"><Badge> Under Review</Badge> </TableCell>
                    </TableRow>                    
                        ))
                    }
                    
                </TableBody>
            </Table>

        </div>
    )
}

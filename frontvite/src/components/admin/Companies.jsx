import React from 'react'
import Navbar from '../pageview/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'

export default function Companies() {
        const navigate = useNavigate();

    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto my-10">
                <div className='flex items-center justify-between'>
                    <Input
                        className="w-fit"
                        placeholder="please company name "
                    />
                    <Button onClick={() => navigate("/admin/companies/create")}>
                        New Company
                    </Button>
                </div>

                <div>
                    <CompaniesTable />
                </div>
            </div>
        </div>
    )
}

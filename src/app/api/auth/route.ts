import { NextResponse } from 'next/server'
import { RowDataPacket } from 'mysql2'
import { getDbPool } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const { company, email, password } = await request.json()

    const errors: string[] = []
    if (!company) errors.push('Company')
    if (!email) errors.push('Email')
    if (!password) errors.push('Password')

    if (errors.length > 0) {
      return NextResponse.json({ error: `Please provide: ${errors.join(', ')}` }, { status: 400 })
    }

    const pool = getDbPool()
    const [rows] = await pool.query<RowDataPacket[]>(
      "SELECT company_name, company_base_url FROM companies WHERE STATUS = 'ACTIVE' AND company_code = ? LIMIT 1",
      [company]
    )
    const companyRow = rows[0]

    if (!companyRow) {
      return NextResponse.json({ error: 'Company not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true, company_name: companyRow.company_name, company_base_url: companyRow.company_base_url })
  } catch (error) {
    console.error('Auth API error:', error)
    const message = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { error: 'Failed to fetch company information. Please try again later.', detail: message },
      { status: 500 }
    )
  }
}

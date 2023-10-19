import { NextRequest, NextResponse } from 'next/server'

export async function GET(req:NextRequest, res:NextResponse) {
    const zipCode = req.nextUrl.searchParams.get('zipCode');
    const locationRes = await fetch(`http://api.zippopotam.us/us/${zipCode}`);
    if (!locationRes.ok) {
        return NextResponse.error()
    }
    const locationData = await locationRes.json(); 
    return NextResponse.json(locationData)
}
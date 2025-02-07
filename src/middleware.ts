import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    if (!request.nextUrl.pathname.includes('.')) {
        console.log("middleware");
    } return NextResponse.next();
}

// マッチするパス
export const config = {
    matcher: "/blog/:path*",
}
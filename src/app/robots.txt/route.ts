import { NextResponse } from 'next/server';

export function GET(request: Request) {
  const origin = new URL(request.url).origin;

  const robots = `User-agent: *
Allow: /
Disallow:
Sitemap: ${origin}/sitemap.xml
Host: ${origin}
`;

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}

import './globals.css'
// app/layout.tsx
export default function RootLayout({children}) {
    return (
        <html>
        <body>
        <nav>
            <h1 className={'p-2'}>공통 레이아웃</h1>
            <ul className={'flex flex-row gap-1 p-2'}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
            </ul>
        </nav>
        <main className={'p-2'}>{children}</main>
        </body>
        </html>
    );
}

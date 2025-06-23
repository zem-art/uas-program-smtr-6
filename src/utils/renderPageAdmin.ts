import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { loadComponent } from './loadComponent';

export const renderPageAdmin = async (pagePath: string): Promise<string> => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const basePath = path.join(__dirname, '..', 'views', 'components');

    const [
        navbar,
        sidebar,
        footer,
        content
    ] = await Promise.all([
        loadComponent(path.join(basePath, 'navbar-admin.html')),
        loadComponent(path.join(basePath, 'sidebar.html')),
        loadComponent(path.join(basePath, 'footer-admin.html')),
        loadComponent(pagePath),
    ]);

    return `
        <!DOCTYPE html>
        <html lang="id">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Admin Panel | Nusantara Travel</title>
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
            </head>
            <body class="bg-gray-100 text-gray-800 font-sans">

            <!-- Main Layout -->
            <div class="flex min-h-screen">
                <!-- Sidebar -->
                ${sidebar}

                <main class="flex-1 p-6">
                    ${content}
                </main>
            </div>

            <!-- Footer -->
            ${footer}

            </body>
        </html>
    `;
};

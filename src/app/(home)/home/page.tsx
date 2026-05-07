import { client } from "@/sanity/client";
import { GLOBAL_PAGE_QUERY } from "@/components/organisms/sanity";
import { SanityPageProvider } from "@/context/sanity-page-context";
import { resolveAllModules } from "@/components/organisms/sanity/resolver";
import { SanityModuleData } from "@/components/organisms/sanity/types";
import { CmpPage } from "@/components/organisms/sanity/cmp-page";

export default async function IndexPage() {
    const rawModules = await client.fetch<SanityModuleData[]>(GLOBAL_PAGE_QUERY);

    if (!rawModules || rawModules.length === 0) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <p className="text-gray-500">No se encontró contenido para esta página.</p>
            </div>
        );
    }

    const modules = await resolveAllModules(rawModules);

    return (
        <main className="container mx-auto py-12 px-4 md:px-8">
            <SanityPageProvider modules={modules}>
                <CmpPage />
            </SanityPageProvider>
        </main>
    );
}
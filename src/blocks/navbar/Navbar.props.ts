export type NavProps = {
    items: Array<{
        label: string;
        href: string;
        active?: boolean;
    }>;
    variant: "header" | "navbar";
}
// app/blog/[id]/page.tsx
interface BlogPostProps {
    params: {
        id: string;
    };
}

export default function BlogPost({ params }: BlogPostProps) {
    return (
        <div>
            <h1>Blog Post {params.id}</h1>
        </div>
    );
}

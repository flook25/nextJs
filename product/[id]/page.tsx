export default async function Info({ params }: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;

    return (
        <div>id = {id}</div>
    )
}
export default async function Info({ params }: {
    params: Promise<{ id: string, groupId: string }>
}) {
    const { id, groupId } = await params;

    return (
        <div>id = {id}, groupId = {groupId}</div>
    )
}
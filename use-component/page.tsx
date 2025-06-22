import Button from "@/components/Button";

export default function UseComponent() {
    return (
        <div className="flex gap-2">
            <Button label="Save" icon='check' />
            <Button label="Load Data" icon='refresh' />
            <Button label="Information" icon='info-circle' />
        </div>
    )
}
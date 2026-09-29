import { Spinner } from "@heroui/react";

export default function Loading() {
    return (
        <div className='h-full flex items-center justify-center'>
            <Spinner color='secondary' label='loading...'/>
        </div>
    );
}
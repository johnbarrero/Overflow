import {Answer} from "@/lib/types";
import VoitingButtons from "@/app/questions/[id]/VoitingButtons";
import AnswerFooter from "@/app/questions/[id]/AnswerFooter";
import {getCurrentUser} from "@/lib/actions/auth-actions";

type Props={
    answer:Answer
}

export default async function AnswerContent({answer}: Props) {
    const currentUser = await getCurrentUser();
    return (
        <div className='flex border-b pb-3 px-6 w-full'>
            <VoitingButtons accepted={answer.accepted}/>
            <div className='flex flex-col w-full'>
                <div
                    className='flex-1 mt-4 ml-6 prose dark:prose-invert max-w-none'
                    dangerouslySetInnerHTML={{__html: answer.content}}
                />
                <AnswerFooter answer={answer} currentUser={currentUser} />
            </div>
            
        </div>
    );
}
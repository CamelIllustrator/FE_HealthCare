import FillQuestion from '@/components/organisms/Quisioner/FillBooleanQuestion';
import { Button } from '@/components/ui/button';
import { getQuisionerById } from '@/lib/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FillParentQuisionerPage = () => {
    const { quisionerId } = useParams();
    const [quisioners, setQuisioners] = useState({});
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        const fetchQuisioners = async () => {
            const { data } = await getQuisionerById(quisionerId);
            setQuisioners(data);
        }
        fetchQuisioners();
    }, [])

    console.log({ answers })

    const onSubmit = (e) => {
        e.preventDefault();
        const payload = {
            familyMemberId: 1,
            answers
        }
        console.log(payload);
    }

    const onAnswerChange = (value) => {
        setAnswers(prevValue => [...prevValue, {
            questionId: value.questionId,
            booleanValue: value.booleanValue
        }]);
    }

    return (
        <section>
            <div className="bg-white p-4 rounded-lg flex flex-col gap-5">
                <FillQuestion questions={quisioners.questions} onAnswerChange={onAnswerChange} setAnswers={setAnswers} />
                <Button type="button" onClick={onSubmit}>Submit</Button>
            </div>
        </section>
    )
}

export default FillParentQuisionerPage
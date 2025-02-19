import FillQuestion from "@/components/organisms/Quisioner/FillBooleanQuestion";
import { Button } from "@/components/ui/button";
import { getQuisionerById, responseQuisioner } from "@/lib/api";
import { useEffect, useState } from "react";
import { TbBuildingBroadcastTower } from "react-icons/tb";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const FillParentQuisionerPage = () => {
  const { quisionerId } = useParams();
  const [quisioners, setQuisioners] = useState({});
const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchQuisioners = async () => {
      const { data } = await getQuisionerById(quisionerId);
      setQuisioners(data);
    };
    fetchQuisioners();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      familyMemberId: localStorage.getItem("user").id,
      answers,
    };
    const { data } = await responseQuisioner(quisionerId, payload);

    toast.success("Berhasil mengisi quisioner");
  };

  const onAnswerChange = (value) => {
    setAnswers((prevValue) => [
      ...prevValue,
      {
        questionId: value.questionId,
        booleanValue: value.booleanValue,
      },
    ]);
  };

  return (
    <section>
      <header className="bg-white p-4 rounded-lg my-4">
        <h1>{quisioners.title}</h1>
      </header>
      <div className="bg-white p-4 rounded-lg flex flex-col gap-5">
        <FillQuestion
          questions={quisioners.questions}
          onAnswerChange={onAnswerChange}
          setAnswers={setAnswers}
        />
        <Button type="button" onClick={onSubmit}>
          Submit
        </Button>
      </div>
    </section>
  );
};

export default FillParentQuisionerPage;

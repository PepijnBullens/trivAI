import Image from "next/image";
import { TriviaLayoutComponent } from "@/components/trivia-layout";
import { SubjectForm } from "@/components/subject-form";

export default function Home() {
    const questions = [
        {
            question: "Who was the first President of the United States?",
            options: [
                "George Washington",
                "Thomas Jefferson",
                "John Adams",
                "Benjamin Franklin",
            ],
            correct: "George Washington",
        },
        {
            question: "What is the capital of France?",
            options: ["London", "Paris", "Berlin", "Madrid"],
            correct: "Paris",
        },
        {
            question: "What is the largest ocean on Earth?",
            options: [
                "Atlantic Ocean",
                "Indian Ocean",
                "Arctic Ocean",
                "Pacific Ocean",
            ],
            correct: "Pacific Ocean",
        },
    ];
    return <SubjectForm/>;
}

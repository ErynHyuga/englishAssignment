import React from 'react'
import styles from './language.module.css'
// Fix the import path for Link
import { Link } from 'react-router'
import { HomeButton } from './homebutton';

type Props = {}

export const Language: React.FC<Props> = () => {
    const languageSteps = [
        {
            title: "🧠 Introduction: Why Learn a Language?",
            content: `Learning a new language opens the door to new cultures, friendships, and opportunities. 
It improves memory, boosts creativity, and even helps with multitasking. 
Whether you're learning for travel, career, or personal growth — every step counts.`
        },
        {
            title: "🎯 Step 1: Set Clear & Personal Goals",
            content: `• Start with "why": Are you learning to travel, connect with someone, or watch your favorite show without subtitles?
• Break it down: Instead of "Become fluent," try "Learn 100 new words in a month" or "Hold a 5-minute conversation."
• Track progress: Keep a log or use an app to see how far you've come.`
        },
        {
            title: "🔁 Step 2: Practice Every Day (Even Just a Little!)",
            content: `• Short daily sessions beat long weekly ones.
• Try listening to a podcast on the bus, reviewing flashcards during lunch, or writing your to-do list in your target language.
Tip: Habit stacking works! Attach language practice to another habit (e.g., "after brushing my teeth, I'll review 5 words").`
        },
        {
            title: "📚 Step 3: Mix Up Your Resources",
            content: `Using a mix of tools keeps things fun and effective.
 
Apps:
- Duolingo (fun + gamified)
- Babbel (structured lessons)
- Memrise (real-life phrases)
 
Podcasts:
- Coffee Break Languages
- Language Transfer
- Easy German / Easy Spanish
 
Videos & Media:
- YouTube channels with subtitles
- TV shows, movies, cartoons
- TikToks in your target language`
        },
        {
            title: "🧍 Step 4: Make it Personal",
            content: `• Learn vocabulary based on your interests (e.g., sports, fashion, tech).
• Write a personal journal, even short daily entries like "Today I ate pasta."
• Label items in your room with sticky notes in the target language.`
        },
        {
            title: "🗣️ Step 5: Speak From Day One",
            content: `Don't wait to be "fluent" — start speaking early and often.
 
• Find a language exchange partner via apps like Tandem or HelloTalk
• Practice speaking with AI or voice assistants
• Read sentences aloud even if you're alone
 
Remember: Mistakes = learning!`
        },
        {
            title: "🔁 Step 6: Use Spaced Repetition",
            content: `Repetition is key, but smart repetition is better.
 
• Tools like Anki or Quizlet use algorithms to help you remember vocabulary more effectively.
• Review regularly. Don't cram!`
        },
        {
            title: "🌍 Step 7: Surround Yourself with the Language (Immersion)",
            content: `You don't need to travel abroad to immerse yourself.
 
• Change your phone and app language
• Follow creators or influencers who speak your target language
• Watch YouTube videos with subtitles on`
        },
        {
            title: "🎮 Step 8: Make It Fun",
            content: `• Play language games (e.g., Wordle in another language!)
• Try tongue twisters and rhymes
• Translate memes or jokes`
        },
        {
            title: "💬 Bonus Tips",
            content: `• Stay consistent. Even 5 minutes daily builds progress.
• Be patient. It's okay to have "off" days.
• Celebrate progress, no matter how small.`
        },
        {
            title: "✏️ Mini Activity: Try It Out!",
            content: `Write your favorite sentence in another language:
 
Example: "La vie est belle." (French for "Life is beautiful")`
        }
    ];

    return (
        <>
            <div className={styles.container}>
                <div>

                </div>
                <div className={styles.header}>
                    <h1>Master Any Language</h1>
                    <p>Your step-by-step guide to language learning success</p>
                </div>
                <div className={styles.stepGrid}>
                    {languageSteps.map((step, index) => (
                        <div key={index} className={styles.card}>
                            <h2 className={styles.title}>{step.title}</h2>
                            <p className={styles.content}>{step.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
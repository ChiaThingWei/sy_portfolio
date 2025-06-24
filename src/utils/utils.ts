import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import star from '../images/stars.png'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
  
}


export const customers = [
  {
    name: 'Aqilah',
    feedback: 'Loved how my graduation portrait turned out—so natural and elegant!',
    image: star,
    rating: 5,
    date: '2025-02-14',
  },
  {
    name: 'Abdullah Ali',
    feedback: 'Our family portrait session was smooth and full of laughter. Highly recommended!',
    image: star,
    rating: 5,
    date: '2025-03-22',
  },
  {
    name: 'Kee Ah Hee',
    feedback: '外景拍摄很漂亮，虽然当天有点晒，但整体效果让我很满意。',
    image: star,
    rating: 4,
    date: '2025-01-09',
  },
  {
    name: 'Jayssie Tan',
    feedback: '这是我拍过最专业的一次肖像照，简直是我的LinkedIn最佳照片！',
    image: star,
    rating: 5,
    date: '2025-04-30',
  },
  {
    name: 'Charmaine',
    feedback: '家庭合照的构图和灯光都很好看，只是后期稍微还可以再修一下。',
    image: star,
    rating: 4,
    date: '2025-06-18',
  },
  {
    name: 'Jeffery Cheah',
    feedback: '非常完美地捕捉了我毕业的那一刻，真的非常感动！',
    image: star,
    rating: 5,
    date: '2025-05-07',
  },
]
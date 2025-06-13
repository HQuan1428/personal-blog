import Image from "next/image";
import Link from "next/link";
import ArrowRight from "./ArrowRight";
import Tag from "./Tag"
import { Post } from "@/types/Post";



/** Card UI */
export default function Card({ post }: { post: Post }) {


    return (
        <div className="card-container flex flex-col sm:flex-row gap-4">
            {/* Post image */}
            <div className="image">
                <Image
                    src={post.image}
                    alt="Post Image"
                    width={300}
                    height={200}
                    className="rounded-lg"
                />
            </div>


            <div className="content block">
                {/* Post datetime */}
                <div className="datetime">
                    <p className="text-sm text-datetime">{post.date}</p>
                </div>

                {/* Post title */}
                <div className="heading">
                    <Link href={`/posts/${post.id}`}>
                        <h2 className="text-2xl font-bold text-title_dark hover:text-primary">
                            {post.title}
                        </h2>
                    </Link>
                    <ArrowRight className="text-primary" />
                </div>

                {/* Post content */}
                <div className="supporting-text">
                    <p className="text-base text-normal_dark">
                        {post.supportText}
                    </p>
                </div>

                {/* Post tags */}
                <div className="categories">
                    {post.categories.map((category, index) => (
                        <Tag key={index} tag={category} />
                    ))}
                </div>
            </div>
        </div>

    );
}

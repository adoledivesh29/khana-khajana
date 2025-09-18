import React from "react";
import handpicked from '../../assets/images/Badge.png'

// slide: { title, excerpt, image, cookTime, category, author, date }
export default function SlideCard({ title, excerpt, image, cookTime, category, author, date }) {
    return (
        <article className="card">
            <div className="left">
                <div className="topBadge">Hot Recipes</div>
                <h2 className="title">{title}</h2>
                <p className="excerpt">{excerpt}</p>

                <div className="metaRow">
                    <span className="pill">{cookTime} •</span>
                    <span className="pill">{category}</span>
                </div>

                <div className="bottomRow">
                    <div className="author">
                        <img className="avatar" src={author.avatar} alt={`${author.name} avatar`} />
                        <div>
                            <div className="authorName">{author.name}</div>
                            <div className="date">{date}</div>
                        </div>
                    </div>

                    <button className="cta">View Recipes ▶</button>
                </div>
            </div>

            <div className="right">
                <img
                    src={image.src}
                    sizes="(min-width:1024px) 50vw, 100vw"
                    alt={image.alt}
                    loading="lazy"
                    className="heroImg"
                />
            </div>

            {/* the circular sticker */}
            <div className="sticker" aria-hidden>
                <img src={handpicked} alt="handpicked" />
            </div>
        </article>
    );
}



import React from "react"

export default function WebsiteNews() {
    return (
        <main>
            <section className="websiteNews">
                <div className="bookSymbol">
                    <i class="fa-solid fa-book"></i>        
                </div>
                <h1>News</h1>
                <div className="newsSegment">
                    <img src="bookCover.png" alt="bookcover"/>
                    <div>
                        <h2>Release of First Book</h2>
                        <p className="newsSegmentDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nunc arcu, dictum at velit a, rutrum pretium eros. Nulla sagittis tellus dui, et vestibulum purus consectetur id.</p>
                        <p className="newsSegmentMore">Learn More...</p>
                    </div>
                </div>
            </section>
        </main>
    )
}
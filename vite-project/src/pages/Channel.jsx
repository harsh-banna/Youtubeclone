import Header from "./Header";


function Channel(){
    return(
        <>
        <Header/>
        <div className="channel-page">
      <div className="banner">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7K3mcID_0D-_lH_W2DYTWQq11Jo3BN9D2bg&s' alt="Banner" className="banner-image" />
      </div>
      <div className="channel-info">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP1VDymcuhCr0iAYAeTMjWf765VNqamh1u_A&s" alt="Channel Logo" className="channel-logo" />
        <div className="channel-details">
          <h1>Internshala</h1>
          <p>@InternshalaOfficial • 117K subscribers • 802 videos</p>
          <p>Welcome to the official YouTube channel of Internshala...</p>
          <a href="https://internshala.com">internshala.com </a>
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>
      
      <div className="tabs">
        <button>Home</button>
        <button className="active">Videos</button>
        <button>Shorts</button>
        <button>Live</button>
        <button>Playlists</button>
        <button>Community</button>
      </div>
      <div className="videos-section">
      <VideoCard
          thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwocbHtzyBH2nt-WsbFg-1QA8W8NQBXloTtw&s"
          title="TCS Interview Questions & Answers"
          views="122 views • 1 day ago"
        />
        <VideoCard
          thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwocbHtzyBH2nt-WsbFg-1QA8W8NQBXloTtw&s"
          title="Internshala Review - Data Science Course"
          views="152 views • 7 days ago"
        />
        <VideoCard
          thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwocbHtzyBH2nt-WsbFg-1QA8W8NQBXloTtw&s"
          title="4 Internship Email Templates"
          views="361 views • 2 weeks ago"
        />
        <VideoCard
          thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwocbHtzyBH2nt-WsbFg-1QA8W8NQBXloTtw&s"
          title="Google Interview Questions & Answers"
          views="573 views • 3 weeks ago"
        />
       </div>
       </div>
        </>
    )
}

const VideoCard = ({ thumbnail, title, views,  }) => (
    <div className="video-card">
      <img src={thumbnail} alt={title} className="thumbnail" />
      <div className="video-info">
        <h3>{title}</h3>
        <p>{views}</p>
      </div>
    </div>
  );

export default Channel;
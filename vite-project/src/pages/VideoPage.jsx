
import { FaRegThumbsDown } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Header from "./Header";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import axios from "axios";

const VideoPage = () => {
    const [comment,setcomment]=useState('');
    const [allcomments,setallcomments]=useState([]);
    const [videoData, setVideoData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setdata] = useState([]);
    const params = useParams();

    const fetchData = async () => {
      try {
          const response = await fetch(`http://localhost:5000/api/videos`);
          if (!response.ok) {
              throw new Error('Failed to fetch video data');
          }
          const data = await response.json();
          setdata(data);
      } catch (error) {
          console.error("Error fetching video data:", error);
      }
  };
  useEffect(() => {
        fetchData();
}, []);

    console.log(params,params.id,`http://localhost:5000/api/video/${params.id}`);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/video/${params.id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch video data');
                }
                const data = await response.json();
                setVideoData(data);
                setallcomments(data.comments);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching video data:", error);
                setLoading(false);
            }
        };
        fetchData();
    }, [params.id]);

    const handleAddLike = async () => {
      try {
          const response = await axios.post(`http://localhost:5000/api/video/like/${videoData._id}`);
          if (response.status === 200) {
              setVideoData(prevData => ({
                  ...prevData,
                  likes: prevData.likes + 1
              }));
              alert("Like added successfully!");
          }
      } catch (err) {
          console.error("Error adding like:", err);
          alert("Failed to add like. Please try again.");
      }
  };
    const handleAdddisLike = async () => {
      try {
          const response = await axios.post(`http://localhost:5000/api/video/like/${videoData._id}`);
          if (response.status === 200) {
              setVideoData(prevData => ({
                  ...prevData,
                  dislikes: prevData.dislikes + 1
              }));
              alert("disLike added successfully!");
          }
      } catch (err) {
          console.error("Error adding like:", err);
          alert("Failed to add dislike. Please try again.");
      }
  };

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (!videoData) {
        return <h1>Video not found.</h1>;
    }

    async function createComment( commentText) {
      console.log(commentText,videoData._id);
      const url = 'http://localhost:5000/api/video/comment';
      let Id = videoData._id;
      const username = localStorage.getItem('username');
      const commentData = {
          videoId: Id,
          user: username,
          text: commentText
      };
      console.log(commentData);
      try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(commentData),
        });
        
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const result = await response.json();
        console.log('Comment updated successfully:', result);
        return result;
    } catch (error) {
        console.error('Error updating comment:', error);
    }
  }
  return (<div>
        <Header/>
      <div className="video-page">
      <div className="video-section">
        <iframe
          className="video-frame"
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/sGUkyOLTX24?si=TpLfmYa3uaPqREWo"
          title="React JS roadmap | chai aur react series"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <div className="video-details">
          <h1>{videoData.title}</h1>
          <div className="channel-info">
            <img src={videoData.thumbnailUrl} alt="Channel Logo" className="channel-logo" />
            <div className="channel-details">
              <h2>{videoData.channelId}</h2>
              <button className="subscribe-btn">Subscribe</button>
            </div>
          </div>
          <div className="video-btn">
          <p>{videoData.views} views • {videoData.uploadDate}</p>
          <button onClick={handleAddLike}><FaRegThumbsUp />{videoData.likes}</button>
          <button onClick={handleAdddisLike}>{videoData.dislikes}<FaRegThumbsDown /></button>
          </div>
          <p>
            {videoData.description}..
          </p>
          <button className="show-more">Show more</button>
        </div>
      </div>

      {/* Right Section - Playlist */}
      <div className="playlist-section">
        <h3>Chai aur react | with projects</h3>
        <ul className="playlist">
        {data.map((data)=>(<Link className='linktag' key={data.videoId} to={`/video/${data.videoId}`} ><VideoCard key={data.videoId} data={data}/></Link>))}
        </ul>
      </div>

      {/* Comments Section */}
      <div className="comments-section">
        <h3>Comments</h3>
        <div className="comment-input">
            <input type="text" placeholder='comments' onChange={(e)=>setcomment(e.target.value)}/>
            <button onClick={()=>createComment(comment)}>add comment</button>
        </div>
        {allcomments.map((data)=>(<div className="comment"><p><strong>@{data.user}</strong>{data.text}</p></div>))}
        <div className="comment">
          <p>
            <strong>@teacher</strong> The Scenery of the Himalayas has a retro atmosphere...
          </p>
        </div>
        <div className="comment">
          <p>
            <strong>@jakobson</strong> Wow! Beautiful stuff! I can't even begin to describe this.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default VideoPage;

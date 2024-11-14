import './style.css';


function VideoCard({data}) {
    console.log(data);
    return(
        <>
        <div className="videocard">
        <img src={data.thumbnailUrl} alt="" />
        <h3 className='title'>{data.title}</h3>
        <h4>{data.uploader}</h4>
        <h5>{data.views} views : {data.uploadDate}</h5>
        </div>
        </>
    )
}

export default VideoCard;
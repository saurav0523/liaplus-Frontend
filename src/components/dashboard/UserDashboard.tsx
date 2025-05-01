import { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from '../common/PostCard';
import { Post } from '../../types/types';
import { Navigate, useNavigate } from 'react-router-dom';

function UserDashboard() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const navigate = useNavigate();

  // ✅ Token check
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/user" replace />;
  }

  useEffect(() => {
    const fetchPosts = async () => {
      if (token) {
        const response = await axios.get('https://liaplusai-backend-3.onrender.com/posts', {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(response.data)
        setPosts(response.data);
      }
    };
    fetchPosts();
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/')
  }

  return (
    <div className="user-dashboard-container">
      {/* Header */}
      <div className="user-dashboard-header">
        <div className="dashboard-header" style={{width:"1000px", display: 'flex', justifyContent: 'space-between', alignItems: 'center' ,background:"red"}}>
          <h1 className="">User Dashboard</h1>
          <button onClick={handleLogout} className="logout">Logout</button>
        </div>
      </div>

      {/* Posts Heading */}
      <h2 className="user-posts-heading">All Blogs</h2>

      {/* Posts List */}
      <div className="user-posts-list">
        {posts.map((post) => (
          <div key={post._id} className="user-post-card">
            <PostCard {...post} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserDashboard;

import './App.css';
import logo from "../src/assets/logo.png"
import search from "../src/assets/search-solid.svg"
import Globe from "../src/assets/Globe.svg"
import comment from "../src/assets/comment-alt-solid.svg";
import pen from "../src/assets/pen-solid.svg";
import blackLogo from "../src/assets/blacklogo.svg";





function App() {
 
  const tags = [
    "c",
    "css",
    "express",
    "firebase",
    "html",
    "java",
    "javascript",
    "mern",
    "mongodb",
    "mysql",
    "next.js",
    "node.js",
    "php",
    "python",
    "reactjs",
  ];



  return (
<div className="hots">
      <nav className="main-nav"> 
     <div className="navbar">
     <div  className="navbar-1">
     <a href="https://stackovrflowclonebyprashant.netlify.app" className="nav-item nav-logo"><img src={logo} alt="" /></a>
      <a href="https://stackovrflowclonebyprashant.netlify.app/Plans" className="nav-item nav-btn res-nav"> Plans</a>
     <a href="https://stackoverflowclonebyprashant.netlify.app"className="nav-item nav-btn res-nav"> Community</a>
     <a href="https://stackovrflowclonebyprashant.netlify.app/Otp"className="nav-item nav-btn res-nav">Chatbot</a>
   <form>
   <input type="text" placeholder="Search..." />
   <img src={search} alt="search" width="18" className="search-icon"/>
  </form>
  </div>
  </div>
    </nav>

 {/* //leftsidebar */}

 <div
      className="left-sidebar"
     
    >
      <nav className="side-nav">
        <button  className="nav-btn">
          <a href="https://stackovrflowclonebyprashant.netlify.app" className="side-nav-links" activeclassname="active">
            <p>Home</p>
          </a>
        </button>
        <div className="side-nav-div">
          <div>
            <p>PUBLIC</p>
          </div>
          <button  className="nav-btn">
            <a
              href="https://stackovrflowclonebyprashant.netlify.app"
              className="side-nav-links"
              activeclassname="active"
            >
              <img src={Globe} alt="Globe" />
              <p style={{ paddingLeft: "10px" }}> Questions </p>
            </a>
          </button>
          <button  className="nav-btn">
            <a
            href="https://stackovrflowclonebyprashant.netlify.app"
              className="side-nav-links"
              activeclassname="active"
              style={{ paddingLeft: "40px" }}
            >
              <p>Tags</p>
            </a>
          </button>
          <button  className="nav-btn">
            <a
              href="https://stackovrflowclonebyprashant.netlify.app"
              className="side-nav-links"
              activeclassname="active"
              style={{ paddingLeft: "40px" }}
            >
              <p>Users</p>
            </a>
            
          </button>
        </div> 
      </nav>
    </div>

 {/* //homemainbar */}
 <div className='main-bar'>
      <div className='main-bar-header'>   
          <h1>Can you Answer these Questions !!</h1>
          
        <button  className='ask-btn'> 
        
         Ask Question
        
        </button>

      </div>
      <div className="head">
        M.E.R.N Stack Web Developer interview questions!! (Take help from JARVIS )
      </div>
      <div>
      <div className="quest">Q.1 How does React work ?</div>
      <div className="quest"> Q.2 What is props in React ?</div>
      <div className="quest">Q.3 What Is Replication In MongoDB ?</div>
      <div className="quest">Q.4 What are Higher-Order components ?</div>
      <div className="quest">Q.5 What do you mean by Asynchronous API ?</div>
      <div className="quest">Q.6 What is Callback Hell ?</div>
      <div className="quest">Q.7 What is Reconciliation? </div>
      <div className="quest">Q.8 Does Mongodb Support Foreign Key Constraints ? </div>
      <div className="quest">Q.9 How Node prevents blocking code ? </div>
      <div className="quest">Q.10 How can you achieve transaction and locking in MongoDB ? </div>
      <div className="quest">Q.11 How does Node.js handle child threads </div>
      <div className="quest">Q.12 How to avoid Callback Hell in Node.js ?</div>
      
      
      
      

      </div>
    </div>


 {/* //RightSidebar */}
 <div className="rightwi">
 <div className="widget">
      <h4>The Overflow Blog</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18" />
          <p>
            Observability is key to the future of software (and your DevOps
            career)
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18" />
          <p>Podcast 374: How valuable is your screen name?</p>
        </div>
      </div>
      <h4>Featured on Meta</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" width="18" />
          <p>Review queue workflows - Final release....</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" width="18" />
          <p>
            Please welcome Valued Associates: #958 - V2Blast #959 - SpencerG
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={blackLogo} alt="pen" width="18" />
          <p>
            Outdated Answers: accepted answer is now unpinned on Stack Overflow
          </p>
        </div>
      </div>
      <h4>Hot Meta Posts</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <p>38</p>
          <p>
            Why was this spam flag declined, yet the question marked as spam?
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <p>20</p>
          <p>
            What is the best course of action when a user has high enough rep
            to...
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <p>14</p>
          <p>Is a link to the "How to ask" help page a useful comment?</p>
        </div>
       
      </div>
  
    </div>

    {/* //widgettags */}
    <div className="widget-tags">
      <h4>Watched tags</h4>
      <div className="widget-tags-div">
        {tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>
    </div>
    </div>

   


</div>
  );
}

export default App;

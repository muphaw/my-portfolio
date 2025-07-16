import styled from 'styled-components';

const PhotoCard = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="content">
          <div className="back">
            <div className="back-content">
              <img 
            src="/public/me.jpg" 
            alt="Profile" 
            className="w-full  h-70 shadow-lg object-cover p-1"
          />
            </div>
          </div>
        
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    overflow: visible;
    width: 190px;
    height: 254px;
  }

  .content {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 300ms;
    box-shadow: 9px 10px 10px 10px #000000ee;
    border-radius: 5px;
  }

  .back {
    background-color: #151515;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 5px;
    overflow: hidden;
  }

  .back {
    width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .back::before {
  position: absolute;
  content: ' ';
  display: block;
  width: 203px; /* original was 200px → +3px */
  height: 170%;  /* slightly taller for full coverage */
  background: linear-gradient(
    90deg,
    transparent,
    #d7d7d7,
    #d7d7d7,
    #d7d7d7,
    transparent
  );
  animation: rotation_481 5000ms infinite linear;
  filter: blur(8px); /* <-- this makes the glow look thicker */
}

  .back-content {
    position: absolute;
    width: 99%;
    height: 99%;
    background-color: #151515;
    border-radius: 5px;
    border: 6px ;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }


  @keyframes rotation_481 {
    0% {
      transform: rotateZ(0deg);
    }

    0% {
      transform: rotateZ(360deg);
    }
  }`;

export default PhotoCard;

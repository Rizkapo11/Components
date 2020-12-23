import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
  return (
    <div className="ui container comments">
     <ApprovalCard>
       <div>
         <h4>Warning!</h4>
         Are you sure you want to do this
       </div>
     </ApprovalCard>
     <ApprovalCard>
      <CommentDetail 
        author="Denna" 
        timeAgo="Today at 2.00PM" 
        content="She likes to eat"
        Avatar ={faker.image.avatar()} 
      />
     </ApprovalCard>
       
     <ApprovalCard>
      <CommentDetail 
        author="Tami" 
        timeAgo="Today at 5.00AM" 
        content="She likes a Fashion"
        Avatar ={faker.image.avatar()} 
      />
     </ApprovalCard>

     <ApprovalCard>
      <CommentDetail 
        author="Rafli" 
        timeAgo="Yesterday at 4.00PM" 
        content="he like a girls"
        Avatar ={faker.image.avatar()} 
      />
     </ApprovalCard>

     <ApprovalCard>
      <CommentDetail 
        author="Rizka" 
        timeAgo="Today at 2.00AM" 
        content="She like a Work Hard"
        Avatar ={faker.image.avatar()} 
      />
     </ApprovalCard>

    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
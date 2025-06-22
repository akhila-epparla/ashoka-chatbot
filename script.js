function sendMessage() {
  const input = document.getElementById('user-input');
  const message = input.value.trim();
  if (message === '') return;

  const chatBox = document.getElementById('chat-box');

  // Add user's message (right side)
  const userMessage = document.createElement('div');
  userMessage.className = 'message user';
  userMessage.textContent = message;
  chatBox.appendChild(userMessage);
  chatBox.scrollTop = chatBox.scrollHeight;

  input.value = '';

  // Simulate bot response (left side)
  setTimeout(() => {
    const botMessage = document.createElement('div');
    botMessage.className = 'message bot';
    botMessage.innerHTML = getBotResponse(message);
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);
}
document.getElementById('user-input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();  // Prevent form submission if inside a form
    sendMessage();       // Call your existing sendMessage() function
  }
});


function getBotResponse(userMessage) {
  if (userMessage.toLowerCase().includes('fees')) {
    return "The fees for B.Tech programs is approximately ₹85,000 per year.";
  } else if (userMessage.toLowerCase().includes('admission')) {
    return "Admissions are open! Visit our college website or contact the admissions office.";
  }else if (userMessage.toLowerCase().includes('courses offered') || userMessage.toLowerCase().includes('what courses') || userMessage.toLowerCase().includes('programs available')) {
    return "Ashoka Women's Engineering College offers B.Tech, MCA, and MBA programs.";
}
else if (userMessage.toLowerCase().includes('branches in btech') || userMessage.toLowerCase().includes('btech branches')) {
    return "We offer B.Tech in branches like CSE-AI, CSE, ECE, EEE, and more.";
}
    else if (userMessage.toLowerCase().includes('eligibility for btech')) {
    return "For B.Tech, candidates must have passed 12th with a background in Mathematics, Physics, and Chemistry.";
}
    else if (userMessage.toLowerCase().includes('bus facility') || userMessage.toLowerCase().includes('transport')) {
    return "Yes, Ashoka Women's Engineering College provides bus facilities from various areas for the convenience of students.";
}
    else if (userMessage.toLowerCase().includes('is ashoka college provides hostel')) {
    return "ya ashoka college provides hostel also";
  }
    else if (userMessage.toLowerCase().includes('what is the fee for  the hostel')) {
    return "actually ashoka college provides the different types of hostels like AC,Deluxe,Attached wash rooms,.....etc which type of room you want ? ";
  } 
   else if (userMessage.toLowerCase().includes('which type of room you want?')) {
    return "i want ac room";
  }
   else if (userMessage.toLowerCase().includes('i want ac room')) {
    return "The fee of the A/C room is approximately ₹100,000";
  }
   else if (userMessage.toLowerCase().includes('i want deluxe room')) {
    return "The fee of the Deluxe room is approximately ₹80,000 ";
  }
   else if (userMessage.toLowerCase().includes('i want attached room')) {
    return "The fee of the Attached room is approximately ₹60,000 ";
  }
 else if (userMessage.toLowerCase().includes('website') || userMessage.toLowerCase().includes('official site')) {
  return 'You can visit our official website here: <a href="https://www.ashokacollege.in" target="_blank">ashokacollege.in</a>';
}
    else {
    return "I'm here to help with information about Ashoka Women's Engineering College.";
  }
}

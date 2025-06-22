function sendMessage() {
  const input = document.getElementById('user-input');
  const message = input.value.trim();
  if (message === '') return;

  const chatBox = document.getElementById('chat-box');

  const userMsg = document.createElement('div');
  userMsg.className = 'message user';
  userMsg.textContent = message;
  chatBox.appendChild(userMsg);
  chatBox.scrollTop = chatBox.scrollHeight;

  input.value = '';

  setTimeout(() => {
    const botMsg = document.createElement('div');
    botMsg.className = 'message bot';
    botMsg.innerHTML = getBotResponse(message);
    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);
}

document.getElementById('user-input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    sendMessage();
  }
});

function getBotResponse(message) {
  message = message.toLowerCase();

  // ✅ Always check hostel fee FIRST to avoid confusion with college fee
  if ((message.includes('hostel') && (message.includes('fee') || message.includes('fees')))) {
    return "Ashoka College provides different types of hostels:<br> - A/C (₹100,000)<br> - Deluxe (₹80,000)<br> - Attached (₹60,000)<br>Which one do you want?";
  
  } else if (message.includes('ac room')) {
    return "The A/C hostel room costs approximately ₹100,000.";

  } else if (message.includes('deluxe')) {
    return "The Deluxe hostel room costs approximately ₹80,000.";

  } else if (message.includes('attached')) {
    return "The Attached hostel room costs approximately ₹60,000.";

  } else if (message.includes('college fee') || message.includes('college fees') || (message.includes('fee') || message.includes('fees'))) {
    return "The fees for B.Tech programs is approximately ₹85,000 per year.";

  } else if (message.includes('courses') || message.includes('programs')) {
    return "We offer B.Tech, MCA, and MBA programs.";

  } else if (message.includes('admission')) {
    return "Admissions are open! Visit <a href='https://www.ashokacollege.in' target='_blank'>ashokacollege.in</a> for details.";

  } else if (message.includes('branches') || message.includes('btech')) {
    return "We offer B.Tech branches like CSE, CSE-AI, ECE, EEE and more.";

  } else if (message.includes('bus') || message.includes('transport')) {
    return "Yes, Ashoka College provides bus facilities from various areas.";

  } else if (message.includes('website') || message.includes('official')) {
    return 'Visit our official website: <a href="https://www.ashokacollege.in" target="_blank">ashokacollege.in</a>';

  } else {
    return "I'm here to help! Please ask about hostel fees, college fees, courses, admissions, or our official website.";
  }
}

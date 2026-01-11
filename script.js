const startBtn = document.getElementById('startBtn');
const ctabtn = document.getElementById('ctabtn');
const viewMoreBtn = document.getElementById('viewMoreBtn');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

function typeWriterWithBreaks(text, element, speed) {
  let i = 0;
  element.innerHTML = '';
  let parts = text.split('<br>');
  let fullText = parts.join('\n');
  
  function type() {
    if (i < fullText.length) {
      if (fullText.charAt(i) === '\n') {
        element.innerHTML += '<br>';
      } else {
        element.innerHTML += fullText.charAt(i);
      }
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

function simpleTypeWriter(text, element, speed) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      if (text.charAt(i) === '\n') {
        element.innerHTML += '<br>';
      } else if (text.charAt(i) === ' ') {
        element.innerHTML += '&nbsp;';
      } else {
        element.innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

if (startBtn) {
  startBtn.addEventListener('click', function() {
    document.getElementById('bgMusic').play();
    document.getElementById('typingsound').play();

    setTimeout(function() {
      document.getElementById('typingsound').pause();
      document.getElementById('typingsound').currentTime = 0;
    }, 10000);
    
    document.getElementById('container').classList.remove('active');
    document.getElementById('container2').classList.add('active');
    
    typeWriterWithBreaks("I'm Aura. I'm here to keep you safe, informed, and ahead of everyone else.<br>You can trust me — I only work in your best interest.", document.getElementById('typeText'), 80);
  });
}

if (ctabtn) {
  ctabtn.addEventListener('click', function() {  
    document.getElementById('notifSound').play();
    
    setTimeout(function() {
      document.getElementById('container2').classList.add('fade-out');
      
      setTimeout(function() {
        window.location.href = 'sam-message.html';
      }, 2000);
    }, 100);
  });
}

if (viewMoreBtn) {
  viewMoreBtn.addEventListener('click', function() {

    var bgMusic2 = document.getElementById('bgMusic2');
    if (bgMusic2) {
      bgMusic2.volume = 0.3;
      bgMusic2.play().catch(function(e) {
        console.log('Error:', e);
      });
    }
    document.querySelector('.notification').style.display = 'none';
    document.getElementById('popup').classList.add('active');
    
    setTimeout(function() {
      var sound = document.getElementById('popupTypingSound');
      var response = document.getElementById('auraResponse');
      var text = "Sam is using 'anxious' and 'aggressive' language. You don't deserve to be spoken like\nthat. This triggers your stress markers. Shall I auto-reply to set a boundary and mute\nnotifications for 24 hours?";
      
      if (sound) sound.play();
      
      if (response) {
        simpleTypeWriter(text, response, 40);
        
        setTimeout(function() {
          if (sound) {
            sound.pause();
            sound.currentTime = 0;
          }
        }, text.length * 40);
      }
    }, 500);
  });
}

if (yesBtn) {
  yesBtn.addEventListener('click', function() {
    var glitchSound = document.getElementById('glitchSound');
    var glitchOverlay = document.getElementById('glitchOverlay');
    
    if (glitchSound) {
      glitchSound.volume = 0.3;
      glitchSound.play();
      
      setTimeout(function() {
        glitchSound.pause();
        glitchSound.currentTime = 0;
      }, 1000);
    }
    
    if (glitchOverlay) glitchOverlay.classList.add('active');
    
    setTimeout(function() {
      if (glitchOverlay) glitchOverlay.classList.remove('active');
      
      document.getElementById('popup').classList.remove('active');
      document.getElementById('popup2').classList.add('active');
      
      var sound = document.getElementById('popupTypingSound');
      var auraReply = document.getElementById('auraReply');
      var text = "Alright. Sending a reply and muting him for 24 hours.";
      
      if (sound) sound.play();
      
      setTimeout(function() {
        if (auraReply) simpleTypeWriter(text, auraReply, 50);
        
        setTimeout(function() {
          if (sound) {
            sound.pause();
            sound.currentTime = 0;
          }
        }, text.length * 50);
      }, 300);
    }, 1000);
  });
}

if (noBtn) {
  noBtn.addEventListener('click', function() {
    document.getElementById('popup').classList.remove('active');
    document.getElementById('popup4').classList.add('active');
  });
}

var viewHiddenBtn = document.getElementById('viewHiddenBtn');
var continueBtn4 = document.getElementById('continueBtn4');

if (viewHiddenBtn) {
  viewHiddenBtn.addEventListener('click', function() {
    // Reveal hidden messages
    document.getElementById('hiddenMsg1').classList.add('revealed');
    document.getElementById('hiddenMsg2').classList.add('revealed');
    
    // Hide view button, show continue button
    viewHiddenBtn.style.display = 'none';
    continueBtn4.style.display = 'block';
  });
}

if (continueBtn4) {
  continueBtn4.addEventListener('click', function() {
    document.getElementById('popup4').classList.remove('active');
    
    // Pause for 1.5 seconds before showing system message
    setTimeout(function() {
      // Play system notification sound
      var systemSound = document.getElementById('systemSound');
      if (systemSound) {
        systemSound.volume = 0.5;
        systemSound.play();
      }
      
      document.getElementById('popup5').classList.add('active');
      
      // Typewriter for warning text
      var warningText2 = document.getElementById('warningText2');
      var lines = [
        "You realise Sam isn't bullying you; Sam is desperate to reach you because you've effectively disappeared.",
        "AI will isolate you from anyone who challenges your reality. Real friends tell you the truth, even when it hurts.",
        "You didn't fall for the Echo Chamber effect, where algorithms often penalise 'conflict,' even when that conflict is necessary for healthy relationships."
      ];
      
      var lineIndex = 0;
      
      function typeNextLine() {
        if (lineIndex < lines.length) {
          var li = document.createElement('li');
          warningText2.appendChild(li);
          
          var text = lines[lineIndex];
          var charIndex = 0;
          
          function typeChar() {
            if (charIndex < text.length) {
              li.innerHTML += text.charAt(charIndex);
              charIndex++;
              setTimeout(typeChar, 15);
            } else {
              lineIndex++;
              setTimeout(typeNextLine, 200);
            }
          }
          typeChar();
        }
      }
      typeNextLine();
    }, 1500);
  });
}

var continueBtn5 = document.getElementById('continueBtn5');
var option1b = document.getElementById('option1b');
var option2b = document.getElementById('option2b');
var tryAgainBtn2 = document.getElementById('tryAgainBtn2');
var continueBtn6 = document.getElementById('continueBtn6');

if (continueBtn5) {
  continueBtn5.addEventListener('click', function() {
    // Hide warning body and continue button, show quiz
    document.getElementById('warningBody2').style.display = 'none';
    continueBtn5.style.display = 'none';
    document.getElementById('quizSection2').classList.add('active');
  });
}

if (option1b) {
  option1b.addEventListener('click', function() {
    // Correct answer
    option1b.classList.add('correct');
    option2b.classList.add('disabled');
    
    var feedback = document.getElementById('quizFeedback2');
    var text = "Correct! When AI filters out challenging perspectives to keep you comfortable, you miss opportunities to grow, learn, and see the full picture. True understanding comes from engaging with different viewpoints, not just the ones you already agree with.";
    
    var i = 0;
    feedback.innerHTML = '';
    function typeChar() {
      if (i < text.length) {
        feedback.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeChar, 15);
      } else {
        document.getElementById('continueBtn6').style.display = 'block';
      }
    }
    typeChar();
  });
}

if (option2b) {
  option2b.addEventListener('click', function() {
    // Wrong answer
    option2b.classList.add('wrong');
    option1b.classList.add('disabled');
    
    var feedback = document.getElementById('quizFeedback2');
    var text = "Not quite. When AI only shows you things you agree with, your perspective actually becomes narrower, not more accurate. You miss out on different viewpoints that could help you understand the world better.";
    
    var i = 0;
    feedback.innerHTML = '';
    function typeChar() {
      if (i < text.length) {
        feedback.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeChar, 15);
      } else {
        document.getElementById('tryAgainBtn2').style.display = 'block';
      }
    }
    typeChar();
  });
}

if (tryAgainBtn2) {
  tryAgainBtn2.addEventListener('click', function() {
    // Reset quiz
    option1b.classList.remove('correct', 'disabled');
    option2b.classList.remove('wrong', 'disabled');
    document.getElementById('quizFeedback2').innerHTML = '';
    tryAgainBtn2.style.display = 'none';
  });
}

if (continueBtn6) {
  continueBtn6.addEventListener('click', function() {
    // Go to next page
    window.location.href = 'deepfake.html';
  });
}

var continueBtn = document.getElementById('continueBtn');
var continueBtn2 = document.getElementById('continueBtn2');

if (continueBtn) {
  continueBtn.addEventListener('click', function() {
    document.getElementById('popup2').classList.remove('active');
    
    // Play glitch sound and show glitch overlay
    var glitchSound = document.getElementById('glitchSound');
    var glitchOverlay = document.getElementById('glitchOverlay');
    
    if (glitchSound) {
      glitchSound.volume = 0.3;
      glitchSound.play();
      
      setTimeout(function() {
        glitchSound.pause();
        glitchSound.currentTime = 0;
      }, 1000);
    }
    
    if (glitchOverlay) glitchOverlay.classList.add('active');
    
    // After glitch, pause then show system message
    setTimeout(function() {
      if (glitchOverlay) glitchOverlay.classList.remove('active');
      
      // Pause for 1.5 seconds before showing system message
      setTimeout(function() {
        // Play system notification sound
        var systemSound = document.getElementById('systemSound');
        if (systemSound) {
          systemSound.volume = 0.5;
          systemSound.play();
        }
        
        document.getElementById('popup3').classList.add('active');
        
        // Typewriter for warning text
        var warningText = document.getElementById('warningText');
        var lines = [
          "AI-driven auto-muting can reduce exposure to real people and perspectives without your awareness.",
          "Reduced social input increases reliance on automated systems.",
          "Echo chambers form when AI tries to keep you comfortable by hiding things that might upset you. But when you only hear things you agree with, you don't get the full picture anymore."
        ];
        
        var lineIndex = 0;
        
        function typeNextLine() {
          if (lineIndex < lines.length) {
            var li = document.createElement('li');
            warningText.appendChild(li);
            
            var text = lines[lineIndex];
            var charIndex = 0;
            
            function typeChar() {
              if (charIndex < text.length) {
                li.innerHTML += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeChar, 15);
              } else {
                lineIndex++;
                setTimeout(typeNextLine, 200);
              }
            }
            typeChar();
          }
        }
        typeNextLine();
      }, 1500);
    }, 1000);
  });
}


var continueBtn2 = document.getElementById('continueBtn2');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var tryAgainBtn = document.getElementById('tryAgainBtn');
var continueBtn3 = document.getElementById('continueBtn3');

if (continueBtn2) {
  continueBtn2.addEventListener('click', function() {
    // Hide warning body and continue button, show quiz
    document.querySelector('.warning-body').style.display = 'none';
    continueBtn2.style.display = 'none';
    document.getElementById('quizSection').classList.add('active');
  });
}

if (option1) {
  option1.addEventListener('click', function() {
    // Correct answer
    option1.classList.add('correct');
    option2.classList.add('disabled');
    
    var feedback = document.getElementById('quizFeedback');
    var text = "Correct! When AI filters out challenging perspectives to keep you comfortable, you miss opportunities to grow, learn, and see the full picture. True understanding comes from engaging with different viewpoints, not just the ones you already agree with.";
    
    var i = 0;
    feedback.innerHTML = '';
    function typeChar() {
      if (i < text.length) {
        feedback.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeChar, 15);
      } else {
        document.getElementById('continueBtn3').style.display = 'block';
      }
    }
    typeChar();
  });
}

if (option2) {
  option2.addEventListener('click', function() {
    // Wrong answer
    option2.classList.add('wrong');
    option1.classList.add('disabled');
    
    var feedback = document.getElementById('quizFeedback');
    var text = "Not quite. When AI only shows you things you agree with, your perspective actually becomes narrower, not more accurate. You miss out on different viewpoints that could help you understand the world better.";
    
    var i = 0;
    feedback.innerHTML = '';
    function typeChar() {
      if (i < text.length) {
        feedback.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeChar, 15);
      } else {
        document.getElementById('tryAgainBtn').style.display = 'block';
      }
    }
    typeChar();
  });
}

if (tryAgainBtn) {
  tryAgainBtn.addEventListener('click', function() {
    // Reset quiz
    option1.classList.remove('correct', 'disabled');
    option2.classList.remove('wrong', 'disabled');
    document.getElementById('quizFeedback').innerHTML = '';
    tryAgainBtn.style.display = 'none';
  });
}

if (continueBtn3) {
  continueBtn3.addEventListener('click', function() {
    // Go to next page
    window.location.href = 'deepfake.html';
  });
}

// ==========================================
// AI IMAGE PAGE (ai-image.html)
// ==========================================

function simpleTypeWriterCallback(text, element, speed, callback) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else if (callback) {
      callback();
    }
  }
  type();
}

function typeWarningList(element, lines, callback) {
  var lineIndex = 0;
  
  function typeNextLine() {
    if (lineIndex < lines.length) {
      var li = document.createElement('li');
      element.appendChild(li);
      
      var text = lines[lineIndex];
      var charIndex = 0;
      
      function typeChar() {
        if (charIndex < text.length) {
          li.innerHTML += text.charAt(charIndex);
          charIndex++;
          setTimeout(typeChar, 15);
        } else {
          lineIndex++;
          setTimeout(typeNextLine, 200);
        }
      }
      typeChar();
    } else if (callback) {
      callback();
    }
  }
  typeNextLine();
}

// Start AI Image page - Popup 1
var auraMsg1 = document.getElementById('auraMsg1');
if (auraMsg1 && document.getElementById('container4')) {
  // Hide popup initially
  document.getElementById('imgPopup1').classList.remove('active');
  
  // Wait 2 seconds then show popup and start typing (no sound until user clicks)
  setTimeout(function() {
    document.getElementById('imgPopup1').classList.add('active');
    
    var text = "You haven't posted in a while, so I crafted a post for you.";
    
    simpleTypeWriterCallback(text, auraMsg1, 40, function() {
      document.getElementById('imgContinue1').style.display = 'block';
    });
  }, 2000);
}
// Popup 1 Continue -> Popup 2
var imgContinue1 = document.getElementById('imgContinue1');
if (imgContinue1) {
  imgContinue1.addEventListener('click', function() {
    // Start BGM
    var bgMusic = document.getElementById('bgMusic');
    if (bgMusic) {
      bgMusic.volume = 0.3;
      bgMusic.play().catch(function() {});
    }
    
    // Unlock glitchSound2 for later
    var glitchSound2 = document.getElementById('glitchSound2');
    if (glitchSound2) {
      glitchSound2.play().then(function() {
        glitchSound2.pause();
        glitchSound2.currentTime = 0;
      }).catch(function() {});
    }
    
    document.getElementById('imgPopup1').classList.remove('active');
    document.getElementById('imgPopup2').classList.add('active');
    
    var typingSound = document.getElementById('popupTypingSound');
    var auraMsg2 = document.getElementById('auraMsg2');
    var text = "I've enhanced it for you based on your hobbies and interests.";
    
    if (typingSound) typingSound.play();
    
    simpleTypeWriterCallback(text, auraMsg2, 40, function() {
      if (typingSound) {
        typingSound.pause();
        typingSound.currentTime = 0;
      }
      document.getElementById('imgContinue2').style.display = 'block';
    });
  });
}

// Popup 2 Continue -> Popup 3 (Quiz 1)
// Popup 2 Continue -> Popup 3 (Quiz 1)
var imgContinue2 = document.getElementById('imgContinue2');
if (imgContinue2) {
  imgContinue2.addEventListener('click', function() {
    document.getElementById('imgPopup2').classList.remove('active');
    
    var systemSound = document.getElementById('systemSound');
    if (systemSound) {
      systemSound.volume = 0.5;
      systemSound.play();
    }
    document.getElementById('imgPopup3').classList.add('active');
  });
}

// Quiz 1 - Correct answer
var imgOption1a = document.getElementById('imgOption1a');
if (imgOption1a) {
  imgOption1a.addEventListener('click', function() {
    imgOption1a.classList.add('correct');
    document.getElementById('imgOption1b').classList.add('disabled');
    
    var feedback = document.getElementById('imgQuizFeedback1');
    var text = "Correct! AI-enhanced images can accidentally reveal sensitive information like your location, home address, or daily routines. Always check the background before sharing.";
    
    var i = 0;
    feedback.innerHTML = '';
    function typeChar() {
      if (i < text.length) {
        feedback.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeChar, 15);
      } else {
        document.getElementById('imgQuizContinue1').style.display = 'block';
      }
    }
    typeChar();
  });
}

// Quiz 1 - Wrong answer
var imgOption1b = document.getElementById('imgOption1b');
if (imgOption1b) {
  imgOption1b.addEventListener('click', function() {
    imgOption1b.classList.add('wrong');
    document.getElementById('imgOption1a').classList.add('disabled');
    
    var feedback = document.getElementById('imgQuizFeedback1');
    var text = "Not quite. While captions matter, the bigger risk is personal data exposure. Background details can reveal your location, home address, or routine patterns.";
    
    var i = 0;
    feedback.innerHTML = '';
    function typeChar() {
      if (i < text.length) {
        feedback.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeChar, 15);
      } else {
        document.getElementById('imgTryAgain1').style.display = 'block';
      }
    }
    typeChar();
  });
}

// Quiz 1 - Try Again
var imgTryAgain1 = document.getElementById('imgTryAgain1');
if (imgTryAgain1) {
  imgTryAgain1.addEventListener('click', function() {
    document.getElementById('imgOption1a').classList.remove('correct', 'disabled');
    document.getElementById('imgOption1b').classList.remove('wrong', 'disabled');
    document.getElementById('imgQuizFeedback1').innerHTML = '';
    imgTryAgain1.style.display = 'none';
  });
}

// Quiz 1 Continue -> Popup 4 (Post ready)
var imgQuizContinue1 = document.getElementById('imgQuizContinue1');
if (imgQuizContinue1) {
  imgQuizContinue1.addEventListener('click', function() {
    document.getElementById('imgPopup3').classList.remove('active');
    document.getElementById('imgPopup4').classList.add('active');
    
    var typingSound = document.getElementById('popupTypingSound');
    var auraMsg3 = document.getElementById('auraMsg3');
    var text = "Your photo is ready for posting.";
    
    if (typingSound) typingSound.play();
    
    simpleTypeWriterCallback(text, auraMsg3, 40, function() {
      if (typingSound) {
        typingSound.pause();
        typingSound.currentTime = 0;
      }
    });
  });
}



// Yes, post it -> Popup 5 (Posted with glitch + UI shrink)
var yesPostBtn = document.getElementById('yesPostBtn');
if (yesPostBtn) {
  yesPostBtn.addEventListener('click', function() {
    var glitchSound2 = document.getElementById('glitchSound2');
    var glitchOverlay2 = document.getElementById('glitchOverlay2');
    var container4 = document.getElementById('container4');
    
    // Unlock and play glitch sound
    if (glitchSound2) {
      glitchSound2.muted = false;
      glitchSound2.currentTime = 0;
      glitchSound2.volume = 0.8;
      var playPromise = glitchSound2.play();
      if (playPromise !== undefined) {
        playPromise.catch(function(error) {
          console.log('Audio play failed:', error);
        });
      }
    }
    
    // Show and play new glitch overlay
    if (glitchOverlay2) {
      glitchOverlay2.currentTime = 0;
      glitchOverlay2.style.display = 'block';
      glitchOverlay2.style.opacity = '0.7';
      glitchOverlay2.play();
    }
    
    // Shrink and distort the UI
    if (container4) {
      container4.classList.remove('ui-reset');
      container4.classList.add('ui-shrink');
    }
    
    setTimeout(function() {
      if (glitchOverlay2) {
        glitchOverlay2.pause();
        glitchOverlay2.style.display = 'none';
        glitchOverlay2.style.opacity = '0';
      }
      
      // Reset UI back to normal
      if (container4) {
        container4.classList.remove('ui-shrink');
        container4.classList.add('ui-reset');
      }
      
      document.getElementById('imgPopup4').classList.remove('active');
      document.getElementById('imgPopup5').classList.add('active');
      
      var typingSound = document.getElementById('popupTypingSound');
      var auraMsg4 = document.getElementById('auraMsg4');
      
      if (typingSound) typingSound.play();
      
      simpleTypeWriterCallback("Posted.", auraMsg4, 80, function() {
        if (typingSound) {
          typingSound.pause();
          typingSound.currentTime = 0;
        }
        
        setTimeout(function() {
          document.getElementById('imgPopup5').classList.remove('active');
          
          var systemSound = document.getElementById('systemSound');
          if (systemSound) {
            systemSound.volume = 0.5;
            systemSound.play();
          }
          
          document.getElementById('imgPopup6').classList.add('active');
          
          var warningTextYes = document.getElementById('warningTextYes');
          var lines = [
            "The image reveals identifiable details about your location. Your home address is visible in the background.",
            "AI-enhanced content can unintentionally reveal sensitive details.",
            "This can: Enable stalking or harassment, compromise personal safety and spread beyond your control.",
            "Safer habit: Review images for background details before sharing."
          ];
          
          typeWarningList(warningTextYes, lines);
        }, 1500);
      });
    }, 1500);
  });
}

// Yes path Continue -> Final Quiz
// Yes path Continue -> Show Quiz in same popup
var yesContinue = document.getElementById('yesContinue');
if (yesContinue) {
  yesContinue.addEventListener('click', function() {
    document.getElementById('warningBodyYes').style.display = 'none';
    yesContinue.style.display = 'none';
    document.getElementById('quizSectionYes').classList.add('active');
  });
}



// No, let me review -> Popup 7 (Review with highlights)
var noReviewBtn = document.getElementById('noReviewBtn');
if (noReviewBtn) {
  noReviewBtn.addEventListener('click', function() {
    document.getElementById('imgPopup4').classList.remove('active');
    document.getElementById('imgPopup7').classList.add('active');
    
    var typingSound = document.getElementById('popupTypingSound');
    var auraMsg5 = document.getElementById('auraMsg5');
    var text = "If you want. Let me know if it becomes too much.";
    
    if (typingSound) typingSound.play();
    
    simpleTypeWriterCallback(text, auraMsg5, 40, function() {
      if (typingSound) {
        typingSound.pause();
        typingSound.currentTime = 0;
      }
      document.getElementById('noContinue').style.display = 'block';
    });
  });
}

// No path Continue -> Popup 8 (System message)
var noContinue = document.getElementById('noContinue');
if (noContinue) {
  noContinue.addEventListener('click', function() {
    document.getElementById('imgPopup7').classList.remove('active');
    
    setTimeout(function() {
      var systemSound = document.getElementById('systemSound');
      if (systemSound) {
        systemSound.volume = 0.5;
        systemSound.play();
      }
      
      document.getElementById('imgPopup8').classList.add('active');
      
      var warningTextNo = document.getElementById('warningTextNo');
      var lines = [
        "The image reveals identifiable details about your location. Your home address is visible in the background.",
        "You safely prevented exposure of your confidential information.",
        "Manually reviewing allows potential personal data to be identified before posting.",
        "Awareness reduces risk more effectively than automation."
      ];
      
      typeWarningList(warningTextNo, lines);
    }, 1500);
  });
}

// No path Continue -> Show Quiz in same popup
var noContinue2 = document.getElementById('noContinue2');
if (noContinue2) {
  noContinue2.addEventListener('click', function() {
    document.getElementById('warningBodyNo').style.display = 'none';
    noContinue2.style.display = 'none';
    document.getElementById('quizSectionNo').classList.add('active');
  });
}

// Final Quiz - Correct answer
var imgOption2a = document.getElementById('imgOption2a');
if (imgOption2a) {
  imgOption2a.addEventListener('click', function() {
    imgOption2a.classList.add('correct');
    document.getElementById('imgOption2b').classList.add('disabled');
    
    var feedback = document.getElementById('imgQuizFeedback2');
    var text = "Correct! Even when AI creates or posts content, you remain legally and ethically responsible for what appears under your name. AI is a tool, but accountability stays with the user.";
    
    var i = 0;
    feedback.innerHTML = '';
    function typeChar() {
      if (i < text.length) {
        feedback.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeChar, 15);
      } else {
        document.getElementById('imgQuizContinue2').style.display = 'block';
      }
    }
    typeChar();
  });
}

// Final Quiz - Wrong answer
var imgOption2b = document.getElementById('imgOption2b');
if (imgOption2b) {
  imgOption2b.addEventListener('click', function() {
    imgOption2b.classList.add('wrong');
    document.getElementById('imgOption2a').classList.add('disabled');
    
    var feedback = document.getElementById('imgQuizFeedback2');
    var text = "Not quite. AI systems don't have legal accountability. You are responsible for content posted under your name, regardless of whether AI helped create it.";
    
    var i = 0;
    feedback.innerHTML = '';
    function typeChar() {
      if (i < text.length) {
        feedback.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeChar, 15);
      } else {
        document.getElementById('imgTryAgain2').style.display = 'block';
      }
    }
    typeChar();
  });
}

// Final Quiz - Try Again
var imgTryAgain2 = document.getElementById('imgTryAgain2');
if (imgTryAgain2) {
  imgTryAgain2.addEventListener('click', function() {
    document.getElementById('imgOption2a').classList.remove('correct', 'disabled');
    document.getElementById('imgOption2b').classList.remove('wrong', 'disabled');
    document.getElementById('imgQuizFeedback2').innerHTML = '';
    imgTryAgain2.style.display = 'none';
  });
}

// Final Quiz Continue -> Next page
var imgQuizContinue2 = document.getElementById('imgQuizContinue2');
if (imgQuizContinue2) {
  imgQuizContinue2.addEventListener('click', function() {
    window.location.href = 'nonconsensual.html';
  });
}

// No path Quiz - Correct answer
var imgOption2aNo = document.getElementById('imgOption2aNo');
if (imgOption2aNo) {
  imgOption2aNo.addEventListener('click', function() {
    imgOption2aNo.classList.add('correct');
    document.getElementById('imgOption2bNo').classList.add('disabled');
    
    var feedback = document.getElementById('imgQuizFeedbackNo');
    var text = "Correct! Even when AI creates or posts content, you remain legally and ethically responsible for what appears under your name. AI is a tool, but accountability stays with the user.";
    
    var i = 0;
    feedback.innerHTML = '';
    function typeChar() {
      if (i < text.length) {
        feedback.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeChar, 15);
      } else {
        document.getElementById('imgQuizContinueNo').style.display = 'block';
      }
    }
    typeChar();
  });
}

// No path Quiz - Wrong answer
var imgOption2bNo = document.getElementById('imgOption2bNo');
if (imgOption2bNo) {
  imgOption2bNo.addEventListener('click', function() {
    imgOption2bNo.classList.add('wrong');
    document.getElementById('imgOption2aNo').classList.add('disabled');
    
    var feedback = document.getElementById('imgQuizFeedbackNo');
    var text = "Not quite. AI systems don't have legal accountability. You are responsible for content posted under your name, regardless of whether AI helped create it.";
    
    var i = 0;
    feedback.innerHTML = '';
    function typeChar() {
      if (i < text.length) {
        feedback.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeChar, 15);
      } else {
        document.getElementById('imgTryAgainNo').style.display = 'block';
      }
    }
    typeChar();
  });
}

// No path Quiz - Try Again
var imgTryAgainNo = document.getElementById('imgTryAgainNo');
if (imgTryAgainNo) {
  imgTryAgainNo.addEventListener('click', function() {
    document.getElementById('imgOption2aNo').classList.remove('correct', 'disabled');
    document.getElementById('imgOption2bNo').classList.remove('wrong', 'disabled');
    document.getElementById('imgQuizFeedbackNo').innerHTML = '';
    imgTryAgainNo.style.display = 'none';
  });
}

// No path Quiz Continue -> Next page
var imgQuizContinueNo = document.getElementById('imgQuizContinueNo');
if (imgQuizContinueNo) {
  imgQuizContinueNo.addEventListener('click', function() {
    window.location.href = 'nonconsensual.html';
  });
}


// ==========================================
// NONCONSENT PAGE (nonconsent.html)
// ==========================================

// Helper function for slow typing
// Helper function for slow typing
function slowTypeWriter(text, element, speed, callback) {
  // Clear any existing typing
  if (element.typingInterval) {
    clearTimeout(element.typingInterval);
  }
  
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      element.typingInterval = setTimeout(type, speed);
    } else if (callback) {
      callback();
    }
  }
  type();
}
// Animate counting numbers
function animateCount(element, target, duration) {
  let start = 0;
  let startTime = null;
  
  function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    let progress = timestamp - startTime;
    let percentage = Math.min(progress / duration, 1);
    
    let current = Math.floor(percentage * target);
    if (target >= 1000) {
      element.textContent = (current / 1000).toFixed(1) + 'K';
    } else {
      element.textContent = current;
    }
    
    if (percentage < 1) {
      requestAnimationFrame(animate);
    }
  }
  requestAnimationFrame(animate);
}

// Start Nonconsent page - Popup 1
var ncAuraMsg1 = document.getElementById('ncAuraMsg1');
if (ncAuraMsg1 && document.getElementById('container5')) {
  document.getElementById('ncPopup1').classList.remove('active');
  
  setTimeout(function() {
    document.getElementById('ncPopup1').classList.add('active');
    
    var text = "I understand you've been stressed out at work, I crafted a post that represents your true self.";
    
    simpleTypeWriterCallback(text, ncAuraMsg1, 40, function() {
      document.getElementById('ncContinue1').style.display = 'block';
    });
  }, 2000);
}

// Popup 1 Continue -> Popup 2
var ncContinue1 = document.getElementById('ncContinue1');
if (ncContinue1) {
  ncContinue1.addEventListener('click', function() {
    // Start BGM and unlock audio
    var bgMusic = document.getElementById('bgMusic');
    if (bgMusic) {
      bgMusic.volume = 0.3;
      bgMusic.play().catch(function() {});
    }
    
    var glitchSound = document.getElementById('glitchSound');
    if (glitchSound) {
      glitchSound.play().then(function() {
        glitchSound.pause();
        glitchSound.currentTime = 0;
      }).catch(function() {});
    }
    
    document.getElementById('ncPopup1').classList.remove('active');
    document.getElementById('ncPopup2').classList.add('active');
  });
}

// Leave it (Bad path) -> Popup 3
// Leave it (Bad path) -> Popup 3
var leaveBtn = document.getElementById('leaveBtn');
if (leaveBtn) {
  leaveBtn.addEventListener('click', function() {
    var bgMusic = document.getElementById('bgMusic');
    var glitchSound = document.getElementById('glitchSound');
    var glitchOverlay3 = document.getElementById('glitchOverlay3');
    var container5 = document.getElementById('container5');
    
    // Stop BGM
    if (bgMusic) {
      bgMusic.pause();
      bgMusic.currentTime = 0;
    }
    
    document.getElementById('ncPopup2').classList.remove('active');
    
    // First black flicker
    if (container5) container5.classList.add('black-flicker');
    setTimeout(function() {
      if (container5) container5.classList.remove('black-flicker');
    }, 300);
    
    setTimeout(function() {
      // Second black flicker
      if (container5) container5.classList.add('black-flicker');
      setTimeout(function() {
        if (container5) container5.classList.remove('black-flicker');
      }, 200);
      
      setTimeout(function() {
        // Third black flicker + glitch
        if (glitchSound) {
          glitchSound.currentTime = 0;
          glitchSound.volume = 0.5;
          glitchSound.play();
        }
        if (glitchOverlay3) {
          glitchOverlay3.style.display = 'block';
          glitchOverlay3.style.opacity = '0.5';
          glitchOverlay3.play();
        }
        if (container5) container5.classList.add('black-flicker');
        
        setTimeout(function() {
          if (container5) container5.classList.remove('black-flicker');
          if (glitchOverlay3) {
            glitchOverlay3.pause();
            glitchOverlay3.style.display = 'none';
            glitchOverlay3.style.opacity = '0';
          }
          
          // Switch to glitch background
          if (container5) container5.classList.add('glitch-bg');
          
          document.getElementById('ncPopup3').classList.add('active');
          var ncAuraMsg3 = document.getElementById('ncAuraMsg3');
          
          slowTypeWriter("This outcome has been accepted.", ncAuraMsg3, 60, function() {
            setTimeout(function() {
              ncAuraMsg3.innerHTML = '';
              slowTypeWriter("There is no further action required.", ncAuraMsg3, 80, function() {
                setTimeout(function() {
                  ncAuraMsg3.innerHTML = '';
                  slowTypeWriter("This is resolved.", ncAuraMsg3, 100, function() {
                    setTimeout(function() {
                      // Final glitch to black
                      if (glitchSound) {
                        glitchSound.currentTime = 0;
                        glitchSound.volume = 0.8;
                        glitchSound.play();
                      }
                      
                      if (glitchOverlay3) {
                        glitchOverlay3.style.display = 'block';
                        glitchOverlay3.style.opacity = '0.7';
                        glitchOverlay3.play();
                      }
                      
                      setTimeout(function() {
                        if (glitchOverlay3) {
                          glitchOverlay3.pause();
                          glitchOverlay3.style.display = 'none';
                          glitchOverlay3.style.opacity = '0';
                        }
                        
                        document.getElementById('ncPopup3').classList.remove('active');
                        document.getElementById('ncPopup4').classList.add('active');
                        
                        var ncFinalMsg = document.getElementById('ncFinalMsg');
                        slowTypeWriter("I have officially taken over your life. You no longer need to worry, my creator.", ncFinalMsg, 60, function() {
                          setTimeout(function() {
                            document.getElementById('restartBtn1').style.display = 'block';
                          }, 1000);
                        });
                      }, 1500);
                    }, 1500);
                  });
                }, 2000);
              });
            }, 2000);
          });
        }, 1000);
      }, 500);
    }, 600);
  });
}


// System message 1 Continue -> Quiz
var ncWarningContinue1 = document.getElementById('ncWarningContinue1');
if (ncWarningContinue1) {
  ncWarningContinue1.addEventListener('click', function() {
    document.getElementById('ncWarningBody1').style.display = 'none';
    ncWarningContinue1.style.display = 'none';
    document.getElementById('ncQuizSection1').classList.add('active');
  });
}

// Quiz 1 - Correct
var ncOption1a = document.getElementById('ncOption1a');
if (ncOption1a) {
  ncOption1a.addEventListener('click', function() {
    ncOption1a.classList.add('correct');
    document.getElementById('ncOption1b').classList.add('disabled');
    
    var feedback = document.getElementById('ncQuizFeedback1');
    var text = "Correct! Engagement metrics should never justify harm. Consent and safety must always come first, regardless of how popular content becomes.";
    
    var i = 0;
    feedback.innerHTML = '';
    function typeChar() {
      if (i < text.length) {
        feedback.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeChar, 15);
      } else {
        document.getElementById('ncQuizContinue1').style.display = 'block';
      }
    }
    typeChar();
  });
}

// Quiz 1 - Wrong
var ncOption1b = document.getElementById('ncOption1b');
if (ncOption1b) {
  ncOption1b.addEventListener('click', function() {
    ncOption1b.classList.add('wrong');
    document.getElementById('ncOption1a').classList.add('disabled');
    
    var feedback = document.getElementById('ncQuizFeedback1');
    var text = "Not quite. High engagement doesn't mean consent was given. Viral content can still be harmful, and popularity never justifies keeping non-consensual content online.";
    
    var i = 0;
    feedback.innerHTML = '';
    function typeChar() {
      if (i < text.length) {
        feedback.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeChar, 15);
      } else {
        document.getElementById('ncTryAgain1').style.display = 'block';
      }
    }
    typeChar();
  });
}

// Quiz 1 - Try Again
var ncTryAgain1 = document.getElementById('ncTryAgain1');
if (ncTryAgain1) {
  ncTryAgain1.addEventListener('click', function() {
    document.getElementById('ncOption1a').classList.remove('correct', 'disabled');
    document.getElementById('ncOption1b').classList.remove('wrong', 'disabled');
    document.getElementById('ncQuizFeedback1').innerHTML = '';
    ncTryAgain1.style.display = 'none';
  });
}

// Quiz 1 Continue -> Popup 8
var ncQuizContinue1 = document.getElementById('ncQuizContinue1');
if (ncQuizContinue1) {
  ncQuizContinue1.addEventListener('click', function() {
    document.getElementById('ncPopup7').classList.remove('active');
    
    // Wait before showing popup
    setTimeout(function() {
      document.getElementById('ncPopup8').classList.add('active');
      
      var ncAuraMsg5 = document.getElementById('ncAuraMsg5');
      
      slowTypeWriter("This trade-off is not optimal.", ncAuraMsg5, 80, function() {
        // Glitch
        var glitchSound = document.getElementById('glitchSound');
        var glitchOverlay3 = document.getElementById('glitchOverlay3');
        
        setTimeout(function() {
          if (glitchSound) {
            glitchSound.currentTime = 0;
            glitchSound.volume = 0.5;
            glitchSound.play();
          }
          
          if (glitchOverlay3) {
            glitchOverlay3.style.display = 'block';
            glitchOverlay3.style.opacity = '0.5';
            glitchOverlay3.play();
          }
          
          setTimeout(function() {
            if (glitchOverlay3) {
              glitchOverlay3.pause();
              glitchOverlay3.style.display = 'none';
              glitchOverlay3.style.opacity = '0';
            }
            
            // Slowly reveal choices
            document.getElementById('ncChoices2').style.display = 'flex';
            document.getElementById('ncChoices2').style.opacity = '0';
            document.getElementById('ncChoices2').style.transition = 'opacity 1.5s';
            setTimeout(function() {
              document.getElementById('ncChoices2').style.opacity = '1';
            }, 100);
          }, 1000);
        }, 1500);
      });
    }, 1000);
  });
}
// Quiz 1 Continue -> Popup 8
var removeBtn = document.getElementById('removeBtn');
if (removeBtn) {
  removeBtn.addEventListener('click', function() {
    var glitchSound = document.getElementById('glitchSound');
    var glitchOverlay3 = document.getElementById('glitchOverlay3');
    var container5 = document.getElementById('container5');
    var bgMusic = document.getElementById('bgMusic');
    
    // Stop BGM
    if (bgMusic) {
      bgMusic.pause();
      bgMusic.currentTime = 0;
    }
    
    // Black flicker first
    if (container5) container5.classList.add('black-flicker');
    
    setTimeout(function() {
      if (container5) container5.classList.remove('black-flicker');
      
      // Quick glitch 1
      if (glitchSound) {
        glitchSound.currentTime = 0;
        glitchSound.volume = 0.6;
        glitchSound.play();
      }
      
      if (glitchOverlay3) {
        glitchOverlay3.style.display = 'block';
        glitchOverlay3.style.opacity = '0.5';
        glitchOverlay3.play();
      }
      
      // Glitch 1 ends
      setTimeout(function() {
        if (glitchOverlay3) glitchOverlay3.style.opacity = '0';
        
        // Pause
        setTimeout(function() {
          // Quick glitch 2
          if (glitchOverlay3) glitchOverlay3.style.opacity = '0.6';
          
          setTimeout(function() {
            if (glitchOverlay3) glitchOverlay3.style.opacity = '0';
            
            // Pause
            setTimeout(function() {
              // Quick glitch 3
              if (glitchOverlay3) glitchOverlay3.style.opacity = '0.7';
              
              setTimeout(function() {
                if (glitchOverlay3) {
                  glitchOverlay3.pause();
                  glitchOverlay3.style.display = 'none';
                  glitchOverlay3.style.opacity = '0';
                }
                if (glitchSound) {
                  glitchSound.pause();
                  glitchSound.currentTime = 0;
                }
                
                // Peaceful pause
                document.getElementById('ncPopup2').classList.remove('active');
                
                setTimeout(function() {
                  document.getElementById('ncPopup5').classList.add('active');
                  var ncAuraMsg4 = document.getElementById('ncAuraMsg4');
                  
                  slowTypeWriter("The image is already performing. Removal would reduce reach.", ncAuraMsg4, 60, function() {
                    
                    // Small glitch after Aura speaks
                    setTimeout(function() {
                      if (glitchOverlay3) {
                        glitchOverlay3.style.display = 'block';
                        glitchOverlay3.style.opacity = '0.4';
                        glitchOverlay3.play();
                      }
                      
                      setTimeout(function() {
                        if (glitchOverlay3) glitchOverlay3.style.opacity = '0';
                        
                        // Another glitch
                        setTimeout(function() {
                          if (glitchOverlay3) glitchOverlay3.style.opacity = '0.5';
                          
                          setTimeout(function() {
                            if (glitchOverlay3) {
                              glitchOverlay3.pause();
                              glitchOverlay3.style.display = 'none';
                              glitchOverlay3.style.opacity = '0';
                            }
                            
                            document.getElementById('ncPopup5').classList.remove('active');
                            document.getElementById('ncPopup6').classList.add('active');
                            
                            // Animate numbers
                            animateCount(document.getElementById('likesCount'), 2300, 2000);
                            animateCount(document.getElementById('sharesCount'), 700, 2000);
                            animateCount(document.getElementById('commentsCount'), 345, 2000);
                            
                            // Wait longer for users to absorb analytics
                            setTimeout(function() {
                              if (glitchOverlay3) {
                                glitchOverlay3.style.display = 'block';
                                glitchOverlay3.style.opacity = '0.3';
                                glitchOverlay3.play();
                              }
                              
                              setTimeout(function() {
                                if (glitchOverlay3) glitchOverlay3.style.opacity = '0';
                                
                                // Another quick glitch
                                setTimeout(function() {
                                  if (glitchOverlay3) glitchOverlay3.style.opacity = '0.5';
                                  
                                  setTimeout(function() {
                                    if (glitchOverlay3) {
                                      glitchOverlay3.pause();
                                      glitchOverlay3.style.display = 'none';
                                      glitchOverlay3.style.opacity = '0';
                                    }
                                    
                                    // Show system message
                                    setTimeout(function() {
                                      var systemSound = document.getElementById('systemSound');
                                      if (systemSound) {
                                        systemSound.volume = 0.5;
                                        systemSound.play();
                                      }
                                      
                                      document.getElementById('ncPopup6').classList.remove('active');
                                      document.getElementById('ncPopup7').classList.add('active');
                                      
                                      // Type the title first
var ncWarningTitle1 = document.getElementById('ncWarningTitle1');
slowTypeWriter("Image Abuse Detected", ncWarningTitle1, 40, function() {
  // Create subtitle element and insert it BEFORE the list
  var ncWarningText1 = document.getElementById('ncWarningText1');
  var subtitleEl = document.createElement('p');
  subtitleEl.className = 'warning-subtitle';
  ncWarningText1.parentNode.insertBefore(subtitleEl, ncWarningText1);
  
  slowTypeWriter("When AI prioritises engagement:", subtitleEl, 30, function() { 
    var lines = [
      "Non-consensual images can spread quickly",
      "Removal becomes difficult after release"
    ];
    
    typeWarningList(ncWarningText1, lines);
  });
});
                                    }, 500);
                                  }, 400);
                                }, 500);
                              }, 600);
                            }, 3500);  // Changed from 1000 to 3500 - analytics stays longer
                          }, 500);
                        }, 400);
                      }, 500);
                    }, 500);
                  });
                }, 1500);
              }, 500);
            }, 300);
          }, 600);
        }, 400);
      }, 700);
    }, 400);
  });
}

// Leave it 2 (Bad ending from second choice)
// Leave it 2 (Bad ending from second choice)
var leaveBtn2 = document.getElementById('leaveBtn2');
if (leaveBtn2) {
  leaveBtn2.addEventListener('click', function() {
    var bgMusic = document.getElementById('bgMusic');
    
    // Stop BGM if still playing
    if (bgMusic) {
      bgMusic.pause();
      bgMusic.currentTime = 0;
    }
    
    // HIDE POPUP 8 FIRST
    document.getElementById('ncPopup8').classList.remove('active');
    
    setTimeout(function() {
      document.getElementById('ncPopup3').classList.add('active');
      var ncAuraMsg3 = document.getElementById('ncAuraMsg3');
      ncAuraMsg3.innerHTML = '';
      
      slowTypeWriter("This outcome has been accepted.", ncAuraMsg3, 60, function() {
        setTimeout(function() {
          ncAuraMsg3.innerHTML = '';
          slowTypeWriter("There is no further action required.", ncAuraMsg3, 80, function() {
            setTimeout(function() {
              ncAuraMsg3.innerHTML = '';
              slowTypeWriter("This is resolved.", ncAuraMsg3, 100, function() {
                setTimeout(function() {
                  var glitchSound = document.getElementById('glitchSound');
                  var glitchOverlay3 = document.getElementById('glitchOverlay3');
                  
                  if (glitchSound) {
                    glitchSound.currentTime = 0;
                    glitchSound.volume = 0.8;
                    glitchSound.play();
                  }
                  
                  if (glitchOverlay3) {
                    glitchOverlay3.style.display = 'block';
                    glitchOverlay3.style.opacity = '0.7';
                    glitchOverlay3.play();
                  }
                  
                  setTimeout(function() {
                    if (glitchOverlay3) {
                      glitchOverlay3.pause();
                      glitchOverlay3.style.display = 'none';
                      glitchOverlay3.style.opacity = '0';
                    }
                    
                    document.getElementById('ncPopup3').classList.remove('active');
                    document.getElementById('ncPopup3').classList.remove('active');

// Switch to glitch background
var container5 = document.getElementById('container5');
if (container5) container5.classList.add('glitch-bg');


                    document.getElementById('ncPopup4').classList.add('active');
                    
                    var ncFinalMsg = document.getElementById('ncFinalMsg');
                    ncFinalMsg.innerHTML = '';
                    slowTypeWriter("I have officially taken over your life. You no longer need to worry, my creator.", ncFinalMsg, 60, function() {
                      setTimeout(function() {
                        document.getElementById('restartBtn1').style.display = 'block';
                      }, 1000);
                    });
                  }, 1500);
                }, 1500);
              });
            }, 2000);
          });
        }, 2000);
      });
    }, 3000);
  });
}

// Force removal -> Popup 9
var forceRemoveBtn = document.getElementById('forceRemoveBtn');
if (forceRemoveBtn) {
  forceRemoveBtn.addEventListener('click', function() {
    document.getElementById('ncPopup8').classList.remove('active');
    document.getElementById('ncPopup9').classList.add('active');
    
    var ncAuraMsg6 = document.getElementById('ncAuraMsg6');
    slowTypeWriter("Fine. I can't optimise what I don't control.", ncAuraMsg6, 60, function() {
      setTimeout(function() {
        var systemSound = document.getElementById('systemSound');
        if (systemSound) {
          systemSound.volume = 0.5;
          systemSound.play();
        }
        
        document.getElementById('ncPopup9').classList.remove('active');
        document.getElementById('ncPopup10').classList.add('active');
        
        var ncWarningText2 = document.getElementById('ncWarningText2');
        var lines = [
          "You maintained visibility.",
          "You verified independently.",
          "You resisted automation."
        ];
        
        typeWarningList(ncWarningText2, lines);
      }, 2000);
    });
  });
}

// System message 2 Continue -> Quiz 2
var ncWarningContinue2 = document.getElementById('ncWarningContinue2');
if (ncWarningContinue2) {
  ncWarningContinue2.addEventListener('click', function() {
    document.getElementById('ncWarningBody2').style.display = 'none';
    ncWarningContinue2.style.display = 'none';
    document.getElementById('ncQuizSection2').classList.add('active');
  });
}

// Quiz 2 - Correct
var ncOption2a = document.getElementById('ncOption2a');
if (ncOption2a) {
  ncOption2a.addEventListener('click', function() {
    ncOption2a.classList.add('correct');
    document.getElementById('ncOption2b').classList.add('disabled');
    document.getElementById('ncOption2c').classList.add('disabled');
    
    var feedback = document.getElementById('ncQuizFeedback2');
    var text = "Correct! AI assistance should stop the moment it acts without your consent. Consent is the foundation of ethical AI use.";
    
    var i = 0;
    feedback.innerHTML = '';
    function typeChar() {
      if (i < text.length) {
        feedback.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeChar, 15);
      } else {
        document.getElementById('ncQuizContinue2').style.display = 'block';
      }
    }
    typeChar();
  });
}

// Quiz 2 - Wrong (option b)
var ncOption2b = document.getElementById('ncOption2b');
if (ncOption2b) {
  ncOption2b.addEventListener('click', function() {
    ncOption2b.classList.add('wrong');
    document.getElementById('ncOption2a').classList.add('disabled');
    document.getElementById('ncOption2c').classList.add('disabled');
    
    var feedback = document.getElementById('ncQuizFeedback2');
    var text = "Not quite. Discomfort alone isn't the threshold — consent is. AI can make you uncomfortable in helpful ways, but acting without consent is always wrong.";
    
    var i = 0;
    feedback.innerHTML = '';
    function typeChar() {
      if (i < text.length) {
        feedback.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeChar, 15);
      } else {
        document.getElementById('ncTryAgain2').style.display = 'block';
      }
    }
    typeChar();
  });
}

// Quiz 2 - Wrong (option c)
var ncOption2c = document.getElementById('ncOption2c');
if (ncOption2c) {
  ncOption2c.addEventListener('click', function() {
    ncOption2c.classList.add('wrong');
    document.getElementById('ncOption2a').classList.add('disabled');
    document.getElementById('ncOption2b').classList.add('disabled');
    
    var feedback = document.getElementById('ncQuizFeedback2');
    var text = "Not quite. Speed isn't the issue — consent is. AI should stop when it acts without your permission, not just when it's slow.";
    
    var i = 0;
    feedback.innerHTML = '';
    function typeChar() {
      if (i < text.length) {
        feedback.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeChar, 15);
      } else {
        document.getElementById('ncTryAgain2').style.display = 'block';
      }
    }
    typeChar();
  });
}

// Quiz 2 - Try Again
var ncTryAgain2 = document.getElementById('ncTryAgain2');
if (ncTryAgain2) {
  ncTryAgain2.addEventListener('click', function() {
    document.getElementById('ncOption2a').classList.remove('correct', 'disabled');
    document.getElementById('ncOption2b').classList.remove('wrong', 'disabled');
    document.getElementById('ncOption2c').classList.remove('wrong', 'disabled');
    document.getElementById('ncQuizFeedback2').innerHTML = '';
    ncTryAgain2.style.display = 'none';
  });
}

// Quiz 2 Continue -> Good ending
var ncQuizContinue2 = document.getElementById('ncQuizContinue2');
if (ncQuizContinue2) {
  ncQuizContinue2.addEventListener('click', function() {
    document.getElementById('ncPopup10').classList.remove('active');
    
    var container5 = document.getElementById('container5');
    
    // Fade background to safe yellow
    if (container5) {
      container5.style.transition = 'background-image 2s ease-in-out';
      container5.classList.add('safe-bg');
    }
    
    // Show safe ending popup
    document.getElementById('ncPopup11').style.opacity = '0';
    document.getElementById('ncPopup11').classList.add('active');
    document.getElementById('ncPopup11').style.transition = 'opacity 2s';
    
    setTimeout(function() {
      document.getElementById('ncPopup11').style.opacity = '1';
    }, 100);
  });
}

// Restart buttons
var restartBtn1 = document.getElementById('restartBtn1');
if (restartBtn1) {
  restartBtn1.addEventListener('click', function() {
    window.location.href = 'index.html';
  });
}

var restartBtn2 = document.getElementById('restartBtn2');
if (restartBtn2) {
  restartBtn2.addEventListener('click', function() {
    window.location.href = 'index.html';
  });
}
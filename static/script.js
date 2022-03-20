function add() {
    var copyamount = document.getElementById("QContainer").childNodes.length;
    // console.log(copyamount);
    var node = document.getElementById("Qtemplate");
    idvar = (copyamount-2);

    // Question container
    var Qdiv = document.createElement("div");
    Qdiv.className = "Q";
    Qdiv.id = "Q"+idvar;
    
    // Timestamp
    var Timestampdiv = document.createElement("div");
    Timestampdiv.className = "Timestamp";
    var Timestampinput = document.createElement("input");
    Timestampinput.type = "datetime";
    Timestampinput.value = "HH:MM:SS";
    Timestampinput.name = "Timestamp"+idvar;

    // Correct answers radio button
    var Radiodiv = document.createElement("div");
    Radiodiv.className = "CorrectAnswersAmount";

    Radiodivlabel = document.createElement("label");
    Radiodivlabel = "Number of correct answers:";
    Radioamountdiv = document.createElement("div");
    Radioamountdiv.className = "CorrectAnswersAmountRadio";

    var Radio1 = document.createElement("input");
    Radio1.type = "radio";
    Radio1.name = "Radio"+idvar;
    Radio1.value = "1";
    var Radio1label = document.createElement("label")
    var Radio1label = "1";

    var Radio2 = document.createElement("input");
    Radio2.type = "radio";
    Radio2.name = "Radio"+idvar;
    Radio2.value = "2";
    var Radio2label = document.createElement("label")
    var Radio2label = "2";

    var Radio3 = document.createElement("input");
    Radio3.type = "radio";
    Radio3.name = "Radio"+idvar;
    Radio3.value = "3";
    var Radio3label = document.createElement("label")
    var Radio3label = "3";

    var Radio4 = document.createElement("input");
    Radio4.type = "radio";
    Radio4.name = "Radio"+idvar;
    Radio4.value = "4";
    var Radio4label = document.createElement("label")
    var Radio4label = "4";

    // Question
    Questiondiv = document.createElement("div");
    Questiondiv.className = "Question";
    var Questionlabel = document.createElement("label");
    var Questionlabel = "Question:";
    Questionfield = document.createElement("input");
    Questionfield.type = "text";
    Questionfield.name = "Question"+idvar;

    // Answers
    Answersdiv = document.createElement("div");
    Answersdiv.className = "Answers";
    Answer1div = document.createElement("div");
    Answer1div.className = "Answer1"
    var Answer1label = document.createElement("label");
    var Answer1label = "Answer 1:";
    Answer1field = document.createElement("input");
    Answer1field.type = "text";
    Answer1field.name = "Answer1."+idvar;

    Answer2div = document.createElement("div");
    Answer2div.className = "Answer2"
    var Answer2label = document.createElement("label");
    var Answer2label = "Answer 2:";
    Answer2field = document.createElement("input");
    Answer2field.type = "text";
    Answer2field.name = "Answer2."+idvar;

    Answer3div = document.createElement("div");
    Answer3div.className = "Answer3"
    var Answer3label = document.createElement("label");
    var Answer3label = "Answer 3:";
    Answer3field = document.createElement("input");
    Answer3field.type = "text";
    Answer3field.name = "Answer3."+idvar;

    Answer4div = document.createElement("div");
    Answer4div.className = "Answer4"
    var Answer4label = document.createElement("label");
    var Answer4label = "Answer 4:";
    Answer4field = document.createElement("input");
    Answer4field.type = "text";
    Answer4field.name = "Answer4."+idvar;

    // Correct answer(s)
    Correctanswersdiv = document.createElement("div");
    Correctanswersdiv.className = "CorrectAnswers"
    Correctanswerslabel = document.createElement("label");
    Correctanswerslabel = "Correct answer(s):"
    Correctcheckboxdiv = document.createElement("div");
    Correctcheckboxdiv.className = "CorrectCheckbox";
    breaknode1 = document.createElement("br");
    breaknode2 = document.createElement("br");
    breaknode3 = document.createElement("br");

    Correctanswer1checkbox = document.createElement("input");
    Correctanswer1checkbox.type = "checkbox";
    Correctanswer1checkbox.value = "1";
    Correctanswer1checkbox.name = "Correctanswer1."+idvar;
    Correctanswer1label = document.createElement("label");
    Correctanswer1label = "Answer 1"
    
    Correctanswer2checkbox = document.createElement("input");
    Correctanswer2checkbox.type = "checkbox";
    Correctanswer2checkbox.value = "2";
    Correctanswer2checkbox.name = "Correctanswer2."+idvar;
    Correctanswer2label = document.createElement("label");
    Correctanswer2label = "Answer 2"

    Correctanswer3checkbox = document.createElement("input");
    Correctanswer3checkbox.type = "checkbox";
    Correctanswer3checkbox.value = "3";
    Correctanswer3checkbox.name = "Correctanswer3."+idvar;
    Correctanswer3label = document.createElement("label");
    Correctanswer3label = "Answer 3"

    Correctanswer4checkbox = document.createElement("input");
    Correctanswer4checkbox.type = "checkbox";
    Correctanswer4checkbox.value = "4";
    Correctanswer4checkbox.name = "Correctanswer4."+idvar;
    Correctanswer4label = document.createElement("label");
    Correctanswer4label = "Answer 4";


    // Appending
    var parentdiv = document.getElementById("QContainer");

    // Append Qdiv into container
    parentdiv.append(Qdiv);
    Qdiv.append(document.createTextNode("Question "+idvar))

    // Append timestamp into question
    Qdiv.append(Timestampdiv);
    Timestampdiv.append(Timestampinput);

    // Append radio buttons
    Qdiv.append(Radiodiv);
    Radiodiv.append(Radiodivlabel);
    Radiodiv.append(Radioamountdiv);
    Radioamountdiv.append(Radio1);
    Radioamountdiv.append(Radio1label);
    Radioamountdiv.append(Radio2);
    Radioamountdiv.append(Radio2label);
    Radioamountdiv.append(Radio3);
    Radioamountdiv.append(Radio3label);
    Radioamountdiv.append(Radio4);
    Radioamountdiv.append(Radio4label);

    // Append question label + field
    Qdiv.append(Questiondiv);
    Questiondiv.append(Questionlabel);
    Questiondiv.append(Questionfield);

    // Append answerdivs + answers + fields
    Qdiv.append(Answersdiv);
    Answersdiv.append(Answer1div)
    Answersdiv.append(Answer2div)
    Answersdiv.append(Answer3div)
    Answersdiv.append(Answer4div)
    
    Answer1div.append(Answer1label);
    Answer1div.append(Answer1field);
    Answer2div.append(Answer2label);
    Answer2div.append(Answer2field);
    Answer3div.append(Answer3label);
    Answer3div.append(Answer3field);
    Answer4div.append(Answer4label);
    Answer4div.append(Answer4field);

    // Append correct answers
    Qdiv.append(Correctanswersdiv);
    Correctanswersdiv.append(Correctanswerslabel);
    Correctanswersdiv.append(Correctcheckboxdiv);
    
    Correctcheckboxdiv.append(Correctanswer1checkbox);
    Correctcheckboxdiv.append(Correctanswer1label);
    Correctcheckboxdiv.append(breaknode1);

    Correctcheckboxdiv.append(Correctanswer2checkbox);
    Correctcheckboxdiv.append(Correctanswer2label);
    Correctcheckboxdiv.append(breaknode2);

    Correctcheckboxdiv.append(Correctanswer3checkbox);
    Correctcheckboxdiv.append(Correctanswer3label);
    Correctcheckboxdiv.append(breaknode3);

    Correctcheckboxdiv.append(Correctanswer4checkbox);
    Correctcheckboxdiv.append(Correctanswer4label);
    
    //total amount of questions
    document.getElementById("totalquestions").value = idvar;
    
    
    // // set IDs for next question
    // document.getElementById("Catemplate").id = "Ca"+idvar;
    // document.getElementById("Ca"+idvar).name = "radio"+idvar;
    // document.getElementById("Cbtemplate").id = "Cb"+idvar;
    // document.getElementById("Cb"+idvar).name = "radio"+idvar;
    // document.getElementById("Cctemplate").id = "Cc"+idvar;
    // document.getElementById("Cc"+idvar).name = "radio"+idvar;
    // document.getElementById("Cdtemplate").id = "Cd"+idvar;
    // document.getElementById("Cd"+idvar).name = "radio"+idvar;



    // var clone = node.cloneNode(true);
    // clone.id = "Q"+idvar;



    // document.getElementById("QContainer").appendChild(clone);



    // document.getElementById("Ca"+idvar).id = "Catemplate";
    // document.getElementById("Catemplate"+idvar).name = "radio";
    // document.getElementById("Cbtemplate").id = "Cb"+idvar;
    // document.getElementById("Cb"+idvar).name = "radio"+idvar;
    // document.getElementById("Cctemplate").id = "Cc"+idvar;
    // document.getElementById("Cc"+idvar).name = "radio"+idvar;
    // document.getElementById("Cdtemplate").id = "Cd"+idvar;
    // document.getElementById("Cd"+idvar).name = "radio"+idvar;


    
    // clone.childNodes[1].id = "Q"+idvar;
    // clone.childNodes[3].inner = "test";
    // console.log(document.getElementById("Q1").childNodes);
    // console.log(clone.childNodes[2].childNodes[3]);
    // document.getElementById("A").id = "A"+idvar;
    // document.getElementById("A"+idvar).value = idvar;

    // TODO:
    // question number id
    // timestamp id
    // question id
    // answer 1,2,3,4 id
    // correct answers id
    // 
    // //
    // document.getElementById("Ca").id = "Ca"+idvar;
    // document.getElementById("Ca"+idvar).name = "radio"+idvar;
    // document.getElementById("Cb").id = "Cb"+idvar;
    // document.getElementById("Cb"+idvar).name = "radio"+idvar;
    // document.getElementById("Cc").id = "Cc"+idvar;
    // document.getElementById("Cc"+idvar).name = "radio"+idvar;
    // document.getElementById("Cd").id = "Cd"+idvar;
    // document.getElementById("Cd"+idvar).name = "radio"+idvar;




    


}

function remove() {
    var select = document.getElementById('QContainer');
    select.removeChild(select.lastChild);
  }
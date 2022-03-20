import os
import time
from flask import Flask, flash, jsonify, render_template, request,redirect, send_from_directory, url_for
import webbrowser

myp = os.getcwd()+os.sep

app = Flask(__name__)

@app.route("/",methods=['GET','POST'])
def form():
    if request.method == 'POST':
        print("POST") 
        container = []
        count = request.form.get("total")
        
        
        with open(myp+"results.txt", "w") as f:
            f.write("QuestionNumber;Timestamp;CorrectAnswersAmount;Question;Answer1;Answer2;Answer3;Answer4;CorrectAnswer(s);\n")
        for i in range(1,int(count)+1):
            
            container.append(str(request.form.get("Timestamp"+str(i))))
            container.append(request.form.get("Radio"+str(i)))
            container.append(request.form.get("Question"+str(i)))
            container.append(request.form.get("Answer"+str(i)+"."+str(i)))
            container.append(request.form.get("Answer"+str(i+1)+"."+str(i)))
            container.append(request.form.get("Answer"+str(i+2)+"."+str(i)))
            container.append(request.form.get("Answer"+str(i+3)+"."+str(i)))
            container.append(request.form.get("Correctanswer1."+str(i)))
            container.append(request.form.get("Correctanswer2."+str(i)))
            container.append(request.form.get("Correctanswer3."+str(i)))
            container.append(request.form.get("Correctanswer4."+str(i)))
            print(container)
            with open(myp+"results.txt", "a") as f:
                f.write(str(i)+";")
                for oo in container:
                    if (oo == None):
                        f.write("0;")
                    elif (oo == ""):
                        f.write("0;")
                    else:
                        f.write("%s;" % (oo))
                container = []
                f.write("\n")

        
        

        return send_from_directory(myp,filename="results.txt", as_attachment=True)    
        # return redirect('result') # Redirect to result pages for pdf download

    elif request.method == 'GET':
                
                print("get")

    return render_template('homepage.html')

# @app.route("/download",methods=['GET','POST'])
# def downloadpage():



if __name__ == "__main__":
    app.run(debug=False)
function getFormvalue() {
            const fname = document.forms["form1"]["fname"].value;
            const lname = document.forms["form1"]["lname"].value;
            alert(fname + " " + lname);
        }
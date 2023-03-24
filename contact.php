<?php
if($_POST["submit"]) {
    $recipient="zeyad2803@gmail.com"; //Enter your mail address
    $subject="Contact from Website"; //Subject 
    $sender=$_POST["name"];
    $senderEmail=$_POST["email"];
    $message=$_POST["subject"];
    $mailBody="Name: $sender\nEmail Address: $senderEmail\n\nMessage: $message";
    mail($recipient, $subject, $mailBody);
    sleep(1);
    header("Location:https://raspberrybits.github.io/submit.html"); // Set here redirect page or destination page
}
?>
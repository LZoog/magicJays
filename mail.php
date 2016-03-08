<?php
if(isset($_POST['submit'])){
    $to = "magicjays@sbcglobal.net";
    $contact = $_POST['email'];
    $name = $_POST['name'];
    $message = $_POST['message'];
    $subject = "MagicJays Site Form Submission";

    $message2 = $name . " wrote the following: " . $message;
    $contact2 = "\n\n Contact this person at: " . $contact;

    mail($to,$subject,$message2,$contact2);
      echo "<script type=\"text/javascript\">
      alert('Thank you! Your e-mail was sent and you will be contacted shortly.');
	    window.location = 'http://www.magicjays.com';
      </script>";
    }
?>

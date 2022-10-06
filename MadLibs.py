from re import X
from urllib import request
import cgi

inp = [""]

form = cgi.FieldStorage()
searchterm =  form.getvalue('adj1')
 
		


def inputform():
    print("A vacation is when you take a trip to some " + inp[0] + " place with your " + inp[1] + " family. Usually you go to some place that is near a/an " + inp[2] + " or up on a/an " + inp[3] + " A good vacation place is one where you can ride " + inp[4] + " or play " + inp[5] +" or go hunting for" + inp[6] + ". I like to spend my time" + inp[7] + " or " + inp[8] + " When parents go on a vacation, they spend their time eating three " + inp[9] + " a day, and fathers play golf, and mothers sit around " + inp[10] + ". Last summer, my little brother fell in a/an " + inp[11] + "and got poison" + inp[12] + "all over his" + inp[13] + " My family is going to go to (the) " + inp[14] + ", and I will practice " + inp[15] + ". Parents need vacations more than kids because parents are always very " + inp[16] + "and because they have to work " + inp[17] + "hours every day all year making enough " + inp[18] + "to pay for the vacation.")


inputform()
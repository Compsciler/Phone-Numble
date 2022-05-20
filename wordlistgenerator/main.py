import random
from collections import Counter
from jsonfilelist import json_file_to_list, list_to_json_file

random.seed(0)
random.seed(random.randrange(10**5))

new_word_list_file = 'constants/wordlist.json'

def get_phone_number_list(phone_number_count):
    new_number_list = random.sample(range(10**10), phone_number_count)
    new_word_list = [f"{n:010d}" for n in new_number_list]
    # new_word_list = [format_phone_number(n) for n in new_number_list]
    return new_word_list

"""
def format_phone_number(phone_number):
    phone_number = f"{phone_number:010d}"
    if len(phone_number) != 10:
        raise ValueError("Must input a 10 digit phone number")
    formatted_phone_number = phone_number[0:3] + '-' + phone_number[3:6] + '-' + phone_number[6:10]
    return formatted_phone_number
"""

new_word_list = get_phone_number_list(10**4)
# random.shuffle(new_word_list)
list_to_json_file(new_word_list, new_word_list_file)

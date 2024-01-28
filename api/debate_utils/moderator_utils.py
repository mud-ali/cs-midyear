from profanity_check import predict_prob

def check_profanity(message):
    isProf = False
    message_array = []
    message_array.append(message)
    if predict_prob(message_array)[0] > 0.7:
        return not isProf, "Please Refrain from using inappropriate language!"
    return isProf, ""




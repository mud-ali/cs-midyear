import sqlite3
import random

def match_debaters(db, user_id, topic_id):
    db_cursor = db.cursor()
    # depends if user wants to select topic they wish to debate about
    db_cursor.execute(
        '''SELECT topic_id, opinion1, opinion2, opinion3  FROM opinion WHERE user_id = ? and topic_id = ?''', 
        (user_id, topic_id)
    )
    topics_and_opinions_for_this_user = db_cursor.fetchall()
    if len(topics_and_opinions_for_this_user == 0):
        return "User Has No Opinions!"
    r = random.randint(0, len(topics_and_opinions_for_this_user))
    chosen = topics_and_opinions_for_this_user[r]
    topic_id, opinion1, opinion2, opinion3 = chosen

    db_cursor.execute (
            '''SELECT user_id topic_id, opinion1, opinion2, opinion3  FROM opinion WHERE user_id != ? and topic_id = ?''', 
            (user_id, topic_id)
    )
    
    topics_and_opinions_for_possible_competitor = db_cursor.fetchall()
    competitor_found = False
    if len(topics_and_opinions_for_possible_competitor) == 0:
        db.commit()
        return "Competitor not found for this topic", "", "", "", competitor_found
    num_of_checks = 0
    while (not competitor_found and num_of_checks <= len(topics_and_opinions_for_possible_competitor)):
        num_of_checks+=1
        r2 = random.randint(0, len(topics_and_opinions_for_possible_competitor))
        chosen_competitor = topics_and_opinions_for_possible_competitor[r2]
        user_competitor, topic_id_comp, opinion1_comp, opinion2_comp, opinion3_comp = chosen_competitor

        # for now, let's implement a more simple similarity algorithm, we can do something more complicated if we have time
        similar_check1 = opinion1 != opinion1_comp and opinion2 != opinion2_comp
        similar_check2 = opinion2 != opinion2_comp and opinion3 != opinion3_comp
        similar_check3 = opinion1 != opinion1_comp and opinion3 != opinion3_comp
        if (similar_check1 or similar_check2 or similar_check3):
            competitor_found = True
            db.commit()
            return "Competitor Found!", topic_id, user_id, user_competitor, competitor_found
    db.commit()
    return "Competitor not found for this topic", "", "", "", competitor_found
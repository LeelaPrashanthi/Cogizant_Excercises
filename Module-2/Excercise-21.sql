SELECT u.full_name, COUNT(*) AS total_feedbacks
FROM Feedback f
JOIN Users u ON f.user_id = u.user_id
GROUP BY u.user_id
ORDER BY total_feedbacks DESC
LIMIT 5;

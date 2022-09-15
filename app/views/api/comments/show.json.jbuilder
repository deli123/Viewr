json.comment do 
    json.extract! @comment, :id, :body, :author_id, :photo_id, :updated_at
    json.extract! @comment.author, :fname, :lname
end
json.comment do 
    json.extract! @comment, :id, :body, :author_id, :photo_id
end
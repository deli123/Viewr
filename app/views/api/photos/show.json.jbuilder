json.photo do 
    json.extract! @photo, :id, :title, :description, :user_id, :album_id
    json.photo_url @photo.photo.url if @photo.photo.attached?
end

json.user do 
    json.extract! @photo.user, :id, :fname, :lname
end

json.comments do
    @photo.comments.each do |comment|
        json.set! comment.id do 
            json.extract! comment, :id, :body, :author_id, :photo_id
            json.extract! comment.author, :fname, :lname
        end
    end
end
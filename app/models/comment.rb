# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  author_id  :bigint           not null
#  photo_id   :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Comment < ApplicationRecord
    validates :body, :author_id, :photo_id, presence: true

    belongs_to :photo

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User
end

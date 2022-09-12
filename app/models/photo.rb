# == Schema Information
#
# Table name: photos
#
#  id          :bigint           not null, primary key
#  title       :string
#  description :string
#  user_id     :bigint           not null
#  album_id    :bigint
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Photo < ApplicationRecord
  validates :user_id, presence: true
  validates :id, uniqueness: { scope: :album_id }

  has_one_attached :photo

  belongs_to :user

  has_many :comments,
    dependent: :destroy

  has_many :likes,
    dependent: :destroy

  has_many :tags,
    dependent: :destroy
end

# frozen_string_literal: true

class ReviewController < ApplicationController

  def create
    @review = Review.create create_params
  end

  private

  def create_params
    params
      .permit(
        :guide_id,
        :score,
        :comment
      )
  end
end

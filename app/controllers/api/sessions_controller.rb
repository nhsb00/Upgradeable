# class Api::SessionsController < ApplicationController
#     def create
#         @user = User.find_by_credentials(
#             params[:user][:username],
#             params[:user][:password]
#         )
#         if @user
#             login(@user)
#             render "api/user"
#         else
#             render json: ['invalid credentials'], status: 422
#         end
#     end

#     def destroy
#         @user = current_user
#         if @user
#             logout
#             render "api/user"
#         else
#             render json: ['require login user'], status: 422
#     end
# end
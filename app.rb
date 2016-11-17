#encoding: utf-8
require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

set :database, { adapter: "sqlite3", database: "pizzashop.db" }

class Product < ActiveRecord::Base

end

get '/' do
  @products = Product.all
	erb :index
end

get '/about' do
  erb :about
end

post '/cart' do
  orders_input = params[:orders]
  @orders = parse_orders_input orders_input
  erb "Hello #{ @orders.inspect }"
end


def parse_orders_input(orders_line)
  lines = []
  items = orders_line.split(',')

  items.each do |item|
    product = item.split('=')
    id = product[0].split('_')[1]
    cnt = product[1]

    lines.push([id, cnt])
  end

  return lines
end
class TestsController < ApplicationController
    def index
        tests = Test.all
        render json: tests
    end

    def show
        testy = Test.find_by(id: params[:id])
        render json: testy
    end

    def create
        testy = Test.create(test_params)
        
        if testy.valid?
            ActionCable.server.broadcast 'testrooms_channel', testy
            head :ok
        else
            render json: { error: 'Could not create the test'}, status: 422
        end
    end

    private

    def test_params
        params.permit(:name)
    end
end

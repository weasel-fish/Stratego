class TestgamesController < ApplicationController
    def index
        testgames = Testgame.all
        render json: testgames
    end

    def create
        testgame = Testgame.create(testgame_params)
    end

    private

    def testgame_params
        params.require(:testgame).permit(:row_one => [])
    end
end

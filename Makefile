
build:
	yarn run antlr4ts	

dep:
	yarn install
	wget https://github.com/suyanlong/ralph-antlr4/raw/main/RalphLexer.g4
	wget https://github.com/suyanlong/ralph-antlr4/raw/main/RalphParser.g4

clean:
	rm -rf *.g4* *.interp *.tokens
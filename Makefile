
build:
	yarn run antlr4ts 
	yarn run build

fmt:
	yarn run fmt	

dep:
	yarn install
	mkdir -p src
	wget https://github.com/suyanlong/ralph-antlr4/raw/main/RalphLexer.g4  -O src/RalphLexer.g4
	wget https://github.com/suyanlong/ralph-antlr4/raw/main/RalphParser.g4 -O src/RalphParser.g4

clean:
	rm -rf *.g4* *.interp *.tokens dist lib
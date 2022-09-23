// Generated from ./src/RalphParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { RalphParserListener } from "./RalphParserListener";
import { RalphParserVisitor } from "./RalphParserVisitor";


export class RalphParser extends Parser {
	public static readonly IMPORT = 1;
	public static readonly PACKAGE = 2;
	public static readonly FN = 3;
	public static readonly PUB = 4;
	public static readonly PAYABLE = 5;
	public static readonly RETURN = 6;
	public static readonly INTERFACE = 7;
	public static readonly STRUCT = 8;
	public static readonly ENUM = 9;
	public static readonly TXSCRIPT = 10;
	public static readonly TXCONTRACT = 11;
	public static readonly CONTRACT = 12;
	public static readonly ASSETSCRIPT = 13;
	public static readonly IF = 14;
	public static readonly ELSE = 15;
	public static readonly WHILE = 16;
	public static readonly TRUE = 17;
	public static readonly FALSE = 18;
	public static readonly ALPH = 19;
	public static readonly LET = 20;
	public static readonly CONST = 21;
	public static readonly MUT = 22;
	public static readonly EXTENDS = 23;
	public static readonly ABSTRACT = 24;
	public static readonly IMPLEMENTS = 25;
	public static readonly EVENT = 26;
	public static readonly EVMIT = 27;
	public static readonly USING = 28;
	public static readonly AT = 29;
	public static readonly BOOL = 30;
	public static readonly I256 = 31;
	public static readonly U256 = 32;
	public static readonly BYTE = 33;
	public static readonly BYTEVEC = 34;
	public static readonly ADDRESS = 35;
	public static readonly R_ARROW = 36;
	public static readonly IDENTIFIER = 37;
	public static readonly L_PAREN = 38;
	public static readonly R_PAREN = 39;
	public static readonly L_CURLY = 40;
	public static readonly R_CURLY = 41;
	public static readonly L_BRACKET = 42;
	public static readonly R_BRACKET = 43;
	public static readonly ASSIGN = 44;
	public static readonly COMMA = 45;
	public static readonly SEMI = 46;
	public static readonly COLON = 47;
	public static readonly DOT = 48;
	public static readonly POUND = 49;
	public static readonly DOUBT = 50;
	public static readonly CONCAT = 51;
	public static readonly ADD = 52;
	public static readonly SUB = 53;
	public static readonly MUL = 54;
	public static readonly DIV = 55;
	public static readonly MOD = 56;
	public static readonly MODADD = 57;
	public static readonly MODSUB = 58;
	public static readonly MODMUL = 59;
	public static readonly SHL = 60;
	public static readonly SHR = 61;
	public static readonly BITAND = 62;
	public static readonly XOR = 63;
	public static readonly BITOR = 64;
	public static readonly EQ = 65;
	public static readonly NQ = 66;
	public static readonly LT = 67;
	public static readonly LE = 68;
	public static readonly GT = 69;
	public static readonly GE = 70;
	public static readonly AND = 71;
	public static readonly OR = 72;
	public static readonly NOT = 73;
	public static readonly DECIMAL_LIT = 74;
	public static readonly BINARY_LIT = 75;
	public static readonly OCTAL_LIT = 76;
	public static readonly HEX_LIT = 77;
	public static readonly ADDRESS_LIT = 78;
	public static readonly ALPH_LIT = 79;
	public static readonly BOOL_LIT = 80;
	public static readonly FLOAT_LIT = 81;
	public static readonly DECIMAL_FLOAT_LIT = 82;
	public static readonly HEX_FLOAT_LIT = 83;
	public static readonly IMAGINARY_LIT = 84;
	public static readonly RUNE_LIT = 85;
	public static readonly BYTE_VALUE = 86;
	public static readonly OCTAL_BYTE_VALUE = 87;
	public static readonly HEX_BYTE_VALUE = 88;
	public static readonly LITTLE_U_VALUE = 89;
	public static readonly BIG_U_VALUE = 90;
	public static readonly RAW_STRING_LIT = 91;
	public static readonly INTERPRETED_STRING_LIT = 92;
	public static readonly WS = 93;
	public static readonly COMMENT = 94;
	public static readonly LINE_COMMENT = 95;
	public static readonly EOS = 96;
	public static readonly RULE_sourceFile = 0;
	public static readonly RULE_importDecl = 1;
	public static readonly RULE_declaration = 2;
	public static readonly RULE_identifierList = 3;
	public static readonly RULE_varDecl = 4;
	public static readonly RULE_expression = 5;
	public static readonly RULE_expressionList = 6;
	public static readonly RULE_methodCall = 7;
	public static readonly RULE_primaryExpr = 8;
	public static readonly RULE_primitiveType = 9;
	public static readonly RULE_arrayType = 10;
	public static readonly RULE_arrayExpr = 11;
	public static readonly RULE_type_ = 12;
	public static readonly RULE_typeDeclStmt = 13;
	public static readonly RULE_result = 14;
	public static readonly RULE_param = 15;
	public static readonly RULE_paramList = 16;
	public static readonly RULE_methodDecl = 17;
	public static readonly RULE_basicLit = 18;
	public static readonly RULE_integer = 19;
	public static readonly RULE_string_ = 20;
	public static readonly RULE_typeStruct = 21;
	public static readonly RULE_typeStructBody = 22;
	public static readonly RULE_txScript = 23;
	public static readonly RULE_contract = 24;
	public static readonly RULE_interface = 25;
	public static readonly RULE_eventEmit = 26;
	public static readonly RULE_annotation = 27;
	public static readonly RULE_block = 28;
	public static readonly RULE_statement = 29;
	public static readonly RULE_simpleStmt = 30;
	public static readonly RULE_expressionStmt = 31;
	public static readonly RULE_emptyStmt = 32;
	public static readonly RULE_returnStmt = 33;
	public static readonly RULE_ifStmt = 34;
	public static readonly RULE_whileStmt = 35;
	public static readonly RULE_eos = 36;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sourceFile", "importDecl", "declaration", "identifierList", "varDecl", 
		"expression", "expressionList", "methodCall", "primaryExpr", "primitiveType", 
		"arrayType", "arrayExpr", "type_", "typeDeclStmt", "result", "param", 
		"paramList", "methodDecl", "basicLit", "integer", "string_", "typeStruct", 
		"typeStructBody", "txScript", "contract", "interface", "eventEmit", "annotation", 
		"block", "statement", "simpleStmt", "expressionStmt", "emptyStmt", "returnStmt", 
		"ifStmt", "whileStmt", "eos",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'import'", "'package'", "'fn'", "'pub'", "'payable'", "'return'", 
		"'Interface'", "'struct'", "'enum'", "'TxScript'", "'TxContract'", "'Contract'", 
		"'AssetScript'", "'if'", "'else'", "'while'", "'true'", "'false'", "'alph'", 
		"'let'", "'const'", "'mut'", "'extends'", "'Abstract'", "'implements'", 
		"'event'", "'emit'", "'using'", "'@'", "'Bool'", "'I256'", "'U256'", "'Byte'", 
		"'ByteVec'", "'Address'", "'->'", undefined, "'('", "')'", "'{'", "'}'", 
		"'['", "']'", "'='", "','", "';'", "':'", "'.'", "'#'", "'?'", "'++'", 
		"'+'", "'-'", "'*'", "'/'", "'%'", undefined, undefined, undefined, "'<<'", 
		"'>>'", "'&'", "'^'", "'|'", "'=='", "'!='", "'<'", "'<='", "'>'", "'>='", 
		"'&&'", "'||'", "'!'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "IMPORT", "PACKAGE", "FN", "PUB", "PAYABLE", "RETURN", "INTERFACE", 
		"STRUCT", "ENUM", "TXSCRIPT", "TXCONTRACT", "CONTRACT", "ASSETSCRIPT", 
		"IF", "ELSE", "WHILE", "TRUE", "FALSE", "ALPH", "LET", "CONST", "MUT", 
		"EXTENDS", "ABSTRACT", "IMPLEMENTS", "EVENT", "EVMIT", "USING", "AT", 
		"BOOL", "I256", "U256", "BYTE", "BYTEVEC", "ADDRESS", "R_ARROW", "IDENTIFIER", 
		"L_PAREN", "R_PAREN", "L_CURLY", "R_CURLY", "L_BRACKET", "R_BRACKET", 
		"ASSIGN", "COMMA", "SEMI", "COLON", "DOT", "POUND", "DOUBT", "CONCAT", 
		"ADD", "SUB", "MUL", "DIV", "MOD", "MODADD", "MODSUB", "MODMUL", "SHL", 
		"SHR", "BITAND", "XOR", "BITOR", "EQ", "NQ", "LT", "LE", "GT", "GE", "AND", 
		"OR", "NOT", "DECIMAL_LIT", "BINARY_LIT", "OCTAL_LIT", "HEX_LIT", "ADDRESS_LIT", 
		"ALPH_LIT", "BOOL_LIT", "FLOAT_LIT", "DECIMAL_FLOAT_LIT", "HEX_FLOAT_LIT", 
		"IMAGINARY_LIT", "RUNE_LIT", "BYTE_VALUE", "OCTAL_BYTE_VALUE", "HEX_BYTE_VALUE", 
		"LITTLE_U_VALUE", "BIG_U_VALUE", "RAW_STRING_LIT", "INTERPRETED_STRING_LIT", 
		"WS", "COMMENT", "LINE_COMMENT", "EOS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(RalphParser._LITERAL_NAMES, RalphParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return RalphParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "RalphParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return RalphParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return RalphParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(RalphParser._ATN, this);
	}
	// @RuleVersion(0)
	public sourceFile(): SourceFileContext {
		let _localctx: SourceFileContext = new SourceFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, RalphParser.RULE_sourceFile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.IMPORT) {
				{
				{
				this.state = 74;
				this.importDecl();
				}
				}
				this.state = 79;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 83;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.INTERFACE) | (1 << RalphParser.TXSCRIPT) | (1 << RalphParser.TXCONTRACT) | (1 << RalphParser.CONTRACT))) !== 0) || _la === RalphParser.L_BRACKET) {
				{
				{
				this.state = 80;
				this.declaration();
				}
				}
				this.state = 85;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 86;
			this.match(RalphParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importDecl(): ImportDeclContext {
		let _localctx: ImportDeclContext = new ImportDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, RalphParser.RULE_importDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 88;
			this.match(RalphParser.IMPORT);
			this.state = 89;
			this.string_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, RalphParser.RULE_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 91;
			this.typeDeclStmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierList(): IdentifierListContext {
		let _localctx: IdentifierListContext = new IdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, RalphParser.RULE_identifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 93;
			this.match(RalphParser.IDENTIFIER);
			this.state = 98;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.COMMA) {
				{
				{
				this.state = 94;
				this.match(RalphParser.COMMA);
				this.state = 95;
				this.match(RalphParser.IDENTIFIER);
				}
				}
				this.state = 100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varDecl(): VarDeclContext {
		let _localctx: VarDeclContext = new VarDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, RalphParser.RULE_varDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 106;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.CONST:
				{
				this.state = 101;
				this.match(RalphParser.CONST);
				}
				break;
			case RalphParser.LET:
				{
				{
				this.state = 102;
				this.match(RalphParser.LET);
				this.state = 104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RalphParser.MUT) {
					{
					this.state = 103;
					this.match(RalphParser.MUT);
					}
				}

				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 117;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.IDENTIFIER:
				{
				{
				this.state = 108;
				this.match(RalphParser.IDENTIFIER);
				this.state = 109;
				this.match(RalphParser.ASSIGN);
				this.state = 110;
				this.expression(0);
				}
				}
				break;
			case RalphParser.L_PAREN:
				{
				{
				this.state = 111;
				this.match(RalphParser.L_PAREN);
				this.state = 112;
				this.identifierList();
				this.state = 113;
				this.match(RalphParser.R_PAREN);
				this.state = 114;
				this.match(RalphParser.ASSIGN);
				this.state = 115;
				this.expression(0);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 10;
		this.enterRecursionRule(_localctx, 10, RalphParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 120;
				this.primaryExpr();
				}
				break;

			case 2:
				{
				this.state = 121;
				this.match(RalphParser.IDENTIFIER);
				}
				break;

			case 3:
				{
				this.state = 122;
				this.methodCall();
				}
				break;

			case 4:
				{
				this.state = 123;
				_la = this._input.LA(1);
				if (!(_la === RalphParser.SUB || _la === RalphParser.NOT)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 124;
				this.expression(5);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 141;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 139;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, RalphParser.RULE_expression);
						this.state = 127;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 128;
						_la = this._input.LA(1);
						if (!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (RalphParser.CONCAT - 51)) | (1 << (RalphParser.ADD - 51)) | (1 << (RalphParser.SUB - 51)) | (1 << (RalphParser.MUL - 51)) | (1 << (RalphParser.DIV - 51)) | (1 << (RalphParser.MOD - 51)) | (1 << (RalphParser.MODADD - 51)) | (1 << (RalphParser.MODSUB - 51)) | (1 << (RalphParser.MODMUL - 51)) | (1 << (RalphParser.SHL - 51)) | (1 << (RalphParser.SHR - 51)) | (1 << (RalphParser.BITAND - 51)) | (1 << (RalphParser.XOR - 51)) | (1 << (RalphParser.BITOR - 51)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 129;
						this.expression(5);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, RalphParser.RULE_expression);
						this.state = 130;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 131;
						_la = this._input.LA(1);
						if (!(((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (RalphParser.EQ - 65)) | (1 << (RalphParser.NQ - 65)) | (1 << (RalphParser.LT - 65)) | (1 << (RalphParser.LE - 65)) | (1 << (RalphParser.GT - 65)) | (1 << (RalphParser.GE - 65)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 132;
						this.expression(4);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, RalphParser.RULE_expression);
						this.state = 133;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 134;
						_la = this._input.LA(1);
						if (!(_la === RalphParser.AND || _la === RalphParser.OR)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 135;
						this.expression(3);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, RalphParser.RULE_expression);
						this.state = 136;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 137;
						this.match(RalphParser.ASSIGN);
						this.state = 138;
						this.expression(2);
						}
						break;
					}
					}
				}
				this.state = 143;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, RalphParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			this.expression(0);
			this.state = 149;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.COMMA) {
				{
				{
				this.state = 145;
				this.match(RalphParser.COMMA);
				this.state = 146;
				this.expression(0);
				}
				}
				this.state = 151;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodCall(): MethodCallContext {
		let _localctx: MethodCallContext = new MethodCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, RalphParser.RULE_methodCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 152;
			this.match(RalphParser.IDENTIFIER);
			this.state = 157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.DOT) {
				{
				{
				this.state = 153;
				this.match(RalphParser.DOT);
				this.state = 154;
				this.match(RalphParser.IDENTIFIER);
				}
				}
				this.state = 159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 160;
			this.match(RalphParser.L_PAREN);
			this.state = 162;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (RalphParser.IDENTIFIER - 37)) | (1 << (RalphParser.L_BRACKET - 37)) | (1 << (RalphParser.SUB - 37)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (RalphParser.NOT - 73)) | (1 << (RalphParser.DECIMAL_LIT - 73)) | (1 << (RalphParser.BINARY_LIT - 73)) | (1 << (RalphParser.OCTAL_LIT - 73)) | (1 << (RalphParser.HEX_LIT - 73)) | (1 << (RalphParser.ADDRESS_LIT - 73)) | (1 << (RalphParser.ALPH_LIT - 73)) | (1 << (RalphParser.BOOL_LIT - 73)) | (1 << (RalphParser.IMAGINARY_LIT - 73)) | (1 << (RalphParser.RUNE_LIT - 73)) | (1 << (RalphParser.RAW_STRING_LIT - 73)) | (1 << (RalphParser.INTERPRETED_STRING_LIT - 73)))) !== 0)) {
				{
				this.state = 161;
				this.expressionList();
				}
			}

			this.state = 164;
			this.match(RalphParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryExpr(): PrimaryExprContext {
		let _localctx: PrimaryExprContext = new PrimaryExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, RalphParser.RULE_primaryExpr);
		try {
			this.state = 168;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.DECIMAL_LIT:
			case RalphParser.BINARY_LIT:
			case RalphParser.OCTAL_LIT:
			case RalphParser.HEX_LIT:
			case RalphParser.ADDRESS_LIT:
			case RalphParser.ALPH_LIT:
			case RalphParser.BOOL_LIT:
			case RalphParser.IMAGINARY_LIT:
			case RalphParser.RUNE_LIT:
			case RalphParser.RAW_STRING_LIT:
			case RalphParser.INTERPRETED_STRING_LIT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 166;
				this.basicLit();
				}
				break;
			case RalphParser.IDENTIFIER:
			case RalphParser.L_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 167;
				this.arrayExpr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primitiveType(): PrimitiveTypeContext {
		let _localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, RalphParser.RULE_primitiveType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 170;
			_la = this._input.LA(1);
			if (!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (RalphParser.BOOL - 30)) | (1 << (RalphParser.I256 - 30)) | (1 << (RalphParser.U256 - 30)) | (1 << (RalphParser.BYTE - 30)) | (1 << (RalphParser.BYTEVEC - 30)) | (1 << (RalphParser.ADDRESS - 30)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayType(): ArrayTypeContext {
		let _localctx: ArrayTypeContext = new ArrayTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, RalphParser.RULE_arrayType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 172;
			this.match(RalphParser.L_BRACKET);
			this.state = 173;
			this.type_();
			this.state = 174;
			this.match(RalphParser.SEMI);
			this.state = 175;
			this.expression(0);
			this.state = 176;
			this.match(RalphParser.R_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayExpr(): ArrayExprContext {
		let _localctx: ArrayExprContext = new ArrayExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, RalphParser.RULE_arrayExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 179;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.IDENTIFIER) {
				{
				this.state = 178;
				this.match(RalphParser.IDENTIFIER);
				}
			}

			this.state = 181;
			this.match(RalphParser.L_BRACKET);
			this.state = 182;
			this.expression(0);
			this.state = 187;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.COMMA) {
				{
				{
				this.state = 183;
				this.match(RalphParser.COMMA);
				this.state = 184;
				this.expression(0);
				}
				}
				this.state = 189;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 190;
			this.match(RalphParser.R_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_(): Type_Context {
		let _localctx: Type_Context = new Type_Context(this._ctx, this.state);
		this.enterRule(_localctx, 24, RalphParser.RULE_type_);
		try {
			this.state = 195;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.BOOL:
			case RalphParser.I256:
			case RalphParser.U256:
			case RalphParser.BYTE:
			case RalphParser.BYTEVEC:
			case RalphParser.ADDRESS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 192;
				this.primitiveType();
				}
				break;
			case RalphParser.L_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 193;
				this.arrayType();
				}
				break;
			case RalphParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 194;
				this.match(RalphParser.IDENTIFIER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDeclStmt(): TypeDeclStmtContext {
		let _localctx: TypeDeclStmtContext = new TypeDeclStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, RalphParser.RULE_typeDeclStmt);
		try {
			this.state = 199;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.L_BRACKET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 197;
				this.arrayType();
				}
				break;
			case RalphParser.INTERFACE:
			case RalphParser.TXSCRIPT:
			case RalphParser.TXCONTRACT:
			case RalphParser.CONTRACT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 198;
				this.typeStruct();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public result(): ResultContext {
		let _localctx: ResultContext = new ResultContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, RalphParser.RULE_result);
		let _la: number;
		try {
			let _alt: number;
			this.state = 219;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 201;
				this.match(RalphParser.L_PAREN);
				this.state = 202;
				this.match(RalphParser.R_PAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 203;
				this.type_();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 204;
				this.match(RalphParser.L_PAREN);
				this.state = 216;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (RalphParser.BOOL - 30)) | (1 << (RalphParser.I256 - 30)) | (1 << (RalphParser.U256 - 30)) | (1 << (RalphParser.BYTE - 30)) | (1 << (RalphParser.BYTEVEC - 30)) | (1 << (RalphParser.ADDRESS - 30)) | (1 << (RalphParser.IDENTIFIER - 30)) | (1 << (RalphParser.L_BRACKET - 30)))) !== 0)) {
					{
					this.state = 205;
					this.type_();
					this.state = 210;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 206;
							this.match(RalphParser.COMMA);
							this.state = 207;
							this.type_();
							}
							}
						}
						this.state = 212;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
					}
					this.state = 214;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RalphParser.COMMA) {
						{
						this.state = 213;
						this.match(RalphParser.COMMA);
						}
					}

					}
				}

				this.state = 218;
				this.match(RalphParser.R_PAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public param(): ParamContext {
		let _localctx: ParamContext = new ParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, RalphParser.RULE_param);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 223;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.AT) {
				{
				this.state = 221;
				this.match(RalphParser.AT);
				this.state = 222;
				this.match(RalphParser.IDENTIFIER);
				}
			}

			this.state = 226;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.MUT) {
				{
				this.state = 225;
				this.match(RalphParser.MUT);
				}
			}

			this.state = 228;
			this.match(RalphParser.IDENTIFIER);
			this.state = 229;
			this.match(RalphParser.COLON);
			this.state = 230;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public paramList(): ParamListContext {
		let _localctx: ParamListContext = new ParamListContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, RalphParser.RULE_paramList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 232;
			this.param();
			this.state = 237;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.COMMA) {
				{
				{
				this.state = 233;
				this.match(RalphParser.COMMA);
				this.state = 234;
				this.param();
				}
				}
				this.state = 239;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodDecl(): MethodDeclContext {
		let _localctx: MethodDeclContext = new MethodDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, RalphParser.RULE_methodDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 241;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.AT) {
				{
				this.state = 240;
				this.annotation();
				}
			}

			this.state = 244;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.PUB) {
				{
				this.state = 243;
				this.match(RalphParser.PUB);
				}
			}

			this.state = 247;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.PAYABLE) {
				{
				this.state = 246;
				this.match(RalphParser.PAYABLE);
				}
			}

			this.state = 249;
			this.match(RalphParser.FN);
			this.state = 250;
			this.match(RalphParser.IDENTIFIER);
			this.state = 256;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.L_PAREN) {
				{
				this.state = 251;
				this.match(RalphParser.L_PAREN);
				this.state = 253;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & ((1 << (RalphParser.MUT - 22)) | (1 << (RalphParser.AT - 22)) | (1 << (RalphParser.IDENTIFIER - 22)))) !== 0)) {
					{
					this.state = 252;
					this.paramList();
					}
				}

				this.state = 255;
				this.match(RalphParser.R_PAREN);
				}
			}

			this.state = 260;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.R_ARROW) {
				{
				this.state = 258;
				this.match(RalphParser.R_ARROW);
				this.state = 259;
				this.result();
				}
			}

			this.state = 263;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 262;
				this.block();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public basicLit(): BasicLitContext {
		let _localctx: BasicLitContext = new BasicLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, RalphParser.RULE_basicLit);
		try {
			this.state = 270;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.DECIMAL_LIT:
			case RalphParser.BINARY_LIT:
			case RalphParser.OCTAL_LIT:
			case RalphParser.HEX_LIT:
			case RalphParser.IMAGINARY_LIT:
			case RalphParser.RUNE_LIT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 265;
				this.integer();
				}
				break;
			case RalphParser.RAW_STRING_LIT:
			case RalphParser.INTERPRETED_STRING_LIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 266;
				this.string_();
				}
				break;
			case RalphParser.BOOL_LIT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 267;
				this.match(RalphParser.BOOL_LIT);
				}
				break;
			case RalphParser.ADDRESS_LIT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 268;
				this.match(RalphParser.ADDRESS_LIT);
				}
				break;
			case RalphParser.ALPH_LIT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 269;
				this.match(RalphParser.ALPH_LIT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integer(): IntegerContext {
		let _localctx: IntegerContext = new IntegerContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, RalphParser.RULE_integer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 272;
			_la = this._input.LA(1);
			if (!(((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (RalphParser.DECIMAL_LIT - 74)) | (1 << (RalphParser.BINARY_LIT - 74)) | (1 << (RalphParser.OCTAL_LIT - 74)) | (1 << (RalphParser.HEX_LIT - 74)) | (1 << (RalphParser.IMAGINARY_LIT - 74)) | (1 << (RalphParser.RUNE_LIT - 74)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string_(): String_Context {
		let _localctx: String_Context = new String_Context(this._ctx, this.state);
		this.enterRule(_localctx, 40, RalphParser.RULE_string_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 274;
			_la = this._input.LA(1);
			if (!(_la === RalphParser.RAW_STRING_LIT || _la === RalphParser.INTERPRETED_STRING_LIT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeStruct(): TypeStructContext {
		let _localctx: TypeStructContext = new TypeStructContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, RalphParser.RULE_typeStruct);
		try {
			this.state = 279;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.TXSCRIPT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 276;
				this.txScript();
				}
				break;
			case RalphParser.TXCONTRACT:
			case RalphParser.CONTRACT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 277;
				this.contract();
				}
				break;
			case RalphParser.INTERFACE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 278;
				this.interface();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeStructBody(): TypeStructBodyContext {
		let _localctx: TypeStructBodyContext = new TypeStructBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, RalphParser.RULE_typeStructBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 281;
			this.match(RalphParser.L_CURLY);
			this.state = 287;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.FN) | (1 << RalphParser.PUB) | (1 << RalphParser.PAYABLE) | (1 << RalphParser.RETURN) | (1 << RalphParser.INTERFACE) | (1 << RalphParser.TXSCRIPT) | (1 << RalphParser.TXCONTRACT) | (1 << RalphParser.CONTRACT) | (1 << RalphParser.IF) | (1 << RalphParser.WHILE) | (1 << RalphParser.LET) | (1 << RalphParser.CONST) | (1 << RalphParser.EVENT) | (1 << RalphParser.EVMIT) | (1 << RalphParser.AT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (RalphParser.IDENTIFIER - 37)) | (1 << (RalphParser.L_CURLY - 37)) | (1 << (RalphParser.L_BRACKET - 37)) | (1 << (RalphParser.SUB - 37)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (RalphParser.NOT - 73)) | (1 << (RalphParser.DECIMAL_LIT - 73)) | (1 << (RalphParser.BINARY_LIT - 73)) | (1 << (RalphParser.OCTAL_LIT - 73)) | (1 << (RalphParser.HEX_LIT - 73)) | (1 << (RalphParser.ADDRESS_LIT - 73)) | (1 << (RalphParser.ALPH_LIT - 73)) | (1 << (RalphParser.BOOL_LIT - 73)) | (1 << (RalphParser.IMAGINARY_LIT - 73)) | (1 << (RalphParser.RUNE_LIT - 73)) | (1 << (RalphParser.RAW_STRING_LIT - 73)) | (1 << (RalphParser.INTERPRETED_STRING_LIT - 73)) | (1 << (RalphParser.EOS - 73)))) !== 0)) {
				{
				this.state = 285;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
				case 1:
					{
					this.state = 282;
					this.statement();
					}
					break;

				case 2:
					{
					this.state = 283;
					this.eventEmit();
					}
					break;

				case 3:
					{
					this.state = 284;
					this.methodDecl();
					}
					break;
				}
				}
				this.state = 289;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 290;
			this.match(RalphParser.R_CURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public txScript(): TxScriptContext {
		let _localctx: TxScriptContext = new TxScriptContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, RalphParser.RULE_txScript);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 292;
			this.match(RalphParser.TXSCRIPT);
			this.state = 293;
			this.match(RalphParser.IDENTIFIER);
			this.state = 299;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.L_PAREN) {
				{
				this.state = 294;
				this.match(RalphParser.L_PAREN);
				this.state = 296;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & ((1 << (RalphParser.MUT - 22)) | (1 << (RalphParser.AT - 22)) | (1 << (RalphParser.IDENTIFIER - 22)))) !== 0)) {
					{
					this.state = 295;
					this.paramList();
					}
				}

				this.state = 298;
				this.match(RalphParser.R_PAREN);
				}
			}

			this.state = 301;
			this.typeStructBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contract(): ContractContext {
		let _localctx: ContractContext = new ContractContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, RalphParser.RULE_contract);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 303;
			_la = this._input.LA(1);
			if (!(_la === RalphParser.TXCONTRACT || _la === RalphParser.CONTRACT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 304;
			this.match(RalphParser.IDENTIFIER);
			this.state = 310;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.L_PAREN) {
				{
				this.state = 305;
				this.match(RalphParser.L_PAREN);
				this.state = 307;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & ((1 << (RalphParser.MUT - 22)) | (1 << (RalphParser.AT - 22)) | (1 << (RalphParser.IDENTIFIER - 22)))) !== 0)) {
					{
					this.state = 306;
					this.paramList();
					}
				}

				this.state = 309;
				this.match(RalphParser.R_PAREN);
				}
			}

			this.state = 321;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.EXTENDS || _la === RalphParser.IMPLEMENTS) {
				{
				this.state = 312;
				_la = this._input.LA(1);
				if (!(_la === RalphParser.EXTENDS || _la === RalphParser.IMPLEMENTS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 313;
				this.match(RalphParser.IDENTIFIER);
				this.state = 319;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RalphParser.L_PAREN) {
					{
					this.state = 314;
					this.match(RalphParser.L_PAREN);
					this.state = 316;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (RalphParser.IDENTIFIER - 37)) | (1 << (RalphParser.L_BRACKET - 37)) | (1 << (RalphParser.SUB - 37)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (RalphParser.NOT - 73)) | (1 << (RalphParser.DECIMAL_LIT - 73)) | (1 << (RalphParser.BINARY_LIT - 73)) | (1 << (RalphParser.OCTAL_LIT - 73)) | (1 << (RalphParser.HEX_LIT - 73)) | (1 << (RalphParser.ADDRESS_LIT - 73)) | (1 << (RalphParser.ALPH_LIT - 73)) | (1 << (RalphParser.BOOL_LIT - 73)) | (1 << (RalphParser.IMAGINARY_LIT - 73)) | (1 << (RalphParser.RUNE_LIT - 73)) | (1 << (RalphParser.RAW_STRING_LIT - 73)) | (1 << (RalphParser.INTERPRETED_STRING_LIT - 73)))) !== 0)) {
						{
						this.state = 315;
						this.expressionList();
						}
					}

					this.state = 318;
					this.match(RalphParser.R_PAREN);
					}
				}

				}
			}

			this.state = 323;
			this.typeStructBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interface(): InterfaceContext {
		let _localctx: InterfaceContext = new InterfaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, RalphParser.RULE_interface);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 325;
			this.match(RalphParser.INTERFACE);
			this.state = 326;
			this.match(RalphParser.IDENTIFIER);
			this.state = 327;
			this.typeStructBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventEmit(): EventEmitContext {
		let _localctx: EventEmitContext = new EventEmitContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, RalphParser.RULE_eventEmit);
		let _la: number;
		try {
			this.state = 346;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.EVENT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 329;
				this.match(RalphParser.EVENT);
				this.state = 330;
				this.match(RalphParser.IDENTIFIER);
				this.state = 336;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RalphParser.L_PAREN) {
					{
					this.state = 331;
					this.match(RalphParser.L_PAREN);
					this.state = 333;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & ((1 << (RalphParser.MUT - 22)) | (1 << (RalphParser.AT - 22)) | (1 << (RalphParser.IDENTIFIER - 22)))) !== 0)) {
						{
						this.state = 332;
						this.paramList();
						}
					}

					this.state = 335;
					this.match(RalphParser.R_PAREN);
					}
				}

				}
				break;
			case RalphParser.EVMIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 338;
				this.match(RalphParser.EVMIT);
				this.state = 339;
				this.match(RalphParser.IDENTIFIER);
				this.state = 344;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RalphParser.L_PAREN) {
					{
					this.state = 340;
					this.match(RalphParser.L_PAREN);
					this.state = 341;
					this.expressionList();
					this.state = 342;
					this.match(RalphParser.R_PAREN);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation(): AnnotationContext {
		let _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, RalphParser.RULE_annotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 348;
			this.match(RalphParser.AT);
			this.state = 349;
			this.match(RalphParser.USING);
			this.state = 350;
			this.match(RalphParser.L_PAREN);
			{
			this.state = 351;
			this.expressionList();
			}
			this.state = 352;
			this.match(RalphParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, RalphParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 354;
			this.match(RalphParser.L_CURLY);
			this.state = 360;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.RETURN) | (1 << RalphParser.INTERFACE) | (1 << RalphParser.TXSCRIPT) | (1 << RalphParser.TXCONTRACT) | (1 << RalphParser.CONTRACT) | (1 << RalphParser.IF) | (1 << RalphParser.WHILE) | (1 << RalphParser.LET) | (1 << RalphParser.CONST) | (1 << RalphParser.EVENT) | (1 << RalphParser.EVMIT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (RalphParser.IDENTIFIER - 37)) | (1 << (RalphParser.L_CURLY - 37)) | (1 << (RalphParser.L_BRACKET - 37)) | (1 << (RalphParser.SUB - 37)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (RalphParser.NOT - 73)) | (1 << (RalphParser.DECIMAL_LIT - 73)) | (1 << (RalphParser.BINARY_LIT - 73)) | (1 << (RalphParser.OCTAL_LIT - 73)) | (1 << (RalphParser.HEX_LIT - 73)) | (1 << (RalphParser.ADDRESS_LIT - 73)) | (1 << (RalphParser.ALPH_LIT - 73)) | (1 << (RalphParser.BOOL_LIT - 73)) | (1 << (RalphParser.IMAGINARY_LIT - 73)) | (1 << (RalphParser.RUNE_LIT - 73)) | (1 << (RalphParser.RAW_STRING_LIT - 73)) | (1 << (RalphParser.INTERPRETED_STRING_LIT - 73)) | (1 << (RalphParser.EOS - 73)))) !== 0)) {
				{
				{
				this.state = 355;
				this.statement();
				this.state = 356;
				this.eos();
				}
				}
				this.state = 362;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 363;
			this.match(RalphParser.R_CURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, RalphParser.RULE_statement);
		try {
			this.state = 371;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 365;
				this.declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 366;
				this.simpleStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 367;
				this.returnStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 368;
				this.block();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 369;
				this.ifStmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 370;
				this.whileStmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleStmt(): SimpleStmtContext {
		let _localctx: SimpleStmtContext = new SimpleStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, RalphParser.RULE_simpleStmt);
		try {
			this.state = 377;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.EOS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 373;
				this.emptyStmt();
				}
				break;
			case RalphParser.LET:
			case RalphParser.CONST:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 374;
				this.varDecl();
				}
				break;
			case RalphParser.IDENTIFIER:
			case RalphParser.L_BRACKET:
			case RalphParser.SUB:
			case RalphParser.NOT:
			case RalphParser.DECIMAL_LIT:
			case RalphParser.BINARY_LIT:
			case RalphParser.OCTAL_LIT:
			case RalphParser.HEX_LIT:
			case RalphParser.ADDRESS_LIT:
			case RalphParser.ALPH_LIT:
			case RalphParser.BOOL_LIT:
			case RalphParser.IMAGINARY_LIT:
			case RalphParser.RUNE_LIT:
			case RalphParser.RAW_STRING_LIT:
			case RalphParser.INTERPRETED_STRING_LIT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 375;
				this.expressionStmt();
				}
				break;
			case RalphParser.EVENT:
			case RalphParser.EVMIT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 376;
				this.eventEmit();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStmt(): ExpressionStmtContext {
		let _localctx: ExpressionStmtContext = new ExpressionStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, RalphParser.RULE_expressionStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 379;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emptyStmt(): EmptyStmtContext {
		let _localctx: EmptyStmtContext = new EmptyStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, RalphParser.RULE_emptyStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 381;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStmt(): ReturnStmtContext {
		let _localctx: ReturnStmtContext = new ReturnStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, RalphParser.RULE_returnStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 383;
			this.match(RalphParser.RETURN);
			this.state = 385;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				{
				this.state = 384;
				this.expressionList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStmt(): IfStmtContext {
		let _localctx: IfStmtContext = new IfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, RalphParser.RULE_ifStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 387;
			this.match(RalphParser.IF);
			this.state = 388;
			this.match(RalphParser.L_PAREN);
			this.state = 389;
			this.expression(0);
			this.state = 390;
			this.match(RalphParser.R_PAREN);
			this.state = 391;
			this.block();
			this.state = 397;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.ELSE) {
				{
				this.state = 392;
				this.match(RalphParser.ELSE);
				this.state = 395;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RalphParser.L_CURLY:
					{
					this.state = 393;
					this.block();
					}
					break;
				case RalphParser.IF:
					{
					this.state = 394;
					this.ifStmt();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileStmt(): WhileStmtContext {
		let _localctx: WhileStmtContext = new WhileStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, RalphParser.RULE_whileStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 399;
			this.match(RalphParser.WHILE);
			this.state = 400;
			this.match(RalphParser.L_PAREN);
			this.state = 402;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (RalphParser.IDENTIFIER - 37)) | (1 << (RalphParser.L_BRACKET - 37)) | (1 << (RalphParser.SUB - 37)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (RalphParser.NOT - 73)) | (1 << (RalphParser.DECIMAL_LIT - 73)) | (1 << (RalphParser.BINARY_LIT - 73)) | (1 << (RalphParser.OCTAL_LIT - 73)) | (1 << (RalphParser.HEX_LIT - 73)) | (1 << (RalphParser.ADDRESS_LIT - 73)) | (1 << (RalphParser.ALPH_LIT - 73)) | (1 << (RalphParser.BOOL_LIT - 73)) | (1 << (RalphParser.IMAGINARY_LIT - 73)) | (1 << (RalphParser.RUNE_LIT - 73)) | (1 << (RalphParser.RAW_STRING_LIT - 73)) | (1 << (RalphParser.INTERPRETED_STRING_LIT - 73)))) !== 0)) {
				{
				this.state = 401;
				this.expression(0);
				}
			}

			this.state = 404;
			this.match(RalphParser.R_PAREN);
			this.state = 405;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eos(): EosContext {
		let _localctx: EosContext = new EosContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, RalphParser.RULE_eos);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 407;
			this.match(RalphParser.EOS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 5:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);

		case 1:
			return this.precpred(this._ctx, 3);

		case 2:
			return this.precpred(this._ctx, 2);

		case 3:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03b\u019C\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x03\x02\x07\x02N\n\x02\f\x02\x0E\x02Q\v\x02" +
		"\x03\x02\x07\x02T\n\x02\f\x02\x0E\x02W\v\x02\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x07\x05c\n\x05\f" +
		"\x05\x0E\x05f\v\x05\x03\x06\x03\x06\x03\x06\x05\x06k\n\x06\x05\x06m\n" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x05\x06x\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05" +
		"\x07\x80\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\x8E\n\x07\f\x07\x0E\x07" +
		"\x91\v\x07\x03\b\x03\b\x03\b\x07\b\x96\n\b\f\b\x0E\b\x99\v\b\x03\t\x03" +
		"\t\x03\t\x07\t\x9E\n\t\f\t\x0E\t\xA1\v\t\x03\t\x03\t\x05\t\xA5\n\t\x03" +
		"\t\x03\t\x03\n\x03\n\x05\n\xAB\n\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f" +
		"\x03\f\x03\f\x03\r\x05\r\xB6\n\r\x03\r\x03\r\x03\r\x03\r\x07\r\xBC\n\r" +
		"\f\r\x0E\r\xBF\v\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xC6\n\x0E" +
		"\x03\x0F\x03\x0F\x05\x0F\xCA\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x07\x10\xD3\n\x10\f\x10\x0E\x10\xD6\v\x10\x03\x10" +
		"\x05\x10\xD9\n\x10\x05\x10\xDB\n\x10\x03\x10\x05\x10\xDE\n\x10\x03\x11" +
		"\x03\x11\x05\x11\xE2\n\x11\x03\x11\x05\x11\xE5\n\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x12\x03\x12\x03\x12\x07\x12\xEE\n\x12\f\x12\x0E\x12\xF1" +
		"\v\x12\x03\x13\x05\x13\xF4\n\x13\x03\x13\x05\x13\xF7\n\x13\x03\x13\x05" +
		"\x13\xFA\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0100\n\x13\x03" +
		"\x13\x05\x13\u0103\n\x13\x03\x13\x03\x13\x05\x13\u0107\n\x13\x03\x13\x05" +
		"\x13\u010A\n\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0111" +
		"\n\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x05\x17" +
		"\u011A\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\u0120\n\x18\f\x18" +
		"\x0E\x18\u0123\v\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x05" +
		"\x19\u012B\n\x19\x03\x19\x05\x19\u012E\n\x19\x03\x19\x03\x19\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x05\x1A\u0136\n\x1A\x03\x1A\x05\x1A\u0139\n\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u013F\n\x1A\x03\x1A\x05\x1A\u0142" +
		"\n\x1A\x05\x1A\u0144\n\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0150\n\x1C\x03\x1C\x05\x1C" +
		"\u0153\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u015B" +
		"\n\x1C\x05\x1C\u015D\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u0169\n\x1E\f\x1E\x0E\x1E" +
		"\u016C\v\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x05\x1F\u0176\n\x1F\x03 \x03 \x03 \x03 \x05 \u017C\n \x03!\x03!\x03" +
		"\"\x03\"\x03#\x03#\x05#\u0184\n#\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03" +
		"$\x05$\u018E\n$\x05$\u0190\n$\x03%\x03%\x03%\x05%\u0195\n%\x03%\x03%\x03" +
		"%\x03&\x03&\x03&\x02\x02\x03\f\'\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
		"\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E" +
		"\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02" +
		":\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02\x02\v\x04\x0277KK\x03\x02" +
		"5B\x03\x02CH\x03\x02IJ\x03\x02 %\x04\x02LOVW\x03\x02]^\x03\x02\r\x0E\x04" +
		"\x02\x19\x19\x1B\x1B\x02\u01BC\x02O\x03\x02\x02\x02\x04Z\x03\x02\x02\x02" +
		"\x06]\x03\x02\x02\x02\b_\x03\x02\x02\x02\nl\x03\x02\x02\x02\f\x7F\x03" +
		"\x02\x02\x02\x0E\x92\x03\x02\x02\x02\x10\x9A\x03\x02\x02\x02\x12\xAA\x03" +
		"\x02\x02\x02\x14\xAC\x03\x02\x02\x02\x16\xAE\x03\x02\x02\x02\x18\xB5\x03" +
		"\x02\x02\x02\x1A\xC5\x03\x02\x02\x02\x1C\xC9\x03\x02\x02\x02\x1E\xDD\x03" +
		"\x02\x02\x02 \xE1\x03\x02\x02\x02\"\xEA\x03\x02\x02\x02$\xF3\x03\x02\x02" +
		"\x02&\u0110\x03\x02\x02\x02(\u0112\x03\x02\x02\x02*\u0114\x03\x02\x02" +
		"\x02,\u0119\x03\x02\x02\x02.\u011B\x03\x02\x02\x020\u0126\x03\x02\x02" +
		"\x022\u0131\x03\x02\x02\x024\u0147\x03\x02\x02\x026\u015C\x03\x02\x02" +
		"\x028\u015E\x03\x02\x02\x02:\u0164\x03\x02\x02\x02<\u0175\x03\x02\x02" +
		"\x02>\u017B\x03\x02\x02\x02@\u017D\x03\x02\x02\x02B\u017F\x03\x02\x02" +
		"\x02D\u0181\x03\x02\x02\x02F\u0185\x03\x02\x02\x02H\u0191\x03\x02\x02" +
		"\x02J\u0199\x03\x02\x02\x02LN\x05\x04\x03\x02ML\x03\x02\x02\x02NQ\x03" +
		"\x02\x02\x02OM\x03\x02\x02\x02OP\x03\x02\x02\x02PU\x03\x02\x02\x02QO\x03" +
		"\x02\x02\x02RT\x05\x06\x04\x02SR\x03\x02\x02\x02TW\x03\x02\x02\x02US\x03" +
		"\x02\x02\x02UV\x03\x02\x02\x02VX\x03\x02\x02\x02WU\x03\x02\x02\x02XY\x07" +
		"\x02\x02\x03Y\x03\x03\x02\x02\x02Z[\x07\x03\x02\x02[\\\x05*\x16\x02\\" +
		"\x05\x03\x02\x02\x02]^\x05\x1C\x0F\x02^\x07\x03\x02\x02\x02_d\x07\'\x02" +
		"\x02`a\x07/\x02\x02ac\x07\'\x02\x02b`\x03\x02\x02\x02cf\x03\x02\x02\x02" +
		"db\x03\x02\x02\x02de\x03\x02\x02\x02e\t\x03\x02\x02\x02fd\x03\x02\x02" +
		"\x02gm\x07\x17\x02\x02hj\x07\x16\x02\x02ik\x07\x18\x02\x02ji\x03\x02\x02" +
		"\x02jk\x03\x02\x02\x02km\x03\x02\x02\x02lg\x03\x02\x02\x02lh\x03\x02\x02" +
		"\x02mw\x03\x02\x02\x02no\x07\'\x02\x02op\x07.\x02\x02px\x05\f\x07\x02" +
		"qr\x07(\x02\x02rs\x05\b\x05\x02st\x07)\x02\x02tu\x07.\x02\x02uv\x05\f" +
		"\x07\x02vx\x03\x02\x02\x02wn\x03\x02\x02\x02wq\x03\x02\x02\x02x\v\x03" +
		"\x02\x02\x02yz\b\x07\x01\x02z\x80\x05\x12\n\x02{\x80\x07\'\x02\x02|\x80" +
		"\x05\x10\t\x02}~\t\x02\x02\x02~\x80\x05\f\x07\x07\x7Fy\x03\x02\x02\x02" +
		"\x7F{\x03\x02\x02\x02\x7F|\x03\x02\x02\x02\x7F}\x03\x02\x02\x02\x80\x8F" +
		"\x03\x02\x02\x02\x81\x82\f\x06\x02\x02\x82\x83\t\x03\x02\x02\x83\x8E\x05" +
		"\f\x07\x07\x84\x85\f\x05\x02\x02\x85\x86\t\x04\x02\x02\x86\x8E\x05\f\x07" +
		"\x06\x87\x88\f\x04\x02\x02\x88\x89\t\x05\x02\x02\x89\x8E\x05\f\x07\x05" +
		"\x8A\x8B\f\x03\x02\x02\x8B\x8C\x07.\x02\x02\x8C\x8E\x05\f\x07\x04\x8D" +
		"\x81\x03\x02\x02\x02\x8D\x84\x03\x02\x02\x02\x8D\x87\x03\x02\x02\x02\x8D" +
		"\x8A\x03\x02\x02\x02\x8E\x91\x03\x02\x02\x02\x8F\x8D\x03\x02\x02\x02\x8F" +
		"\x90\x03\x02\x02\x02\x90\r\x03\x02\x02\x02\x91\x8F\x03\x02\x02\x02\x92" +
		"\x97\x05\f\x07\x02\x93\x94\x07/\x02\x02\x94\x96\x05\f\x07\x02\x95\x93" +
		"\x03\x02\x02\x02\x96\x99\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02\x97\x98" +
		"\x03\x02\x02\x02\x98\x0F\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x9A\x9F" +
		"\x07\'\x02\x02\x9B\x9C\x072\x02\x02\x9C\x9E\x07\'\x02\x02\x9D\x9B\x03" +
		"\x02\x02\x02\x9E\xA1\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02\x9F\xA0\x03" +
		"\x02\x02\x02\xA0\xA2\x03\x02\x02\x02\xA1\x9F\x03\x02\x02\x02\xA2\xA4\x07" +
		"(\x02\x02\xA3\xA5\x05\x0E\b\x02\xA4\xA3\x03\x02\x02\x02\xA4\xA5\x03\x02" +
		"\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xA7\x07)\x02\x02\xA7\x11\x03\x02" +
		"\x02\x02\xA8\xAB\x05&\x14\x02\xA9\xAB\x05\x18\r\x02\xAA\xA8\x03\x02\x02" +
		"\x02\xAA\xA9\x03\x02\x02\x02\xAB\x13\x03\x02\x02\x02\xAC\xAD\t\x06\x02" +
		"\x02\xAD\x15\x03\x02\x02\x02\xAE\xAF\x07,\x02\x02\xAF\xB0\x05\x1A\x0E" +
		"\x02\xB0\xB1\x070\x02\x02\xB1\xB2\x05\f\x07\x02\xB2\xB3\x07-\x02\x02\xB3" +
		"\x17\x03\x02\x02\x02\xB4\xB6\x07\'\x02\x02\xB5\xB4\x03\x02\x02\x02\xB5" +
		"\xB6\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB8\x07,\x02\x02\xB8" +
		"\xBD\x05\f\x07\x02\xB9\xBA\x07/\x02\x02\xBA\xBC\x05\f\x07\x02\xBB\xB9" +
		"\x03\x02\x02\x02\xBC\xBF\x03\x02\x02\x02\xBD\xBB\x03\x02\x02\x02\xBD\xBE" +
		"\x03\x02\x02\x02\xBE\xC0\x03\x02\x02\x02\xBF\xBD\x03\x02\x02\x02\xC0\xC1" +
		"\x07-\x02\x02\xC1\x19\x03\x02\x02\x02\xC2\xC6\x05\x14\v\x02\xC3\xC6\x05" +
		"\x16\f\x02\xC4\xC6\x07\'\x02\x02\xC5\xC2\x03\x02\x02\x02\xC5\xC3\x03\x02" +
		"\x02\x02\xC5\xC4\x03\x02\x02\x02\xC6\x1B\x03\x02\x02\x02\xC7\xCA\x05\x16" +
		"\f\x02\xC8\xCA\x05,\x17\x02\xC9\xC7\x03\x02\x02\x02\xC9\xC8\x03\x02\x02" +
		"\x02\xCA\x1D\x03\x02\x02\x02\xCB\xCC\x07(\x02\x02\xCC\xDE\x07)\x02\x02" +
		"\xCD\xDE\x05\x1A\x0E\x02\xCE\xDA\x07(\x02\x02\xCF\xD4\x05\x1A\x0E\x02" +
		"\xD0\xD1\x07/\x02\x02\xD1\xD3\x05\x1A\x0E\x02\xD2\xD0\x03\x02\x02\x02" +
		"\xD3\xD6\x03\x02\x02\x02\xD4\xD2\x03\x02\x02\x02\xD4\xD5\x03\x02\x02\x02" +
		"\xD5\xD8\x03\x02\x02\x02\xD6\xD4\x03\x02\x02\x02\xD7\xD9\x07/\x02\x02" +
		"\xD8\xD7\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDB\x03\x02\x02\x02" +
		"\xDA\xCF\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02" +
		"\xDC\xDE\x07)\x02\x02\xDD\xCB\x03\x02\x02\x02\xDD\xCD\x03\x02\x02\x02" +
		"\xDD\xCE\x03\x02\x02\x02\xDE\x1F\x03\x02\x02\x02\xDF\xE0\x07\x1F\x02\x02" +
		"\xE0\xE2\x07\'\x02\x02\xE1\xDF\x03\x02\x02\x02\xE1\xE2\x03\x02\x02\x02" +
		"\xE2\xE4\x03\x02\x02\x02\xE3\xE5\x07\x18\x02\x02\xE4\xE3\x03\x02\x02\x02" +
		"\xE4\xE5\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xE7\x07\'\x02\x02" +
		"\xE7\xE8\x071\x02\x02\xE8\xE9\x05\x1A\x0E\x02\xE9!\x03\x02\x02\x02\xEA" +
		"\xEF\x05 \x11\x02\xEB\xEC\x07/\x02\x02\xEC\xEE\x05 \x11\x02\xED\xEB\x03" +
		"\x02\x02\x02\xEE\xF1\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02\xEF\xF0\x03" +
		"\x02\x02\x02\xF0#\x03\x02\x02\x02\xF1\xEF\x03\x02\x02\x02\xF2\xF4\x05" +
		"8\x1D\x02\xF3\xF2\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF6\x03" +
		"\x02\x02\x02\xF5\xF7\x07\x06\x02\x02\xF6\xF5\x03\x02\x02\x02\xF6\xF7\x03" +
		"\x02\x02\x02\xF7\xF9\x03\x02\x02\x02\xF8\xFA\x07\x07\x02\x02\xF9\xF8\x03" +
		"\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\xFC\x07" +
		"\x05\x02\x02\xFC\u0102\x07\'\x02\x02\xFD\xFF\x07(\x02\x02\xFE\u0100\x05" +
		"\"\x12\x02\xFF\xFE\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0101" +
		"\x03\x02\x02\x02\u0101\u0103\x07)\x02\x02\u0102\xFD\x03\x02\x02\x02\u0102" +
		"\u0103\x03\x02\x02\x02\u0103\u0106\x03\x02\x02\x02\u0104\u0105\x07&\x02" +
		"\x02\u0105\u0107\x05\x1E\x10\x02\u0106\u0104\x03\x02\x02\x02\u0106\u0107" +
		"\x03\x02\x02\x02\u0107\u0109\x03\x02\x02\x02\u0108\u010A\x05:\x1E\x02" +
		"\u0109\u0108\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A%\x03\x02" +
		"\x02\x02\u010B\u0111\x05(\x15\x02\u010C\u0111\x05*\x16\x02\u010D\u0111" +
		"\x07R\x02\x02\u010E\u0111\x07P\x02\x02\u010F\u0111\x07Q\x02\x02\u0110" +
		"\u010B\x03\x02\x02\x02\u0110\u010C\x03\x02\x02\x02\u0110\u010D\x03\x02" +
		"\x02\x02\u0110\u010E\x03\x02\x02\x02\u0110\u010F\x03\x02\x02\x02\u0111" +
		"\'\x03\x02\x02\x02\u0112\u0113\t\x07\x02\x02\u0113)\x03\x02\x02\x02\u0114" +
		"\u0115\t\b\x02\x02\u0115+\x03\x02\x02\x02\u0116\u011A\x050\x19\x02\u0117" +
		"\u011A\x052\x1A\x02\u0118\u011A\x054\x1B\x02\u0119\u0116\x03\x02\x02\x02" +
		"\u0119\u0117\x03\x02\x02\x02\u0119\u0118\x03\x02\x02\x02\u011A-\x03\x02" +
		"\x02\x02\u011B\u0121\x07*\x02\x02\u011C\u0120\x05<\x1F\x02\u011D\u0120" +
		"\x056\x1C\x02\u011E\u0120\x05$\x13\x02\u011F\u011C\x03\x02\x02\x02\u011F" +
		"\u011D\x03\x02\x02\x02\u011F\u011E\x03\x02\x02\x02\u0120\u0123\x03\x02" +
		"\x02\x02\u0121\u011F\x03\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122" +
		"\u0124\x03\x02\x02\x02\u0123\u0121\x03\x02\x02\x02\u0124\u0125\x07+\x02" +
		"\x02\u0125/\x03\x02\x02\x02\u0126\u0127\x07\f\x02\x02\u0127\u012D\x07" +
		"\'\x02\x02\u0128\u012A\x07(\x02\x02\u0129\u012B\x05\"\x12\x02\u012A\u0129" +
		"\x03\x02\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B\u012C\x03\x02\x02\x02" +
		"\u012C\u012E\x07)\x02\x02\u012D\u0128\x03\x02\x02\x02\u012D\u012E\x03" +
		"\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F\u0130\x05.\x18\x02\u0130" +
		"1\x03\x02\x02\x02\u0131\u0132\t\t\x02\x02\u0132\u0138\x07\'\x02\x02\u0133" +
		"\u0135\x07(\x02\x02\u0134\u0136\x05\"\x12\x02\u0135\u0134\x03\x02\x02" +
		"\x02\u0135\u0136\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\u0139" +
		"\x07)\x02\x02\u0138\u0133\x03\x02\x02\x02\u0138\u0139\x03\x02\x02\x02" +
		"\u0139\u0143\x03\x02\x02\x02\u013A\u013B\t\n\x02\x02\u013B\u0141\x07\'" +
		"\x02\x02\u013C\u013E\x07(\x02\x02\u013D\u013F\x05\x0E\b\x02\u013E\u013D" +
		"\x03\x02\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02" +
		"\u0140\u0142\x07)\x02\x02\u0141\u013C\x03\x02\x02\x02\u0141\u0142\x03" +
		"\x02\x02\x02\u0142\u0144\x03\x02\x02\x02\u0143\u013A\x03\x02\x02\x02\u0143" +
		"\u0144\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\u0146\x05.\x18" +
		"\x02\u01463\x03\x02\x02\x02\u0147\u0148\x07\t\x02\x02\u0148\u0149\x07" +
		"\'\x02\x02\u0149\u014A\x05.\x18\x02\u014A5\x03\x02\x02\x02\u014B\u014C" +
		"\x07\x1C\x02\x02\u014C\u0152\x07\'\x02\x02\u014D\u014F\x07(\x02\x02\u014E" +
		"\u0150\x05\"\x12\x02\u014F\u014E\x03\x02\x02\x02\u014F\u0150\x03\x02\x02" +
		"\x02\u0150\u0151\x03\x02\x02\x02\u0151\u0153\x07)\x02\x02\u0152\u014D" +
		"\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153\u015D\x03\x02\x02\x02" +
		"\u0154\u0155\x07\x1D\x02\x02\u0155\u015A\x07\'\x02\x02\u0156\u0157\x07" +
		"(\x02\x02\u0157\u0158\x05\x0E\b\x02\u0158\u0159\x07)\x02\x02\u0159\u015B" +
		"\x03\x02\x02\x02\u015A\u0156\x03\x02\x02\x02\u015A\u015B\x03\x02\x02\x02" +
		"\u015B\u015D\x03\x02\x02\x02\u015C\u014B\x03\x02\x02\x02\u015C\u0154\x03" +
		"\x02\x02\x02\u015D7\x03\x02\x02\x02\u015E\u015F\x07\x1F\x02\x02\u015F" +
		"\u0160\x07\x1E\x02\x02\u0160\u0161\x07(\x02\x02\u0161\u0162\x05\x0E\b" +
		"\x02\u0162\u0163\x07)\x02\x02\u01639\x03\x02\x02\x02\u0164\u016A\x07*" +
		"\x02\x02\u0165\u0166\x05<\x1F\x02\u0166\u0167\x05J&\x02\u0167\u0169\x03" +
		"\x02\x02\x02\u0168\u0165\x03\x02\x02\x02\u0169\u016C\x03\x02\x02\x02\u016A" +
		"\u0168\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B\u016D\x03\x02" +
		"\x02\x02\u016C\u016A\x03\x02\x02\x02\u016D\u016E\x07+\x02\x02\u016E;\x03" +
		"\x02\x02\x02\u016F\u0176\x05\x06\x04\x02\u0170\u0176\x05> \x02\u0171\u0176" +
		"\x05D#\x02\u0172\u0176\x05:\x1E\x02\u0173\u0176\x05F$\x02\u0174\u0176" +
		"\x05H%\x02\u0175\u016F\x03\x02\x02\x02\u0175\u0170\x03\x02\x02\x02\u0175" +
		"\u0171\x03\x02\x02\x02\u0175\u0172\x03\x02\x02\x02\u0175\u0173\x03\x02" +
		"\x02\x02\u0175\u0174\x03\x02\x02\x02\u0176=\x03\x02\x02\x02\u0177\u017C" +
		"\x05B\"\x02\u0178\u017C\x05\n\x06\x02\u0179\u017C\x05@!\x02\u017A\u017C" +
		"\x056\x1C\x02\u017B\u0177\x03\x02\x02\x02\u017B\u0178\x03\x02\x02\x02" +
		"\u017B\u0179\x03\x02\x02\x02\u017B\u017A\x03\x02\x02\x02\u017C?\x03\x02" +
		"\x02\x02\u017D\u017E\x05\f\x07\x02\u017EA\x03\x02\x02\x02\u017F\u0180" +
		"\x05J&\x02\u0180C\x03\x02\x02\x02\u0181\u0183\x07\b\x02\x02\u0182\u0184" +
		"\x05\x0E\b\x02\u0183\u0182\x03\x02\x02\x02\u0183\u0184\x03\x02\x02\x02" +
		"\u0184E\x03\x02\x02\x02\u0185\u0186\x07\x10\x02\x02\u0186\u0187\x07(\x02" +
		"\x02\u0187\u0188\x05\f\x07\x02\u0188\u0189\x07)\x02\x02\u0189\u018F\x05" +
		":\x1E\x02\u018A\u018D\x07\x11\x02\x02\u018B\u018E\x05:\x1E\x02\u018C\u018E" +
		"\x05F$\x02\u018D\u018B\x03\x02\x02\x02\u018D\u018C\x03\x02\x02\x02\u018E" +
		"\u0190\x03\x02\x02\x02\u018F\u018A\x03\x02\x02\x02\u018F\u0190\x03\x02" +
		"\x02\x02\u0190G\x03\x02\x02\x02\u0191\u0192\x07\x12\x02\x02\u0192\u0194" +
		"\x07(\x02\x02\u0193\u0195\x05\f\x07\x02\u0194\u0193\x03\x02\x02\x02\u0194" +
		"\u0195\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196\u0197\x07)\x02" +
		"\x02\u0197\u0198\x05:\x1E\x02\u0198I\x03\x02\x02\x02\u0199\u019A\x07b" +
		"\x02\x02\u019AK\x03\x02\x02\x027OUdjlw\x7F\x8D\x8F\x97\x9F\xA4\xAA\xB5" +
		"\xBD\xC5\xC9\xD4\xD8\xDA\xDD\xE1\xE4\xEF\xF3\xF6\xF9\xFF\u0102\u0106\u0109" +
		"\u0110\u0119\u011F\u0121\u012A\u012D\u0135\u0138\u013E\u0141\u0143\u014F" +
		"\u0152\u015A\u015C\u016A\u0175\u017B\u0183\u018D\u018F\u0194";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!RalphParser.__ATN) {
			RalphParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(RalphParser._serializedATN));
		}

		return RalphParser.__ATN;
	}

}

export class SourceFileContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(RalphParser.EOF, 0); }
	public importDecl(): ImportDeclContext[];
	public importDecl(i: number): ImportDeclContext;
	public importDecl(i?: number): ImportDeclContext | ImportDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportDeclContext);
		} else {
			return this.getRuleContext(i, ImportDeclContext);
		}
	}
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_sourceFile; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterSourceFile) {
			listener.enterSourceFile(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitSourceFile) {
			listener.exitSourceFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitSourceFile) {
			return visitor.visitSourceFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDeclContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(RalphParser.IMPORT, 0); }
	public string_(): String_Context {
		return this.getRuleContext(0, String_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_importDecl; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterImportDecl) {
			listener.enterImportDecl(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitImportDecl) {
			listener.exitImportDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitImportDecl) {
			return visitor.visitImportDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public typeDeclStmt(): TypeDeclStmtContext {
		return this.getRuleContext(0, TypeDeclStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_declaration; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.IDENTIFIER);
		} else {
			return this.getToken(RalphParser.IDENTIFIER, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.COMMA);
		} else {
			return this.getToken(RalphParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_identifierList; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterIdentifierList) {
			listener.enterIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitIdentifierList) {
			listener.exitIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitIdentifierList) {
			return visitor.visitIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarDeclContext extends ParserRuleContext {
	public CONST(): TerminalNode | undefined { return this.tryGetToken(RalphParser.CONST, 0); }
	public LET(): TerminalNode | undefined { return this.tryGetToken(RalphParser.LET, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(RalphParser.IDENTIFIER, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.ASSIGN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.L_PAREN, 0); }
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_PAREN, 0); }
	public MUT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.MUT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_varDecl; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterVarDecl) {
			listener.enterVarDecl(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitVarDecl) {
			listener.exitVarDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitVarDecl) {
			return visitor.visitVarDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public primaryExpr(): PrimaryExprContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExprContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(RalphParser.IDENTIFIER, 0); }
	public methodCall(): MethodCallContext | undefined {
		return this.tryGetRuleContext(0, MethodCallContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public SUB(): TerminalNode | undefined { return this.tryGetToken(RalphParser.SUB, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.NOT, 0); }
	public CONCAT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.CONCAT, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(RalphParser.ADD, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(RalphParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(RalphParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(RalphParser.MOD, 0); }
	public MODADD(): TerminalNode | undefined { return this.tryGetToken(RalphParser.MODADD, 0); }
	public MODSUB(): TerminalNode | undefined { return this.tryGetToken(RalphParser.MODSUB, 0); }
	public MODMUL(): TerminalNode | undefined { return this.tryGetToken(RalphParser.MODMUL, 0); }
	public SHL(): TerminalNode | undefined { return this.tryGetToken(RalphParser.SHL, 0); }
	public SHR(): TerminalNode | undefined { return this.tryGetToken(RalphParser.SHR, 0); }
	public BITAND(): TerminalNode | undefined { return this.tryGetToken(RalphParser.BITAND, 0); }
	public XOR(): TerminalNode | undefined { return this.tryGetToken(RalphParser.XOR, 0); }
	public BITOR(): TerminalNode | undefined { return this.tryGetToken(RalphParser.BITOR, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(RalphParser.EQ, 0); }
	public NQ(): TerminalNode | undefined { return this.tryGetToken(RalphParser.NQ, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.LT, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(RalphParser.LE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.GT, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(RalphParser.GE, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(RalphParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(RalphParser.OR, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_expression; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.COMMA);
		} else {
			return this.getToken(RalphParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodCallContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.IDENTIFIER);
		} else {
			return this.getToken(RalphParser.IDENTIFIER, i);
		}
	}
	public L_PAREN(): TerminalNode { return this.getToken(RalphParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(RalphParser.R_PAREN, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.DOT);
		} else {
			return this.getToken(RalphParser.DOT, i);
		}
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_methodCall; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterMethodCall) {
			listener.enterMethodCall(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitMethodCall) {
			listener.exitMethodCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitMethodCall) {
			return visitor.visitMethodCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExprContext extends ParserRuleContext {
	public basicLit(): BasicLitContext | undefined {
		return this.tryGetRuleContext(0, BasicLitContext);
	}
	public arrayExpr(): ArrayExprContext | undefined {
		return this.tryGetRuleContext(0, ArrayExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_primaryExpr; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterPrimaryExpr) {
			listener.enterPrimaryExpr(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitPrimaryExpr) {
			listener.exitPrimaryExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitPrimaryExpr) {
			return visitor.visitPrimaryExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimitiveTypeContext extends ParserRuleContext {
	public BOOL(): TerminalNode | undefined { return this.tryGetToken(RalphParser.BOOL, 0); }
	public I256(): TerminalNode | undefined { return this.tryGetToken(RalphParser.I256, 0); }
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(RalphParser.BYTE, 0); }
	public U256(): TerminalNode | undefined { return this.tryGetToken(RalphParser.U256, 0); }
	public BYTEVEC(): TerminalNode | undefined { return this.tryGetToken(RalphParser.BYTEVEC, 0); }
	public ADDRESS(): TerminalNode | undefined { return this.tryGetToken(RalphParser.ADDRESS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_primitiveType; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterPrimitiveType) {
			listener.enterPrimitiveType(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitPrimitiveType) {
			listener.exitPrimitiveType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitPrimitiveType) {
			return visitor.visitPrimitiveType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayTypeContext extends ParserRuleContext {
	public L_BRACKET(): TerminalNode { return this.getToken(RalphParser.L_BRACKET, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public SEMI(): TerminalNode { return this.getToken(RalphParser.SEMI, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public R_BRACKET(): TerminalNode { return this.getToken(RalphParser.R_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_arrayType; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterArrayType) {
			listener.enterArrayType(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitArrayType) {
			listener.exitArrayType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitArrayType) {
			return visitor.visitArrayType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayExprContext extends ParserRuleContext {
	public L_BRACKET(): TerminalNode { return this.getToken(RalphParser.L_BRACKET, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public R_BRACKET(): TerminalNode { return this.getToken(RalphParser.R_BRACKET, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(RalphParser.IDENTIFIER, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.COMMA);
		} else {
			return this.getToken(RalphParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_arrayExpr; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterArrayExpr) {
			listener.enterArrayExpr(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitArrayExpr) {
			listener.exitArrayExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitArrayExpr) {
			return visitor.visitArrayExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_Context extends ParserRuleContext {
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(RalphParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_type_; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterType_) {
			listener.enterType_(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitType_) {
			listener.exitType_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitType_) {
			return visitor.visitType_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDeclStmtContext extends ParserRuleContext {
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	public typeStruct(): TypeStructContext | undefined {
		return this.tryGetRuleContext(0, TypeStructContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_typeDeclStmt; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterTypeDeclStmt) {
			listener.enterTypeDeclStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitTypeDeclStmt) {
			listener.exitTypeDeclStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitTypeDeclStmt) {
			return visitor.visitTypeDeclStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResultContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_PAREN, 0); }
	public type_(): Type_Context[];
	public type_(i: number): Type_Context;
	public type_(i?: number): Type_Context | Type_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Type_Context);
		} else {
			return this.getRuleContext(i, Type_Context);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.COMMA);
		} else {
			return this.getToken(RalphParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_result; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterResult) {
			listener.enterResult(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitResult) {
			listener.exitResult(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitResult) {
			return visitor.visitResult(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.IDENTIFIER);
		} else {
			return this.getToken(RalphParser.IDENTIFIER, i);
		}
	}
	public COLON(): TerminalNode { return this.getToken(RalphParser.COLON, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public AT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.AT, 0); }
	public MUT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.MUT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_param; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterParam) {
			listener.enterParam(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitParam) {
			listener.exitParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitParam) {
			return visitor.visitParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamListContext extends ParserRuleContext {
	public param(): ParamContext[];
	public param(i: number): ParamContext;
	public param(i?: number): ParamContext | ParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParamContext);
		} else {
			return this.getRuleContext(i, ParamContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.COMMA);
		} else {
			return this.getToken(RalphParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_paramList; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterParamList) {
			listener.enterParamList(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitParamList) {
			listener.exitParamList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitParamList) {
			return visitor.visitParamList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDeclContext extends ParserRuleContext {
	public FN(): TerminalNode { return this.getToken(RalphParser.FN, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(RalphParser.IDENTIFIER, 0); }
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUB(): TerminalNode | undefined { return this.tryGetToken(RalphParser.PUB, 0); }
	public PAYABLE(): TerminalNode | undefined { return this.tryGetToken(RalphParser.PAYABLE, 0); }
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_PAREN, 0); }
	public R_ARROW(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_ARROW, 0); }
	public result(): ResultContext | undefined {
		return this.tryGetRuleContext(0, ResultContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_methodDecl; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterMethodDecl) {
			listener.enterMethodDecl(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitMethodDecl) {
			listener.exitMethodDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitMethodDecl) {
			return visitor.visitMethodDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BasicLitContext extends ParserRuleContext {
	public integer(): IntegerContext | undefined {
		return this.tryGetRuleContext(0, IntegerContext);
	}
	public string_(): String_Context | undefined {
		return this.tryGetRuleContext(0, String_Context);
	}
	public BOOL_LIT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.BOOL_LIT, 0); }
	public ADDRESS_LIT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.ADDRESS_LIT, 0); }
	public ALPH_LIT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.ALPH_LIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_basicLit; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterBasicLit) {
			listener.enterBasicLit(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitBasicLit) {
			listener.exitBasicLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitBasicLit) {
			return visitor.visitBasicLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntegerContext extends ParserRuleContext {
	public DECIMAL_LIT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.DECIMAL_LIT, 0); }
	public BINARY_LIT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.BINARY_LIT, 0); }
	public OCTAL_LIT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.OCTAL_LIT, 0); }
	public HEX_LIT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.HEX_LIT, 0); }
	public IMAGINARY_LIT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.IMAGINARY_LIT, 0); }
	public RUNE_LIT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.RUNE_LIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_integer; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterInteger) {
			listener.enterInteger(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitInteger) {
			listener.exitInteger(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitInteger) {
			return visitor.visitInteger(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class String_Context extends ParserRuleContext {
	public RAW_STRING_LIT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.RAW_STRING_LIT, 0); }
	public INTERPRETED_STRING_LIT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.INTERPRETED_STRING_LIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_string_; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterString_) {
			listener.enterString_(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitString_) {
			listener.exitString_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitString_) {
			return visitor.visitString_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeStructContext extends ParserRuleContext {
	public txScript(): TxScriptContext | undefined {
		return this.tryGetRuleContext(0, TxScriptContext);
	}
	public contract(): ContractContext | undefined {
		return this.tryGetRuleContext(0, ContractContext);
	}
	public interface(): InterfaceContext | undefined {
		return this.tryGetRuleContext(0, InterfaceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_typeStruct; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterTypeStruct) {
			listener.enterTypeStruct(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitTypeStruct) {
			listener.exitTypeStruct(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitTypeStruct) {
			return visitor.visitTypeStruct(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeStructBodyContext extends ParserRuleContext {
	public L_CURLY(): TerminalNode { return this.getToken(RalphParser.L_CURLY, 0); }
	public R_CURLY(): TerminalNode { return this.getToken(RalphParser.R_CURLY, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public eventEmit(): EventEmitContext[];
	public eventEmit(i: number): EventEmitContext;
	public eventEmit(i?: number): EventEmitContext | EventEmitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EventEmitContext);
		} else {
			return this.getRuleContext(i, EventEmitContext);
		}
	}
	public methodDecl(): MethodDeclContext[];
	public methodDecl(i: number): MethodDeclContext;
	public methodDecl(i?: number): MethodDeclContext | MethodDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MethodDeclContext);
		} else {
			return this.getRuleContext(i, MethodDeclContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_typeStructBody; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterTypeStructBody) {
			listener.enterTypeStructBody(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitTypeStructBody) {
			listener.exitTypeStructBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitTypeStructBody) {
			return visitor.visitTypeStructBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TxScriptContext extends ParserRuleContext {
	public TXSCRIPT(): TerminalNode { return this.getToken(RalphParser.TXSCRIPT, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(RalphParser.IDENTIFIER, 0); }
	public typeStructBody(): TypeStructBodyContext {
		return this.getRuleContext(0, TypeStructBodyContext);
	}
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_PAREN, 0); }
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_txScript; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterTxScript) {
			listener.enterTxScript(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitTxScript) {
			listener.exitTxScript(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitTxScript) {
			return visitor.visitTxScript(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContractContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.IDENTIFIER);
		} else {
			return this.getToken(RalphParser.IDENTIFIER, i);
		}
	}
	public typeStructBody(): TypeStructBodyContext {
		return this.getRuleContext(0, TypeStructBodyContext);
	}
	public TXCONTRACT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.TXCONTRACT, 0); }
	public CONTRACT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.CONTRACT, 0); }
	public L_PAREN(): TerminalNode[];
	public L_PAREN(i: number): TerminalNode;
	public L_PAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.L_PAREN);
		} else {
			return this.getToken(RalphParser.L_PAREN, i);
		}
	}
	public R_PAREN(): TerminalNode[];
	public R_PAREN(i: number): TerminalNode;
	public R_PAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.R_PAREN);
		} else {
			return this.getToken(RalphParser.R_PAREN, i);
		}
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(RalphParser.EXTENDS, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(RalphParser.IMPLEMENTS, 0); }
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_contract; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterContract) {
			listener.enterContract(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitContract) {
			listener.exitContract(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitContract) {
			return visitor.visitContract(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceContext extends ParserRuleContext {
	public INTERFACE(): TerminalNode { return this.getToken(RalphParser.INTERFACE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(RalphParser.IDENTIFIER, 0); }
	public typeStructBody(): TypeStructBodyContext {
		return this.getRuleContext(0, TypeStructBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_interface; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterInterface) {
			listener.enterInterface(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitInterface) {
			listener.exitInterface(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitInterface) {
			return visitor.visitInterface(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventEmitContext extends ParserRuleContext {
	public EVENT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.EVENT, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(RalphParser.IDENTIFIER, 0); }
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_PAREN, 0); }
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
	public EVMIT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.EVMIT, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_eventEmit; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterEventEmit) {
			listener.enterEventEmit(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitEventEmit) {
			listener.exitEventEmit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitEventEmit) {
			return visitor.visitEventEmit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(RalphParser.AT, 0); }
	public USING(): TerminalNode { return this.getToken(RalphParser.USING, 0); }
	public L_PAREN(): TerminalNode { return this.getToken(RalphParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(RalphParser.R_PAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_annotation; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterAnnotation) {
			listener.enterAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitAnnotation) {
			listener.exitAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitAnnotation) {
			return visitor.visitAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public L_CURLY(): TerminalNode { return this.getToken(RalphParser.L_CURLY, 0); }
	public R_CURLY(): TerminalNode { return this.getToken(RalphParser.R_CURLY, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_block; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public simpleStmt(): SimpleStmtContext | undefined {
		return this.tryGetRuleContext(0, SimpleStmtContext);
	}
	public returnStmt(): ReturnStmtContext | undefined {
		return this.tryGetRuleContext(0, ReturnStmtContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public ifStmt(): IfStmtContext | undefined {
		return this.tryGetRuleContext(0, IfStmtContext);
	}
	public whileStmt(): WhileStmtContext | undefined {
		return this.tryGetRuleContext(0, WhileStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_statement; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleStmtContext extends ParserRuleContext {
	public emptyStmt(): EmptyStmtContext | undefined {
		return this.tryGetRuleContext(0, EmptyStmtContext);
	}
	public varDecl(): VarDeclContext | undefined {
		return this.tryGetRuleContext(0, VarDeclContext);
	}
	public expressionStmt(): ExpressionStmtContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStmtContext);
	}
	public eventEmit(): EventEmitContext | undefined {
		return this.tryGetRuleContext(0, EventEmitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_simpleStmt; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterSimpleStmt) {
			listener.enterSimpleStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitSimpleStmt) {
			listener.exitSimpleStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitSimpleStmt) {
			return visitor.visitSimpleStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStmtContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_expressionStmt; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterExpressionStmt) {
			listener.enterExpressionStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitExpressionStmt) {
			listener.exitExpressionStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitExpressionStmt) {
			return visitor.visitExpressionStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyStmtContext extends ParserRuleContext {
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_emptyStmt; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterEmptyStmt) {
			listener.enterEmptyStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitEmptyStmt) {
			listener.exitEmptyStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitEmptyStmt) {
			return visitor.visitEmptyStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStmtContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(RalphParser.RETURN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_returnStmt; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterReturnStmt) {
			listener.enterReturnStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitReturnStmt) {
			listener.exitReturnStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitReturnStmt) {
			return visitor.visitReturnStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStmtContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(RalphParser.IF, 0); }
	public L_PAREN(): TerminalNode { return this.getToken(RalphParser.L_PAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public R_PAREN(): TerminalNode { return this.getToken(RalphParser.R_PAREN, 0); }
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(RalphParser.ELSE, 0); }
	public ifStmt(): IfStmtContext | undefined {
		return this.tryGetRuleContext(0, IfStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_ifStmt; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterIfStmt) {
			listener.enterIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitIfStmt) {
			listener.exitIfStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitIfStmt) {
			return visitor.visitIfStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStmtContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(RalphParser.WHILE, 0); }
	public L_PAREN(): TerminalNode { return this.getToken(RalphParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(RalphParser.R_PAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_whileStmt; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterWhileStmt) {
			listener.enterWhileStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitWhileStmt) {
			listener.exitWhileStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitWhileStmt) {
			return visitor.visitWhileStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EosContext extends ParserRuleContext {
	public EOS(): TerminalNode { return this.getToken(RalphParser.EOS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_eos; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterEos) {
			listener.enterEos(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitEos) {
			listener.exitEos(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitEos) {
			return visitor.visitEos(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}



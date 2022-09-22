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
	public static readonly LET = 17;
	public static readonly CONST = 18;
	public static readonly MUT = 19;
	public static readonly ALPH = 20;
	public static readonly EXTENDS = 21;
	public static readonly ABSTRACT = 22;
	public static readonly IMPLEMENTS = 23;
	public static readonly EVENT = 24;
	public static readonly EVMIT = 25;
	public static readonly USING = 26;
	public static readonly AT = 27;
	public static readonly BOOL = 28;
	public static readonly I256 = 29;
	public static readonly U256 = 30;
	public static readonly BYTE = 31;
	public static readonly BYTEVEC = 32;
	public static readonly ADDRESS = 33;
	public static readonly R_ARROW = 34;
	public static readonly IDENTIFIER = 35;
	public static readonly L_PAREN = 36;
	public static readonly R_PAREN = 37;
	public static readonly L_CURLY = 38;
	public static readonly R_CURLY = 39;
	public static readonly L_BRACKET = 40;
	public static readonly R_BRACKET = 41;
	public static readonly ASSIGN = 42;
	public static readonly COMMA = 43;
	public static readonly SEMI = 44;
	public static readonly COLON = 45;
	public static readonly DOT = 46;
	public static readonly CONCAT = 47;
	public static readonly ADD = 48;
	public static readonly SUB = 49;
	public static readonly MUL = 50;
	public static readonly DIV = 51;
	public static readonly MOD = 52;
	public static readonly MODADD = 53;
	public static readonly MODSUB = 54;
	public static readonly MODMUL = 55;
	public static readonly SHL = 56;
	public static readonly SHR = 57;
	public static readonly BITAND = 58;
	public static readonly XOR = 59;
	public static readonly BITOR = 60;
	public static readonly EQ = 61;
	public static readonly NQ = 62;
	public static readonly LT = 63;
	public static readonly LE = 64;
	public static readonly GT = 65;
	public static readonly GE = 66;
	public static readonly AND = 67;
	public static readonly OR = 68;
	public static readonly NOT = 69;
	public static readonly DECIMAL_LIT = 70;
	public static readonly BINARY_LIT = 71;
	public static readonly OCTAL_LIT = 72;
	public static readonly HEX_LIT = 73;
	public static readonly FLOAT_LIT = 74;
	public static readonly DECIMAL_FLOAT_LIT = 75;
	public static readonly HEX_FLOAT_LIT = 76;
	public static readonly IMAGINARY_LIT = 77;
	public static readonly RUNE_LIT = 78;
	public static readonly BYTE_VALUE = 79;
	public static readonly OCTAL_BYTE_VALUE = 80;
	public static readonly HEX_BYTE_VALUE = 81;
	public static readonly LITTLE_U_VALUE = 82;
	public static readonly BIG_U_VALUE = 83;
	public static readonly RAW_STRING_LIT = 84;
	public static readonly INTERPRETED_STRING_LIT = 85;
	public static readonly WS = 86;
	public static readonly COMMENT = 87;
	public static readonly TERMINATOR = 88;
	public static readonly LINE_COMMENT = 89;
	public static readonly EOS = 90;
	public static readonly RULE_sourceFile = 0;
	public static readonly RULE_importDecl = 1;
	public static readonly RULE_declaration = 2;
	public static readonly RULE_identifierList = 3;
	public static readonly RULE_constDecl = 4;
	public static readonly RULE_letDecl = 5;
	public static readonly RULE_expression = 6;
	public static readonly RULE_expressionList = 7;
	public static readonly RULE_arrayExpr = 8;
	public static readonly RULE_methodExpr = 9;
	public static readonly RULE_primaryExpr = 10;
	public static readonly RULE_primitiveType = 11;
	public static readonly RULE_arrayType = 12;
	public static readonly RULE_arrayLength = 13;
	public static readonly RULE_typeDecl = 14;
	public static readonly RULE_result = 15;
	public static readonly RULE_parameterDecl = 16;
	public static readonly RULE_methodDecl = 17;
	public static readonly RULE_basicLit = 18;
	public static readonly RULE_integer = 19;
	public static readonly RULE_fieldDecl = 20;
	public static readonly RULE_string_ = 21;
	public static readonly RULE_typeStruct = 22;
	public static readonly RULE_typeParam = 23;
	public static readonly RULE_typeStructHeader = 24;
	public static readonly RULE_typeStructBody = 25;
	public static readonly RULE_eventEmit = 26;
	public static readonly RULE_annotation = 27;
	public static readonly RULE_assignParamList = 28;
	public static readonly RULE_assign = 29;
	public static readonly RULE_block = 30;
	public static readonly RULE_statementList = 31;
	public static readonly RULE_statement = 32;
	public static readonly RULE_simpleStmt = 33;
	public static readonly RULE_expressionStmt = 34;
	public static readonly RULE_emptyStmt = 35;
	public static readonly RULE_returnStmt = 36;
	public static readonly RULE_ifStmt = 37;
	public static readonly RULE_whileStmt = 38;
	public static readonly RULE_eos = 39;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sourceFile", "importDecl", "declaration", "identifierList", "constDecl", 
		"letDecl", "expression", "expressionList", "arrayExpr", "methodExpr", 
		"primaryExpr", "primitiveType", "arrayType", "arrayLength", "typeDecl", 
		"result", "parameterDecl", "methodDecl", "basicLit", "integer", "fieldDecl", 
		"string_", "typeStruct", "typeParam", "typeStructHeader", "typeStructBody", 
		"eventEmit", "annotation", "assignParamList", "assign", "block", "statementList", 
		"statement", "simpleStmt", "expressionStmt", "emptyStmt", "returnStmt", 
		"ifStmt", "whileStmt", "eos",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'import'", "'package'", "'fn'", "'pub'", "'payable'", "'return'", 
		"'Interface'", "'struct'", "'enum'", "'TxScript'", "'TxContract'", "'Contract'", 
		"'AssetScript'", "'if'", "'else'", "'while'", "'let'", "'const'", "'mut'", 
		"'alph'", "'extends'", "'Abstract'", "'implements'", "'event'", "'emit'", 
		"'using'", "'@'", "'Bool'", "'I256'", "'U256'", "'Byte'", "'ByteVec'", 
		"'Address'", "'->'", undefined, "'('", "')'", "'{'", "'}'", "'['", "']'", 
		"'='", "','", "';'", "':'", "'.'", "'++'", "'+'", "'-'", "'*'", "'/'", 
		"'%'", undefined, undefined, undefined, "'<<'", "'>>'", "'&'", "'^'", 
		"'|'", "'=='", "'!='", "'<'", "'<='", "'>'", "'>='", "'&&'", "'||'", "'!'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "IMPORT", "PACKAGE", "FN", "PUB", "PAYABLE", "RETURN", "INTERFACE", 
		"STRUCT", "ENUM", "TXSCRIPT", "TXCONTRACT", "CONTRACT", "ASSETSCRIPT", 
		"IF", "ELSE", "WHILE", "LET", "CONST", "MUT", "ALPH", "EXTENDS", "ABSTRACT", 
		"IMPLEMENTS", "EVENT", "EVMIT", "USING", "AT", "BOOL", "I256", "U256", 
		"BYTE", "BYTEVEC", "ADDRESS", "R_ARROW", "IDENTIFIER", "L_PAREN", "R_PAREN", 
		"L_CURLY", "R_CURLY", "L_BRACKET", "R_BRACKET", "ASSIGN", "COMMA", "SEMI", 
		"COLON", "DOT", "CONCAT", "ADD", "SUB", "MUL", "DIV", "MOD", "MODADD", 
		"MODSUB", "MODMUL", "SHL", "SHR", "BITAND", "XOR", "BITOR", "EQ", "NQ", 
		"LT", "LE", "GT", "GE", "AND", "OR", "NOT", "DECIMAL_LIT", "BINARY_LIT", 
		"OCTAL_LIT", "HEX_LIT", "FLOAT_LIT", "DECIMAL_FLOAT_LIT", "HEX_FLOAT_LIT", 
		"IMAGINARY_LIT", "RUNE_LIT", "BYTE_VALUE", "OCTAL_BYTE_VALUE", "HEX_BYTE_VALUE", 
		"LITTLE_U_VALUE", "BIG_U_VALUE", "RAW_STRING_LIT", "INTERPRETED_STRING_LIT", 
		"WS", "COMMENT", "TERMINATOR", "LINE_COMMENT", "EOS",
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
			this.state = 85;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.IMPORT) {
				{
				{
				this.state = 80;
				this.importDecl();
				this.state = 81;
				this.eos();
				}
				}
				this.state = 87;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 93;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.INTERFACE) | (1 << RalphParser.STRUCT) | (1 << RalphParser.ENUM) | (1 << RalphParser.TXSCRIPT) | (1 << RalphParser.TXCONTRACT) | (1 << RalphParser.CONTRACT) | (1 << RalphParser.ASSETSCRIPT) | (1 << RalphParser.LET) | (1 << RalphParser.CONST) | (1 << RalphParser.BOOL) | (1 << RalphParser.I256) | (1 << RalphParser.U256) | (1 << RalphParser.BYTE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RalphParser.BYTEVEC - 32)) | (1 << (RalphParser.ADDRESS - 32)) | (1 << (RalphParser.L_BRACKET - 32)))) !== 0)) {
				{
				{
				this.state = 88;
				this.declaration();
				this.state = 89;
				this.eos();
				}
				}
				this.state = 95;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 96;
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this.match(RalphParser.IMPORT);
			this.state = 110;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.RAW_STRING_LIT:
			case RalphParser.INTERPRETED_STRING_LIT:
				{
				this.state = 99;
				this.string_();
				}
				break;
			case RalphParser.L_PAREN:
				{
				this.state = 100;
				this.match(RalphParser.L_PAREN);
				this.state = 106;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === RalphParser.RAW_STRING_LIT || _la === RalphParser.INTERPRETED_STRING_LIT) {
					{
					{
					this.state = 101;
					this.string_();
					this.state = 102;
					this.eos();
					}
					}
					this.state = 108;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 109;
				this.match(RalphParser.R_PAREN);
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
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, RalphParser.RULE_declaration);
		try {
			this.state = 115;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.CONST:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 112;
				this.constDecl();
				}
				break;
			case RalphParser.INTERFACE:
			case RalphParser.STRUCT:
			case RalphParser.ENUM:
			case RalphParser.TXSCRIPT:
			case RalphParser.TXCONTRACT:
			case RalphParser.CONTRACT:
			case RalphParser.ASSETSCRIPT:
			case RalphParser.BOOL:
			case RalphParser.I256:
			case RalphParser.U256:
			case RalphParser.BYTE:
			case RalphParser.BYTEVEC:
			case RalphParser.ADDRESS:
			case RalphParser.L_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 113;
				this.typeDecl();
				}
				break;
			case RalphParser.LET:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 114;
				this.letDecl();
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
	public identifierList(): IdentifierListContext {
		let _localctx: IdentifierListContext = new IdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, RalphParser.RULE_identifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117;
			this.match(RalphParser.IDENTIFIER);
			this.state = 122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.COMMA) {
				{
				{
				this.state = 118;
				this.match(RalphParser.COMMA);
				this.state = 119;
				this.match(RalphParser.IDENTIFIER);
				}
				}
				this.state = 124;
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
	public constDecl(): ConstDeclContext {
		let _localctx: ConstDeclContext = new ConstDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, RalphParser.RULE_constDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this.match(RalphParser.CONST);
			this.state = 127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.L_PAREN) {
				{
				this.state = 126;
				this.match(RalphParser.L_PAREN);
				}
			}

			this.state = 129;
			this.identifierList();
			this.state = 131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.R_PAREN) {
				{
				this.state = 130;
				this.match(RalphParser.R_PAREN);
				}
			}

			this.state = 133;
			this.match(RalphParser.ASSIGN);
			this.state = 134;
			this.expressionList();
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
	public letDecl(): LetDeclContext {
		let _localctx: LetDeclContext = new LetDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, RalphParser.RULE_letDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 136;
			this.match(RalphParser.LET);
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.MUT) {
				{
				this.state = 137;
				this.match(RalphParser.MUT);
				}
			}

			this.state = 141;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.L_PAREN) {
				{
				this.state = 140;
				this.match(RalphParser.L_PAREN);
				}
			}

			this.state = 143;
			this.identifierList();
			this.state = 145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.R_PAREN) {
				{
				this.state = 144;
				this.match(RalphParser.R_PAREN);
				}
			}

			this.state = 147;
			this.match(RalphParser.ASSIGN);
			this.state = 148;
			this.expressionList();
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
		let _startState: number = 12;
		this.enterRecursionRule(_localctx, 12, RalphParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.IDENTIFIER:
			case RalphParser.L_BRACKET:
			case RalphParser.DECIMAL_LIT:
			case RalphParser.BINARY_LIT:
			case RalphParser.OCTAL_LIT:
			case RalphParser.HEX_LIT:
			case RalphParser.IMAGINARY_LIT:
			case RalphParser.RUNE_LIT:
			case RalphParser.RAW_STRING_LIT:
			case RalphParser.INTERPRETED_STRING_LIT:
				{
				this.state = 151;
				this.primaryExpr();
				}
				break;
			case RalphParser.SUB:
			case RalphParser.NOT:
				{
				this.state = 152;
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
				this.state = 153;
				this.expression(4);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 167;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 165;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, RalphParser.RULE_expression);
						this.state = 156;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 157;
						_la = this._input.LA(1);
						if (!(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (RalphParser.CONCAT - 47)) | (1 << (RalphParser.ADD - 47)) | (1 << (RalphParser.SUB - 47)) | (1 << (RalphParser.MUL - 47)) | (1 << (RalphParser.DIV - 47)) | (1 << (RalphParser.MOD - 47)) | (1 << (RalphParser.MODADD - 47)) | (1 << (RalphParser.MODSUB - 47)) | (1 << (RalphParser.MODMUL - 47)) | (1 << (RalphParser.SHL - 47)) | (1 << (RalphParser.SHR - 47)) | (1 << (RalphParser.BITAND - 47)) | (1 << (RalphParser.XOR - 47)) | (1 << (RalphParser.BITOR - 47)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 158;
						this.expression(4);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, RalphParser.RULE_expression);
						this.state = 159;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 160;
						_la = this._input.LA(1);
						if (!(((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (RalphParser.EQ - 61)) | (1 << (RalphParser.NQ - 61)) | (1 << (RalphParser.LT - 61)) | (1 << (RalphParser.LE - 61)) | (1 << (RalphParser.GT - 61)) | (1 << (RalphParser.GE - 61)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 161;
						this.expression(3);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, RalphParser.RULE_expression);
						this.state = 162;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 163;
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
						this.state = 164;
						this.expression(2);
						}
						break;
					}
					}
				}
				this.state = 169;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
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
		this.enterRule(_localctx, 14, RalphParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 170;
			this.expression(0);
			this.state = 175;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.COMMA) {
				{
				{
				this.state = 171;
				this.match(RalphParser.COMMA);
				this.state = 172;
				this.expression(0);
				}
				}
				this.state = 177;
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
	public arrayExpr(): ArrayExprContext {
		let _localctx: ArrayExprContext = new ArrayExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, RalphParser.RULE_arrayExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 178;
			this.match(RalphParser.L_BRACKET);
			this.state = 179;
			this.expression(0);
			this.state = 180;
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
	public methodExpr(): MethodExprContext {
		let _localctx: MethodExprContext = new MethodExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, RalphParser.RULE_methodExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 182;
			this.match(RalphParser.IDENTIFIER);
			this.state = 183;
			this.match(RalphParser.L_PAREN);
			this.state = 184;
			this.expressionList();
			this.state = 185;
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
		this.enterRule(_localctx, 20, RalphParser.RULE_primaryExpr);
		try {
			this.state = 190;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.DECIMAL_LIT:
			case RalphParser.BINARY_LIT:
			case RalphParser.OCTAL_LIT:
			case RalphParser.HEX_LIT:
			case RalphParser.IMAGINARY_LIT:
			case RalphParser.RUNE_LIT:
			case RalphParser.RAW_STRING_LIT:
			case RalphParser.INTERPRETED_STRING_LIT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 187;
				this.basicLit();
				}
				break;
			case RalphParser.L_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 188;
				this.arrayExpr();
				}
				break;
			case RalphParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 189;
				this.methodExpr();
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
		this.enterRule(_localctx, 22, RalphParser.RULE_primitiveType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
			_la = this._input.LA(1);
			if (!(((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & ((1 << (RalphParser.BOOL - 28)) | (1 << (RalphParser.I256 - 28)) | (1 << (RalphParser.U256 - 28)) | (1 << (RalphParser.BYTE - 28)) | (1 << (RalphParser.BYTEVEC - 28)) | (1 << (RalphParser.ADDRESS - 28)))) !== 0))) {
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
		this.enterRule(_localctx, 24, RalphParser.RULE_arrayType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 194;
			this.match(RalphParser.L_BRACKET);
			this.state = 195;
			this.typeDecl();
			this.state = 196;
			this.match(RalphParser.SEMI);
			this.state = 197;
			this.arrayLength();
			this.state = 198;
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
	public arrayLength(): ArrayLengthContext {
		let _localctx: ArrayLengthContext = new ArrayLengthContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, RalphParser.RULE_arrayLength);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 200;
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
	public typeDecl(): TypeDeclContext {
		let _localctx: TypeDeclContext = new TypeDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, RalphParser.RULE_typeDecl);
		try {
			this.state = 205;
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
				this.state = 202;
				this.primitiveType();
				}
				break;
			case RalphParser.L_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 203;
				this.arrayType();
				}
				break;
			case RalphParser.INTERFACE:
			case RalphParser.STRUCT:
			case RalphParser.ENUM:
			case RalphParser.TXSCRIPT:
			case RalphParser.TXCONTRACT:
			case RalphParser.CONTRACT:
			case RalphParser.ASSETSCRIPT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 204;
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
		this.enterRule(_localctx, 30, RalphParser.RULE_result);
		let _la: number;
		try {
			let _alt: number;
			this.state = 225;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 207;
				this.match(RalphParser.L_PAREN);
				this.state = 208;
				this.match(RalphParser.R_PAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 209;
				this.typeDecl();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 210;
				this.match(RalphParser.L_PAREN);
				this.state = 222;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.INTERFACE) | (1 << RalphParser.STRUCT) | (1 << RalphParser.ENUM) | (1 << RalphParser.TXSCRIPT) | (1 << RalphParser.TXCONTRACT) | (1 << RalphParser.CONTRACT) | (1 << RalphParser.ASSETSCRIPT) | (1 << RalphParser.BOOL) | (1 << RalphParser.I256) | (1 << RalphParser.U256) | (1 << RalphParser.BYTE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RalphParser.BYTEVEC - 32)) | (1 << (RalphParser.ADDRESS - 32)) | (1 << (RalphParser.L_BRACKET - 32)))) !== 0)) {
					{
					this.state = 211;
					this.typeDecl();
					this.state = 216;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 212;
							this.match(RalphParser.COMMA);
							this.state = 213;
							this.typeDecl();
							}
							}
						}
						this.state = 218;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
					}
					this.state = 220;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RalphParser.COMMA) {
						{
						this.state = 219;
						this.match(RalphParser.COMMA);
						}
					}

					}
				}

				this.state = 224;
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
	public parameterDecl(): ParameterDeclContext {
		let _localctx: ParameterDeclContext = new ParameterDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, RalphParser.RULE_parameterDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 227;
			this.match(RalphParser.IDENTIFIER);
			this.state = 228;
			this.match(RalphParser.COLON);
			this.state = 229;
			this.typeDecl();
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
			this.state = 234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.AT || _la === RalphParser.EOS) {
				{
				this.state = 231;
				this.annotation();
				this.state = 232;
				this.match(RalphParser.EOS);
				}
			}

			this.state = 237;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.PUB) {
				{
				this.state = 236;
				this.match(RalphParser.PUB);
				}
			}

			this.state = 239;
			this.match(RalphParser.FN);
			this.state = 241;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.PAYABLE) {
				{
				this.state = 240;
				this.match(RalphParser.PAYABLE);
				}
			}

			this.state = 243;
			this.match(RalphParser.IDENTIFIER);
			this.state = 244;
			this.match(RalphParser.L_PAREN);
			this.state = 253;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.IDENTIFIER) {
				{
				this.state = 245;
				this.parameterDecl();
				this.state = 250;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === RalphParser.COMMA) {
					{
					{
					this.state = 246;
					this.match(RalphParser.COMMA);
					this.state = 247;
					this.parameterDecl();
					}
					}
					this.state = 252;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 255;
			this.match(RalphParser.R_PAREN);
			this.state = 258;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.R_ARROW) {
				{
				this.state = 256;
				this.match(RalphParser.R_ARROW);
				this.state = 257;
				this.result();
				}
			}

			this.state = 261;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.L_CURLY) {
				{
				this.state = 260;
				this.block();
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
	public basicLit(): BasicLitContext {
		let _localctx: BasicLitContext = new BasicLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, RalphParser.RULE_basicLit);
		try {
			this.state = 265;
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
				this.state = 263;
				this.integer();
				}
				break;
			case RalphParser.RAW_STRING_LIT:
			case RalphParser.INTERPRETED_STRING_LIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 264;
				this.string_();
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
			this.state = 267;
			_la = this._input.LA(1);
			if (!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (RalphParser.DECIMAL_LIT - 70)) | (1 << (RalphParser.BINARY_LIT - 70)) | (1 << (RalphParser.OCTAL_LIT - 70)) | (1 << (RalphParser.HEX_LIT - 70)) | (1 << (RalphParser.IMAGINARY_LIT - 70)) | (1 << (RalphParser.RUNE_LIT - 70)))) !== 0))) {
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
	public fieldDecl(): FieldDeclContext {
		let _localctx: FieldDeclContext = new FieldDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, RalphParser.RULE_fieldDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 270;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.LET) {
				{
				this.state = 269;
				this.match(RalphParser.LET);
				}
			}

			this.state = 273;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.MUT) {
				{
				this.state = 272;
				this.match(RalphParser.MUT);
				}
			}

			this.state = 275;
			this.match(RalphParser.IDENTIFIER);
			this.state = 276;
			this.match(RalphParser.COLON);
			this.state = 277;
			this.typeDecl();
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
		this.enterRule(_localctx, 42, RalphParser.RULE_string_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 279;
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
		this.enterRule(_localctx, 44, RalphParser.RULE_typeStruct);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 281;
			this.typeStructHeader();
			this.state = 282;
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
	public typeParam(): TypeParamContext {
		let _localctx: TypeParamContext = new TypeParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, RalphParser.RULE_typeParam);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 284;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.INTERFACE) | (1 << RalphParser.STRUCT) | (1 << RalphParser.ENUM) | (1 << RalphParser.TXSCRIPT) | (1 << RalphParser.TXCONTRACT) | (1 << RalphParser.CONTRACT) | (1 << RalphParser.ASSETSCRIPT))) !== 0))) {
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
	public typeStructHeader(): TypeStructHeaderContext {
		let _localctx: TypeStructHeaderContext = new TypeStructHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, RalphParser.RULE_typeStructHeader);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 286;
			this.typeParam();
			this.state = 287;
			this.match(RalphParser.IDENTIFIER);
			this.state = 298;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.LT) {
				{
				this.state = 288;
				this.match(RalphParser.LT);
				this.state = 294;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (RalphParser.LET - 17)) | (1 << (RalphParser.MUT - 17)) | (1 << (RalphParser.IDENTIFIER - 17)))) !== 0)) {
					{
					{
					this.state = 289;
					this.fieldDecl();
					this.state = 290;
					this.eos();
					}
					}
					this.state = 296;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 297;
				this.match(RalphParser.GT);
				}
			}

			this.state = 310;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.L_PAREN) {
				{
				this.state = 300;
				this.match(RalphParser.L_PAREN);
				this.state = 306;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (RalphParser.LET - 17)) | (1 << (RalphParser.MUT - 17)) | (1 << (RalphParser.IDENTIFIER - 17)))) !== 0)) {
					{
					{
					this.state = 301;
					this.fieldDecl();
					this.state = 302;
					this.eos();
					}
					}
					this.state = 308;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 309;
				this.match(RalphParser.R_PAREN);
				}
			}

			this.state = 326;
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
				this.state = 324;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RalphParser.L_PAREN) {
					{
					this.state = 314;
					this.match(RalphParser.L_PAREN);
					this.state = 320;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (RalphParser.LET - 17)) | (1 << (RalphParser.MUT - 17)) | (1 << (RalphParser.IDENTIFIER - 17)))) !== 0)) {
						{
						{
						this.state = 315;
						this.fieldDecl();
						this.state = 316;
						this.eos();
						}
						}
						this.state = 322;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 323;
					this.match(RalphParser.R_PAREN);
					}
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
	public typeStructBody(): TypeStructBodyContext {
		let _localctx: TypeStructBodyContext = new TypeStructBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, RalphParser.RULE_typeStructBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 328;
			this.match(RalphParser.L_CURLY);
			this.state = 338;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.FN) | (1 << RalphParser.PUB) | (1 << RalphParser.LET) | (1 << RalphParser.MUT) | (1 << RalphParser.EVENT) | (1 << RalphParser.EVMIT) | (1 << RalphParser.AT))) !== 0) || _la === RalphParser.IDENTIFIER || _la === RalphParser.EOS) {
				{
				{
				this.state = 332;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RalphParser.LET:
				case RalphParser.MUT:
				case RalphParser.IDENTIFIER:
					{
					this.state = 329;
					this.fieldDecl();
					}
					break;
				case RalphParser.EVENT:
				case RalphParser.EVMIT:
					{
					this.state = 330;
					this.eventEmit();
					}
					break;
				case RalphParser.FN:
				case RalphParser.PUB:
				case RalphParser.AT:
				case RalphParser.EOS:
					{
					this.state = 331;
					this.methodDecl();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 334;
				this.eos();
				}
				}
				this.state = 340;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 341;
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
	public eventEmit(): EventEmitContext {
		let _localctx: EventEmitContext = new EventEmitContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, RalphParser.RULE_eventEmit);
		let _la: number;
		try {
			this.state = 365;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.EVENT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 343;
				this.match(RalphParser.EVENT);
				this.state = 344;
				this.match(RalphParser.IDENTIFIER);
				this.state = 355;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RalphParser.L_PAREN) {
					{
					this.state = 345;
					this.match(RalphParser.L_PAREN);
					this.state = 351;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (RalphParser.LET - 17)) | (1 << (RalphParser.MUT - 17)) | (1 << (RalphParser.IDENTIFIER - 17)))) !== 0)) {
						{
						{
						this.state = 346;
						this.fieldDecl();
						this.state = 347;
						this.eos();
						}
						}
						this.state = 353;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 354;
					this.match(RalphParser.R_PAREN);
					}
				}

				}
				break;
			case RalphParser.EVMIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 357;
				this.match(RalphParser.EVMIT);
				this.state = 358;
				this.match(RalphParser.IDENTIFIER);
				this.state = 363;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RalphParser.L_PAREN) {
					{
					this.state = 359;
					this.match(RalphParser.L_PAREN);
					this.state = 360;
					this.expressionList();
					this.state = 361;
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 376;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.AT) {
				{
				this.state = 367;
				this.match(RalphParser.AT);
				this.state = 368;
				this.match(RalphParser.USING);
				this.state = 369;
				this.match(RalphParser.L_PAREN);
				this.state = 372;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
				case 1:
					{
					this.state = 370;
					this.assignParamList();
					}
					break;

				case 2:
					{
					this.state = 371;
					this.expressionList();
					}
					break;
				}
				this.state = 374;
				this.match(RalphParser.R_PAREN);
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
	public assignParamList(): AssignParamListContext {
		let _localctx: AssignParamListContext = new AssignParamListContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, RalphParser.RULE_assignParamList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 378;
			this.assign();
			this.state = 383;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.COMMA) {
				{
				{
				this.state = 379;
				this.match(RalphParser.COMMA);
				this.state = 380;
				this.assign();
				}
				}
				this.state = 385;
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
	public assign(): AssignContext {
		let _localctx: AssignContext = new AssignContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, RalphParser.RULE_assign);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 386;
			this.match(RalphParser.IDENTIFIER);
			this.state = 387;
			this.match(RalphParser.ASSIGN);
			this.state = 388;
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
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, RalphParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 390;
			this.match(RalphParser.L_CURLY);
			this.state = 392;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.RETURN) | (1 << RalphParser.INTERFACE) | (1 << RalphParser.STRUCT) | (1 << RalphParser.ENUM) | (1 << RalphParser.TXSCRIPT) | (1 << RalphParser.TXCONTRACT) | (1 << RalphParser.CONTRACT) | (1 << RalphParser.ASSETSCRIPT) | (1 << RalphParser.IF) | (1 << RalphParser.WHILE) | (1 << RalphParser.LET) | (1 << RalphParser.CONST) | (1 << RalphParser.EVENT) | (1 << RalphParser.EVMIT) | (1 << RalphParser.BOOL) | (1 << RalphParser.I256) | (1 << RalphParser.U256) | (1 << RalphParser.BYTE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RalphParser.BYTEVEC - 32)) | (1 << (RalphParser.ADDRESS - 32)) | (1 << (RalphParser.IDENTIFIER - 32)) | (1 << (RalphParser.L_CURLY - 32)) | (1 << (RalphParser.L_BRACKET - 32)) | (1 << (RalphParser.SEMI - 32)) | (1 << (RalphParser.SUB - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (RalphParser.NOT - 69)) | (1 << (RalphParser.DECIMAL_LIT - 69)) | (1 << (RalphParser.BINARY_LIT - 69)) | (1 << (RalphParser.OCTAL_LIT - 69)) | (1 << (RalphParser.HEX_LIT - 69)) | (1 << (RalphParser.IMAGINARY_LIT - 69)) | (1 << (RalphParser.RUNE_LIT - 69)) | (1 << (RalphParser.RAW_STRING_LIT - 69)) | (1 << (RalphParser.INTERPRETED_STRING_LIT - 69)) | (1 << (RalphParser.EOS - 69)))) !== 0)) {
				{
				this.state = 391;
				this.statementList();
				}
			}

			this.state = 394;
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
	public statementList(): StatementListContext {
		let _localctx: StatementListContext = new StatementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, RalphParser.RULE_statementList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 407;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 402;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
				case 1:
					{
					this.state = 397;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
					case 1:
						{
						this.state = 396;
						this.match(RalphParser.SEMI);
						}
						break;
					}
					}
					break;

				case 2:
					{
					this.state = 400;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
					case 1:
						{
						this.state = 399;
						this.match(RalphParser.EOS);
						}
						break;
					}
					}
					break;
				}
				this.state = 404;
				this.statement();
				this.state = 405;
				this.eos();
				}
				}
				this.state = 409;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.RETURN) | (1 << RalphParser.INTERFACE) | (1 << RalphParser.STRUCT) | (1 << RalphParser.ENUM) | (1 << RalphParser.TXSCRIPT) | (1 << RalphParser.TXCONTRACT) | (1 << RalphParser.CONTRACT) | (1 << RalphParser.ASSETSCRIPT) | (1 << RalphParser.IF) | (1 << RalphParser.WHILE) | (1 << RalphParser.LET) | (1 << RalphParser.CONST) | (1 << RalphParser.EVENT) | (1 << RalphParser.EVMIT) | (1 << RalphParser.BOOL) | (1 << RalphParser.I256) | (1 << RalphParser.U256) | (1 << RalphParser.BYTE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RalphParser.BYTEVEC - 32)) | (1 << (RalphParser.ADDRESS - 32)) | (1 << (RalphParser.IDENTIFIER - 32)) | (1 << (RalphParser.L_CURLY - 32)) | (1 << (RalphParser.L_BRACKET - 32)) | (1 << (RalphParser.SEMI - 32)) | (1 << (RalphParser.SUB - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (RalphParser.NOT - 69)) | (1 << (RalphParser.DECIMAL_LIT - 69)) | (1 << (RalphParser.BINARY_LIT - 69)) | (1 << (RalphParser.OCTAL_LIT - 69)) | (1 << (RalphParser.HEX_LIT - 69)) | (1 << (RalphParser.IMAGINARY_LIT - 69)) | (1 << (RalphParser.RUNE_LIT - 69)) | (1 << (RalphParser.RAW_STRING_LIT - 69)) | (1 << (RalphParser.INTERPRETED_STRING_LIT - 69)) | (1 << (RalphParser.EOS - 69)))) !== 0));
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
		this.enterRule(_localctx, 64, RalphParser.RULE_statement);
		try {
			this.state = 417;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 411;
				this.declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 412;
				this.simpleStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 413;
				this.returnStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 414;
				this.block();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 415;
				this.ifStmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 416;
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
		this.enterRule(_localctx, 66, RalphParser.RULE_simpleStmt);
		try {
			this.state = 422;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.SEMI:
			case RalphParser.EOS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 419;
				this.emptyStmt();
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
			case RalphParser.IMAGINARY_LIT:
			case RalphParser.RUNE_LIT:
			case RalphParser.RAW_STRING_LIT:
			case RalphParser.INTERPRETED_STRING_LIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 420;
				this.expressionStmt();
				}
				break;
			case RalphParser.EVENT:
			case RalphParser.EVMIT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 421;
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
		this.enterRule(_localctx, 68, RalphParser.RULE_expressionStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 424;
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
		this.enterRule(_localctx, 70, RalphParser.RULE_emptyStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 426;
			_la = this._input.LA(1);
			if (!(_la === RalphParser.SEMI || _la === RalphParser.EOS)) {
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
	public returnStmt(): ReturnStmtContext {
		let _localctx: ReturnStmtContext = new ReturnStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, RalphParser.RULE_returnStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 428;
			this.match(RalphParser.RETURN);
			this.state = 430;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (RalphParser.IDENTIFIER - 35)) | (1 << (RalphParser.L_BRACKET - 35)) | (1 << (RalphParser.SUB - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (RalphParser.NOT - 69)) | (1 << (RalphParser.DECIMAL_LIT - 69)) | (1 << (RalphParser.BINARY_LIT - 69)) | (1 << (RalphParser.OCTAL_LIT - 69)) | (1 << (RalphParser.HEX_LIT - 69)) | (1 << (RalphParser.IMAGINARY_LIT - 69)) | (1 << (RalphParser.RUNE_LIT - 69)) | (1 << (RalphParser.RAW_STRING_LIT - 69)) | (1 << (RalphParser.INTERPRETED_STRING_LIT - 69)))) !== 0)) {
				{
				this.state = 429;
				this.expressionList();
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
	public ifStmt(): IfStmtContext {
		let _localctx: IfStmtContext = new IfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, RalphParser.RULE_ifStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 432;
			this.match(RalphParser.IF);
			{
			this.state = 433;
			this.expression(0);
			}
			this.state = 434;
			this.block();
			this.state = 440;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.ELSE) {
				{
				this.state = 435;
				this.match(RalphParser.ELSE);
				this.state = 438;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RalphParser.IF:
					{
					this.state = 436;
					this.ifStmt();
					}
					break;
				case RalphParser.L_CURLY:
					{
					this.state = 437;
					this.block();
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
		this.enterRule(_localctx, 76, RalphParser.RULE_whileStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 442;
			this.match(RalphParser.WHILE);
			{
			this.state = 444;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (RalphParser.IDENTIFIER - 35)) | (1 << (RalphParser.L_BRACKET - 35)) | (1 << (RalphParser.SUB - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (RalphParser.NOT - 69)) | (1 << (RalphParser.DECIMAL_LIT - 69)) | (1 << (RalphParser.BINARY_LIT - 69)) | (1 << (RalphParser.OCTAL_LIT - 69)) | (1 << (RalphParser.HEX_LIT - 69)) | (1 << (RalphParser.IMAGINARY_LIT - 69)) | (1 << (RalphParser.RUNE_LIT - 69)) | (1 << (RalphParser.RAW_STRING_LIT - 69)) | (1 << (RalphParser.INTERPRETED_STRING_LIT - 69)))) !== 0)) {
				{
				this.state = 443;
				this.expression(0);
				}
			}

			}
			this.state = 446;
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
		this.enterRule(_localctx, 78, RalphParser.RULE_eos);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 448;
			_la = this._input.LA(1);
			if (!(_la === RalphParser.EOF || _la === RalphParser.SEMI || _la === RalphParser.EOS)) {
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 6:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);

		case 1:
			return this.precpred(this._ctx, 2);

		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\\\u01C5\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x03\x02\x03\x02" +
		"\x03\x02\x07\x02V\n\x02\f\x02\x0E\x02Y\v\x02\x03\x02\x03\x02\x03\x02\x07" +
		"\x02^\n\x02\f\x02\x0E\x02a\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x07\x03k\n\x03\f\x03\x0E\x03n\v\x03\x03\x03\x05" +
		"\x03q\n\x03\x03\x04\x03\x04\x03\x04\x05\x04v\n\x04\x03\x05\x03\x05\x03" +
		"\x05\x07\x05{\n\x05\f\x05\x0E\x05~\v\x05\x03\x06\x03\x06\x05\x06\x82\n" +
		"\x06\x03\x06\x03\x06\x05\x06\x86\n\x06\x03\x06\x03\x06\x03\x06\x03\x07" +
		"\x03\x07\x05\x07\x8D\n\x07\x03\x07\x05\x07\x90\n\x07\x03\x07\x03\x07\x05" +
		"\x07\x94\n\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x05\b\x9D" +
		"\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b\xA8\n" +
		"\b\f\b\x0E\b\xAB\v\b\x03\t\x03\t\x03\t\x07\t\xB0\n\t\f\t\x0E\t\xB3\v\t" +
		"\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03" +
		"\f\x05\f\xC1\n\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x05\x10\xD0\n\x10\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\xD9\n\x11\f\x11" +
		"\x0E\x11\xDC\v\x11\x03\x11\x05\x11\xDF\n\x11\x05\x11\xE1\n\x11\x03\x11" +
		"\x05\x11\xE4\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03" +
		"\x13\x05\x13\xED\n\x13\x03\x13\x05\x13\xF0\n\x13\x03\x13\x03\x13\x05\x13" +
		"\xF4\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\xFB\n\x13\f" +
		"\x13\x0E\x13\xFE\v\x13\x05\x13\u0100\n\x13\x03\x13\x03\x13\x03\x13\x05" +
		"\x13\u0105\n\x13\x03\x13\x05\x13\u0108\n\x13\x03\x14\x03\x14\x05\x14\u010C" +
		"\n\x14\x03\x15\x03\x15\x03\x16\x05\x16\u0111\n\x16\x03\x16\x05\x16\u0114" +
		"\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18" +
		"\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x07\x1A\u0127\n\x1A\f\x1A\x0E\x1A\u012A\v\x1A\x03\x1A\x05\x1A\u012D\n" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u0133\n\x1A\f\x1A\x0E\x1A" +
		"\u0136\v\x1A\x03\x1A\x05\x1A\u0139\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x07\x1A\u0141\n\x1A\f\x1A\x0E\x1A\u0144\v\x1A\x03\x1A" +
		"\x05\x1A\u0147\n\x1A\x05\x1A\u0149\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x05\x1B\u014F\n\x1B\x03\x1B\x03\x1B\x07\x1B\u0153\n\x1B\f\x1B\x0E\x1B" +
		"\u0156\v\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x07\x1C\u0160\n\x1C\f\x1C\x0E\x1C\u0163\v\x1C\x03\x1C\x05\x1C\u0166" +
		"\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u016E\n" +
		"\x1C\x05\x1C\u0170\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D" +
		"\u0177\n\x1D\x03\x1D\x03\x1D\x05\x1D\u017B\n\x1D\x03\x1E\x03\x1E\x03\x1E" +
		"\x07\x1E\u0180\n\x1E\f\x1E\x0E\x1E\u0183\v\x1E\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03 \x03 \x05 \u018B\n \x03 \x03 \x03!\x05!\u0190\n!\x03!\x05" +
		"!\u0193\n!\x05!\u0195\n!\x03!\x03!\x03!\x06!\u019A\n!\r!\x0E!\u019B\x03" +
		"\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u01A4\n\"\x03#\x03#\x03#\x05#\u01A9" +
		"\n#\x03$\x03$\x03%\x03%\x03&\x03&\x05&\u01B1\n&\x03\'\x03\'\x03\'\x03" +
		"\'\x03\'\x03\'\x05\'\u01B9\n\'\x05\'\u01BB\n\'\x03(\x03(\x05(\u01BF\n" +
		"(\x03(\x03(\x03)\x03)\x03)\x02\x02\x03\x0E*\x02\x02\x04\x02\x06\x02\b" +
		"\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02" +
		"\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x02" +
		"6\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
		"\x02\r\x04\x0233GG\x03\x021>\x03\x02?D\x03\x02EF\x03\x02\x1E#\x04\x02" +
		"HKOP\x03\x02VW\x03\x02\t\x0F\x04\x02\x17\x17\x19\x19\x04\x02..\\\\\x04" +
		"\x03..\\\\\x02\u01E1\x02W\x03\x02\x02\x02\x04d\x03\x02\x02\x02\x06u\x03" +
		"\x02\x02\x02\bw\x03\x02\x02\x02\n\x7F\x03\x02\x02\x02\f\x8A\x03\x02\x02" +
		"\x02\x0E\x9C\x03\x02\x02\x02\x10\xAC\x03\x02\x02\x02\x12\xB4\x03\x02\x02" +
		"\x02\x14\xB8\x03\x02\x02\x02\x16\xC0\x03\x02\x02\x02\x18\xC2\x03\x02\x02" +
		"\x02\x1A\xC4\x03\x02\x02\x02\x1C\xCA\x03\x02\x02\x02\x1E\xCF\x03\x02\x02" +
		"\x02 \xE3\x03\x02\x02\x02\"\xE5\x03\x02\x02\x02$\xEC\x03\x02\x02\x02&" +
		"\u010B\x03\x02\x02\x02(\u010D\x03\x02\x02\x02*\u0110\x03\x02\x02\x02," +
		"\u0119\x03\x02\x02\x02.\u011B\x03\x02\x02\x020\u011E\x03\x02\x02\x022" +
		"\u0120\x03\x02\x02\x024\u014A\x03\x02\x02\x026\u016F\x03\x02\x02\x028" +
		"\u017A\x03\x02\x02\x02:\u017C\x03\x02\x02\x02<\u0184\x03\x02\x02\x02>" +
		"\u0188\x03\x02\x02\x02@\u0199\x03\x02\x02\x02B\u01A3\x03\x02\x02\x02D" +
		"\u01A8\x03\x02\x02\x02F\u01AA\x03\x02\x02\x02H\u01AC\x03\x02\x02\x02J" +
		"\u01AE\x03\x02\x02\x02L\u01B2\x03\x02\x02\x02N\u01BC\x03\x02\x02\x02P" +
		"\u01C2\x03\x02\x02\x02RS\x05\x04\x03\x02ST\x05P)\x02TV\x03\x02\x02\x02" +
		"UR\x03\x02\x02\x02VY\x03\x02\x02\x02WU\x03\x02\x02\x02WX\x03\x02\x02\x02" +
		"X_\x03\x02\x02\x02YW\x03\x02\x02\x02Z[\x05\x06\x04\x02[\\\x05P)\x02\\" +
		"^\x03\x02\x02\x02]Z\x03\x02\x02\x02^a\x03\x02\x02\x02_]\x03\x02\x02\x02" +
		"_`\x03\x02\x02\x02`b\x03\x02\x02\x02a_\x03\x02\x02\x02bc\x07\x02\x02\x03" +
		"c\x03\x03\x02\x02\x02dp\x07\x03\x02\x02eq\x05,\x17\x02fl\x07&\x02\x02" +
		"gh\x05,\x17\x02hi\x05P)\x02ik\x03\x02\x02\x02jg\x03\x02\x02\x02kn\x03" +
		"\x02\x02\x02lj\x03\x02\x02\x02lm\x03\x02\x02\x02mo\x03\x02\x02\x02nl\x03" +
		"\x02\x02\x02oq\x07\'\x02\x02pe\x03\x02\x02\x02pf\x03\x02\x02\x02q\x05" +
		"\x03\x02\x02\x02rv\x05\n\x06\x02sv\x05\x1E\x10\x02tv\x05\f\x07\x02ur\x03" +
		"\x02\x02\x02us\x03\x02\x02\x02ut\x03\x02\x02\x02v\x07\x03\x02\x02\x02" +
		"w|\x07%\x02\x02xy\x07-\x02\x02y{\x07%\x02\x02zx\x03\x02\x02\x02{~\x03" +
		"\x02\x02\x02|z\x03\x02\x02\x02|}\x03\x02\x02\x02}\t\x03\x02\x02\x02~|" +
		"\x03\x02\x02\x02\x7F\x81\x07\x14\x02\x02\x80\x82\x07&\x02\x02\x81\x80" +
		"\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\x83\x03\x02\x02\x02\x83\x85" +
		"\x05\b\x05\x02\x84\x86\x07\'\x02\x02\x85\x84\x03\x02\x02\x02\x85\x86\x03" +
		"\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87\x88\x07,\x02\x02\x88\x89\x05" +
		"\x10\t\x02\x89\v\x03\x02\x02\x02\x8A\x8C\x07\x13\x02\x02\x8B\x8D\x07\x15" +
		"\x02\x02\x8C\x8B\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8F\x03\x02" +
		"\x02\x02\x8E\x90\x07&\x02\x02\x8F\x8E\x03\x02\x02\x02\x8F\x90\x03\x02" +
		"\x02\x02\x90\x91\x03\x02\x02\x02\x91\x93\x05\b\x05\x02\x92\x94\x07\'\x02" +
		"\x02\x93\x92\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94\x95\x03\x02\x02" +
		"\x02\x95\x96\x07,\x02\x02\x96\x97\x05\x10\t\x02\x97\r\x03\x02\x02\x02" +
		"\x98\x99\b\b\x01\x02\x99\x9D\x05\x16\f\x02\x9A\x9B\t\x02\x02\x02\x9B\x9D" +
		"\x05\x0E\b\x06\x9C\x98\x03\x02\x02\x02\x9C\x9A\x03\x02\x02\x02\x9D\xA9" +
		"\x03\x02\x02\x02\x9E\x9F\f\x05\x02\x02\x9F\xA0\t\x03\x02\x02\xA0\xA8\x05" +
		"\x0E\b\x06\xA1\xA2\f\x04\x02\x02\xA2\xA3\t\x04\x02\x02\xA3\xA8\x05\x0E" +
		"\b\x05\xA4\xA5\f\x03\x02\x02\xA5\xA6\t\x05\x02\x02\xA6\xA8\x05\x0E\b\x04" +
		"\xA7\x9E\x03\x02\x02\x02\xA7\xA1\x03\x02\x02\x02\xA7\xA4\x03\x02\x02\x02" +
		"\xA8\xAB\x03\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02" +
		"\xAA\x0F\x03\x02\x02\x02\xAB\xA9\x03\x02\x02\x02\xAC\xB1\x05\x0E\b\x02" +
		"\xAD\xAE\x07-\x02\x02\xAE\xB0\x05\x0E\b\x02\xAF\xAD\x03\x02\x02\x02\xB0" +
		"\xB3\x03\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2" +
		"\x11\x03\x02\x02\x02\xB3\xB1\x03\x02\x02\x02\xB4\xB5\x07*\x02\x02\xB5" +
		"\xB6\x05\x0E\b\x02\xB6\xB7\x07+\x02\x02\xB7\x13\x03\x02\x02\x02\xB8\xB9" +
		"\x07%\x02\x02\xB9\xBA\x07&\x02\x02\xBA\xBB\x05\x10\t\x02\xBB\xBC\x07\'" +
		"\x02\x02\xBC\x15\x03\x02\x02\x02\xBD\xC1\x05&\x14\x02\xBE\xC1\x05\x12" +
		"\n\x02\xBF\xC1\x05\x14\v\x02\xC0\xBD\x03\x02\x02\x02\xC0\xBE\x03\x02\x02" +
		"\x02\xC0\xBF\x03\x02\x02\x02\xC1\x17\x03\x02\x02\x02\xC2\xC3\t\x06\x02" +
		"\x02\xC3\x19\x03\x02\x02\x02\xC4\xC5\x07*\x02\x02\xC5\xC6\x05\x1E\x10" +
		"\x02\xC6\xC7\x07.\x02\x02\xC7\xC8\x05\x1C\x0F\x02\xC8\xC9\x07+\x02\x02" +
		"\xC9\x1B\x03\x02\x02\x02\xCA\xCB\x05\x0E\b\x02\xCB\x1D\x03\x02\x02\x02" +
		"\xCC\xD0\x05\x18\r\x02\xCD\xD0\x05\x1A\x0E\x02\xCE\xD0\x05.\x18\x02\xCF" +
		"\xCC\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF\xCE\x03\x02\x02\x02\xD0" +
		"\x1F\x03\x02\x02\x02\xD1\xD2\x07&\x02\x02\xD2\xE4\x07\'\x02\x02\xD3\xE4" +
		"\x05\x1E\x10\x02\xD4\xE0\x07&\x02\x02\xD5\xDA\x05\x1E\x10\x02\xD6\xD7" +
		"\x07-\x02\x02\xD7\xD9\x05\x1E\x10\x02\xD8\xD6\x03\x02\x02\x02\xD9\xDC" +
		"\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xDE" +
		"\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDD\xDF\x07-\x02\x02\xDE\xDD" +
		"\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE1\x03\x02\x02\x02\xE0\xD5" +
		"\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1\xE2\x03\x02\x02\x02\xE2\xE4" +
		"\x07\'\x02\x02\xE3\xD1\x03\x02\x02\x02\xE3\xD3\x03\x02\x02\x02\xE3\xD4" +
		"\x03\x02\x02\x02\xE4!\x03\x02\x02\x02\xE5\xE6\x07%\x02\x02\xE6\xE7\x07" +
		"/\x02\x02\xE7\xE8\x05\x1E\x10\x02\xE8#\x03\x02\x02\x02\xE9\xEA\x058\x1D" +
		"\x02\xEA\xEB\x07\\\x02\x02\xEB\xED\x03\x02\x02\x02\xEC\xE9\x03\x02\x02" +
		"\x02\xEC\xED\x03\x02\x02\x02\xED\xEF\x03\x02\x02\x02\xEE\xF0\x07\x06\x02" +
		"\x02\xEF\xEE\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF1\x03\x02\x02" +
		"\x02\xF1\xF3\x07\x05\x02\x02\xF2\xF4\x07\x07\x02\x02\xF3\xF2\x03\x02\x02" +
		"\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF6\x07%\x02" +
		"\x02\xF6\xFF\x07&\x02\x02\xF7\xFC\x05\"\x12\x02\xF8\xF9\x07-\x02\x02\xF9" +
		"\xFB\x05\"\x12\x02\xFA\xF8\x03\x02\x02\x02\xFB\xFE\x03\x02\x02\x02\xFC" +
		"\xFA\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\u0100\x03\x02\x02\x02" +
		"\xFE\xFC\x03\x02\x02\x02\xFF\xF7\x03\x02\x02\x02\xFF\u0100\x03\x02\x02" +
		"\x02\u0100\u0101\x03\x02\x02\x02\u0101\u0104\x07\'\x02\x02\u0102\u0103" +
		"\x07$\x02\x02\u0103\u0105\x05 \x11\x02\u0104\u0102\x03\x02\x02\x02\u0104" +
		"\u0105\x03\x02\x02\x02\u0105\u0107\x03\x02\x02\x02\u0106\u0108\x05> \x02" +
		"\u0107\u0106\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108%\x03\x02" +
		"\x02\x02\u0109\u010C\x05(\x15\x02\u010A\u010C\x05,\x17\x02\u010B\u0109" +
		"\x03\x02\x02\x02\u010B\u010A\x03\x02\x02\x02\u010C\'\x03\x02\x02\x02\u010D" +
		"\u010E\t\x07\x02\x02\u010E)\x03\x02\x02\x02\u010F\u0111\x07\x13\x02\x02" +
		"\u0110\u010F\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111\u0113\x03" +
		"\x02\x02\x02\u0112\u0114\x07\x15\x02\x02\u0113\u0112\x03\x02\x02\x02\u0113" +
		"\u0114\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115\u0116\x07%\x02" +
		"\x02\u0116\u0117\x07/\x02\x02\u0117\u0118\x05\x1E\x10\x02\u0118+\x03\x02" +
		"\x02\x02\u0119\u011A\t\b\x02\x02\u011A-\x03\x02\x02\x02\u011B\u011C\x05" +
		"2\x1A\x02\u011C\u011D\x054\x1B\x02\u011D/\x03\x02\x02\x02\u011E\u011F" +
		"\t\t\x02\x02\u011F1\x03\x02\x02\x02\u0120\u0121\x050\x19\x02\u0121\u012C" +
		"\x07%\x02\x02\u0122\u0128\x07A\x02\x02\u0123\u0124\x05*\x16\x02\u0124" +
		"\u0125\x05P)\x02\u0125\u0127\x03\x02\x02\x02\u0126\u0123\x03\x02\x02\x02" +
		"\u0127\u012A\x03\x02\x02\x02\u0128\u0126\x03\x02\x02\x02\u0128\u0129\x03" +
		"\x02\x02\x02\u0129\u012B\x03\x02\x02\x02\u012A\u0128\x03\x02\x02\x02\u012B" +
		"\u012D\x07C\x02\x02\u012C\u0122\x03\x02\x02\x02\u012C\u012D\x03\x02\x02" +
		"\x02\u012D\u0138\x03\x02\x02\x02\u012E\u0134\x07&\x02\x02\u012F\u0130" +
		"\x05*\x16\x02\u0130\u0131\x05P)\x02\u0131\u0133\x03\x02\x02\x02\u0132" +
		"\u012F\x03\x02\x02\x02\u0133\u0136\x03\x02\x02\x02\u0134\u0132\x03\x02" +
		"\x02\x02\u0134\u0135\x03\x02\x02\x02\u0135\u0137\x03\x02\x02\x02\u0136" +
		"\u0134\x03\x02\x02\x02\u0137\u0139\x07\'\x02\x02\u0138\u012E\x03\x02\x02" +
		"\x02\u0138\u0139\x03\x02\x02\x02\u0139\u0148\x03\x02\x02\x02\u013A\u013B" +
		"\t\n\x02\x02\u013B\u0146\x07%\x02\x02\u013C\u0142\x07&\x02\x02\u013D\u013E" +
		"\x05*\x16\x02\u013E\u013F\x05P)\x02\u013F\u0141\x03\x02\x02\x02\u0140" +
		"\u013D\x03\x02\x02\x02\u0141\u0144\x03\x02\x02\x02\u0142\u0140\x03\x02" +
		"\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u0145\x03\x02\x02\x02\u0144" +
		"\u0142\x03\x02\x02\x02\u0145\u0147\x07\'\x02\x02\u0146\u013C\x03\x02\x02" +
		"\x02\u0146\u0147\x03\x02\x02\x02\u0147\u0149\x03\x02\x02\x02\u0148\u013A" +
		"\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u01493\x03\x02\x02\x02\u014A" +
		"\u0154\x07(\x02\x02\u014B\u014F\x05*\x16\x02\u014C\u014F\x056\x1C\x02" +
		"\u014D\u014F\x05$\x13\x02\u014E\u014B\x03\x02\x02\x02\u014E\u014C\x03" +
		"\x02\x02\x02\u014E\u014D\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150" +
		"\u0151\x05P)\x02\u0151\u0153\x03\x02\x02\x02\u0152\u014E\x03\x02\x02\x02" +
		"\u0153\u0156\x03\x02\x02\x02\u0154\u0152\x03\x02\x02\x02\u0154\u0155\x03" +
		"\x02\x02\x02\u0155\u0157\x03\x02\x02\x02\u0156\u0154\x03\x02\x02\x02\u0157" +
		"\u0158\x07)\x02\x02\u01585\x03\x02\x02\x02\u0159\u015A\x07\x1A\x02\x02" +
		"\u015A\u0165\x07%\x02\x02\u015B\u0161\x07&\x02\x02\u015C\u015D\x05*\x16" +
		"\x02\u015D\u015E\x05P)\x02\u015E\u0160\x03\x02\x02\x02\u015F\u015C\x03" +
		"\x02\x02\x02\u0160\u0163\x03\x02\x02\x02\u0161\u015F\x03\x02\x02\x02\u0161" +
		"\u0162\x03\x02\x02\x02\u0162\u0164\x03\x02\x02\x02\u0163\u0161\x03\x02" +
		"\x02\x02\u0164\u0166\x07\'\x02\x02\u0165\u015B\x03\x02\x02\x02\u0165\u0166" +
		"\x03\x02\x02\x02\u0166\u0170\x03\x02\x02\x02\u0167\u0168\x07\x1B\x02\x02" +
		"\u0168\u016D\x07%\x02\x02\u0169\u016A\x07&\x02\x02\u016A\u016B\x05\x10" +
		"\t\x02\u016B\u016C\x07\'\x02\x02\u016C\u016E\x03\x02\x02\x02\u016D\u0169" +
		"\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E\u0170\x03\x02\x02\x02" +
		"\u016F\u0159\x03\x02\x02\x02\u016F\u0167\x03\x02\x02\x02\u01707\x03\x02" +
		"\x02\x02\u0171\u0172\x07\x1D\x02\x02\u0172\u0173\x07\x1C\x02\x02\u0173" +
		"\u0176\x07&\x02\x02\u0174\u0177\x05:\x1E\x02\u0175\u0177\x05\x10\t\x02" +
		"\u0176\u0174\x03\x02\x02\x02\u0176\u0175\x03\x02\x02\x02\u0177\u0178\x03" +
		"\x02\x02\x02\u0178\u0179\x07\'\x02\x02\u0179\u017B\x03\x02\x02\x02\u017A" +
		"\u0171\x03\x02\x02\x02\u017A\u017B\x03\x02\x02\x02\u017B9\x03\x02\x02" +
		"\x02\u017C\u0181\x05<\x1F\x02\u017D\u017E\x07-\x02\x02\u017E\u0180\x05" +
		"<\x1F\x02\u017F\u017D\x03\x02\x02\x02\u0180\u0183\x03\x02\x02\x02\u0181" +
		"\u017F\x03\x02\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182;\x03\x02\x02" +
		"\x02\u0183\u0181\x03\x02\x02\x02\u0184\u0185\x07%\x02\x02\u0185\u0186" +
		"\x07,\x02\x02\u0186\u0187\x05\x0E\b\x02\u0187=\x03\x02\x02\x02\u0188\u018A" +
		"\x07(\x02\x02\u0189\u018B\x05@!\x02\u018A\u0189\x03\x02\x02\x02\u018A" +
		"\u018B\x03\x02\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C\u018D\x07)\x02" +
		"\x02\u018D?\x03\x02\x02\x02\u018E\u0190\x07.\x02\x02\u018F\u018E\x03\x02" +
		"\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190\u0195\x03\x02\x02\x02\u0191" +
		"\u0193\x07\\\x02\x02\u0192\u0191\x03\x02\x02\x02\u0192\u0193\x03\x02\x02" +
		"\x02\u0193\u0195\x03\x02\x02\x02\u0194\u018F\x03\x02\x02\x02\u0194\u0192" +
		"\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196\u0197\x05B\"\x02\u0197" +
		"\u0198\x05P)\x02\u0198\u019A\x03\x02\x02\x02\u0199\u0194\x03\x02\x02\x02" +
		"\u019A\u019B\x03\x02\x02\x02\u019B\u0199\x03\x02\x02\x02\u019B\u019C\x03" +
		"\x02\x02\x02\u019CA\x03\x02\x02\x02\u019D\u01A4\x05\x06\x04\x02\u019E" +
		"\u01A4\x05D#\x02\u019F\u01A4\x05J&\x02\u01A0\u01A4\x05> \x02\u01A1\u01A4" +
		"\x05L\'\x02\u01A2\u01A4\x05N(\x02\u01A3\u019D\x03\x02\x02\x02\u01A3\u019E" +
		"\x03\x02\x02\x02\u01A3\u019F\x03\x02\x02\x02\u01A3\u01A0\x03\x02\x02\x02" +
		"\u01A3\u01A1\x03\x02\x02\x02\u01A3\u01A2\x03\x02\x02\x02\u01A4C\x03\x02" +
		"\x02\x02\u01A5\u01A9\x05H%\x02\u01A6\u01A9\x05F$\x02\u01A7\u01A9\x056" +
		"\x1C\x02\u01A8\u01A5\x03\x02\x02\x02\u01A8\u01A6\x03\x02\x02\x02\u01A8" +
		"\u01A7\x03\x02\x02\x02\u01A9E\x03\x02\x02\x02\u01AA\u01AB\x05\x0E\b\x02" +
		"\u01ABG\x03\x02\x02\x02\u01AC\u01AD\t\v\x02\x02\u01ADI\x03\x02\x02\x02" +
		"\u01AE\u01B0\x07\b\x02\x02\u01AF\u01B1\x05\x10\t\x02\u01B0\u01AF\x03\x02" +
		"\x02\x02\u01B0\u01B1\x03\x02\x02\x02\u01B1K\x03\x02\x02\x02\u01B2\u01B3" +
		"\x07\x10\x02\x02\u01B3\u01B4\x05\x0E\b\x02\u01B4\u01BA\x05> \x02\u01B5" +
		"\u01B8\x07\x11\x02\x02\u01B6\u01B9\x05L\'\x02\u01B7\u01B9\x05> \x02\u01B8" +
		"\u01B6\x03\x02\x02\x02\u01B8\u01B7\x03\x02\x02\x02\u01B9\u01BB\x03\x02" +
		"\x02\x02\u01BA\u01B5\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB" +
		"M\x03\x02\x02\x02\u01BC\u01BE\x07\x12\x02\x02\u01BD\u01BF\x05\x0E\b\x02" +
		"\u01BE\u01BD\x03\x02\x02\x02\u01BE\u01BF\x03\x02\x02\x02\u01BF\u01C0\x03" +
		"\x02\x02\x02\u01C0\u01C1\x05> \x02\u01C1O\x03\x02\x02\x02\u01C2\u01C3" +
		"\t\f\x02\x02\u01C3Q\x03\x02\x02\x02<W_lpu|\x81\x85\x8C\x8F\x93\x9C\xA7" +
		"\xA9\xB1\xC0\xCF\xDA\xDE\xE0\xE3\xEC\xEF\xF3\xFC\xFF\u0104\u0107\u010B" +
		"\u0110\u0113\u0128\u012C\u0134\u0138\u0142\u0146\u0148\u014E\u0154\u0161" +
		"\u0165\u016D\u016F\u0176\u017A\u0181\u018A\u018F\u0192\u0194\u019B\u01A3" +
		"\u01A8\u01B0\u01B8\u01BA\u01BE";
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
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
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
	public string_(): String_Context[];
	public string_(i: number): String_Context;
	public string_(i?: number): String_Context | String_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(String_Context);
		} else {
			return this.getRuleContext(i, String_Context);
		}
	}
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_PAREN, 0); }
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
	public constDecl(): ConstDeclContext | undefined {
		return this.tryGetRuleContext(0, ConstDeclContext);
	}
	public typeDecl(): TypeDeclContext | undefined {
		return this.tryGetRuleContext(0, TypeDeclContext);
	}
	public letDecl(): LetDeclContext | undefined {
		return this.tryGetRuleContext(0, LetDeclContext);
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


export class ConstDeclContext extends ParserRuleContext {
	public CONST(): TerminalNode { return this.getToken(RalphParser.CONST, 0); }
	public identifierList(): IdentifierListContext {
		return this.getRuleContext(0, IdentifierListContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(RalphParser.ASSIGN, 0); }
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
	}
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_constDecl; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterConstDecl) {
			listener.enterConstDecl(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitConstDecl) {
			listener.exitConstDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitConstDecl) {
			return visitor.visitConstDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LetDeclContext extends ParserRuleContext {
	public LET(): TerminalNode { return this.getToken(RalphParser.LET, 0); }
	public identifierList(): IdentifierListContext {
		return this.getRuleContext(0, IdentifierListContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(RalphParser.ASSIGN, 0); }
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
	}
	public MUT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.MUT, 0); }
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_letDecl; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterLetDecl) {
			listener.enterLetDecl(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitLetDecl) {
			listener.exitLetDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitLetDecl) {
			return visitor.visitLetDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public primaryExpr(): PrimaryExprContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExprContext);
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


export class ArrayExprContext extends ParserRuleContext {
	public L_BRACKET(): TerminalNode { return this.getToken(RalphParser.L_BRACKET, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public R_BRACKET(): TerminalNode { return this.getToken(RalphParser.R_BRACKET, 0); }
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


export class MethodExprContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(RalphParser.IDENTIFIER, 0); }
	public L_PAREN(): TerminalNode { return this.getToken(RalphParser.L_PAREN, 0); }
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
	}
	public R_PAREN(): TerminalNode { return this.getToken(RalphParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_methodExpr; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterMethodExpr) {
			listener.enterMethodExpr(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitMethodExpr) {
			listener.exitMethodExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitMethodExpr) {
			return visitor.visitMethodExpr(this);
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
	public methodExpr(): MethodExprContext | undefined {
		return this.tryGetRuleContext(0, MethodExprContext);
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
	public typeDecl(): TypeDeclContext {
		return this.getRuleContext(0, TypeDeclContext);
	}
	public SEMI(): TerminalNode { return this.getToken(RalphParser.SEMI, 0); }
	public arrayLength(): ArrayLengthContext {
		return this.getRuleContext(0, ArrayLengthContext);
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


export class ArrayLengthContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_arrayLength; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterArrayLength) {
			listener.enterArrayLength(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitArrayLength) {
			listener.exitArrayLength(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitArrayLength) {
			return visitor.visitArrayLength(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDeclContext extends ParserRuleContext {
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
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
	public get ruleIndex(): number { return RalphParser.RULE_typeDecl; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterTypeDecl) {
			listener.enterTypeDecl(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitTypeDecl) {
			listener.exitTypeDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitTypeDecl) {
			return visitor.visitTypeDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResultContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_PAREN, 0); }
	public typeDecl(): TypeDeclContext[];
	public typeDecl(i: number): TypeDeclContext;
	public typeDecl(i?: number): TypeDeclContext | TypeDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeDeclContext);
		} else {
			return this.getRuleContext(i, TypeDeclContext);
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


export class ParameterDeclContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(RalphParser.IDENTIFIER, 0); }
	public COLON(): TerminalNode { return this.getToken(RalphParser.COLON, 0); }
	public typeDecl(): TypeDeclContext {
		return this.getRuleContext(0, TypeDeclContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_parameterDecl; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterParameterDecl) {
			listener.enterParameterDecl(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitParameterDecl) {
			listener.exitParameterDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitParameterDecl) {
			return visitor.visitParameterDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDeclContext extends ParserRuleContext {
	public FN(): TerminalNode { return this.getToken(RalphParser.FN, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(RalphParser.IDENTIFIER, 0); }
	public L_PAREN(): TerminalNode { return this.getToken(RalphParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(RalphParser.R_PAREN, 0); }
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public EOS(): TerminalNode | undefined { return this.tryGetToken(RalphParser.EOS, 0); }
	public PUB(): TerminalNode | undefined { return this.tryGetToken(RalphParser.PUB, 0); }
	public PAYABLE(): TerminalNode | undefined { return this.tryGetToken(RalphParser.PAYABLE, 0); }
	public parameterDecl(): ParameterDeclContext[];
	public parameterDecl(i: number): ParameterDeclContext;
	public parameterDecl(i?: number): ParameterDeclContext | ParameterDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterDeclContext);
		} else {
			return this.getRuleContext(i, ParameterDeclContext);
		}
	}
	public R_ARROW(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_ARROW, 0); }
	public result(): ResultContext | undefined {
		return this.tryGetRuleContext(0, ResultContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
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


export class FieldDeclContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(RalphParser.IDENTIFIER, 0); }
	public COLON(): TerminalNode { return this.getToken(RalphParser.COLON, 0); }
	public typeDecl(): TypeDeclContext {
		return this.getRuleContext(0, TypeDeclContext);
	}
	public LET(): TerminalNode | undefined { return this.tryGetToken(RalphParser.LET, 0); }
	public MUT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.MUT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_fieldDecl; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterFieldDecl) {
			listener.enterFieldDecl(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitFieldDecl) {
			listener.exitFieldDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitFieldDecl) {
			return visitor.visitFieldDecl(this);
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
	public typeStructHeader(): TypeStructHeaderContext {
		return this.getRuleContext(0, TypeStructHeaderContext);
	}
	public typeStructBody(): TypeStructBodyContext {
		return this.getRuleContext(0, TypeStructBodyContext);
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


export class TypeParamContext extends ParserRuleContext {
	public STRUCT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.STRUCT, 0); }
	public ENUM(): TerminalNode | undefined { return this.tryGetToken(RalphParser.ENUM, 0); }
	public INTERFACE(): TerminalNode | undefined { return this.tryGetToken(RalphParser.INTERFACE, 0); }
	public TXSCRIPT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.TXSCRIPT, 0); }
	public TXCONTRACT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.TXCONTRACT, 0); }
	public CONTRACT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.CONTRACT, 0); }
	public ASSETSCRIPT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.ASSETSCRIPT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_typeParam; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterTypeParam) {
			listener.enterTypeParam(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitTypeParam) {
			listener.exitTypeParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitTypeParam) {
			return visitor.visitTypeParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeStructHeaderContext extends ParserRuleContext {
	public typeParam(): TypeParamContext {
		return this.getRuleContext(0, TypeParamContext);
	}
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.IDENTIFIER);
		} else {
			return this.getToken(RalphParser.IDENTIFIER, i);
		}
	}
	public LT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.GT, 0); }
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
	public fieldDecl(): FieldDeclContext[];
	public fieldDecl(i: number): FieldDeclContext;
	public fieldDecl(i?: number): FieldDeclContext | FieldDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldDeclContext);
		} else {
			return this.getRuleContext(i, FieldDeclContext);
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
	public get ruleIndex(): number { return RalphParser.RULE_typeStructHeader; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterTypeStructHeader) {
			listener.enterTypeStructHeader(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitTypeStructHeader) {
			listener.exitTypeStructHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitTypeStructHeader) {
			return visitor.visitTypeStructHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeStructBodyContext extends ParserRuleContext {
	public L_CURLY(): TerminalNode { return this.getToken(RalphParser.L_CURLY, 0); }
	public R_CURLY(): TerminalNode { return this.getToken(RalphParser.R_CURLY, 0); }
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	public fieldDecl(): FieldDeclContext[];
	public fieldDecl(i: number): FieldDeclContext;
	public fieldDecl(i?: number): FieldDeclContext | FieldDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldDeclContext);
		} else {
			return this.getRuleContext(i, FieldDeclContext);
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


export class EventEmitContext extends ParserRuleContext {
	public EVENT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.EVENT, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(RalphParser.IDENTIFIER, 0); }
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_PAREN, 0); }
	public fieldDecl(): FieldDeclContext[];
	public fieldDecl(i: number): FieldDeclContext;
	public fieldDecl(i?: number): FieldDeclContext | FieldDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldDeclContext);
		} else {
			return this.getRuleContext(i, FieldDeclContext);
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
	public AT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.AT, 0); }
	public USING(): TerminalNode | undefined { return this.tryGetToken(RalphParser.USING, 0); }
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_PAREN, 0); }
	public assignParamList(): AssignParamListContext | undefined {
		return this.tryGetRuleContext(0, AssignParamListContext);
	}
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


export class AssignParamListContext extends ParserRuleContext {
	public assign(): AssignContext[];
	public assign(i: number): AssignContext;
	public assign(i?: number): AssignContext | AssignContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignContext);
		} else {
			return this.getRuleContext(i, AssignContext);
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
	public get ruleIndex(): number { return RalphParser.RULE_assignParamList; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterAssignParamList) {
			listener.enterAssignParamList(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitAssignParamList) {
			listener.exitAssignParamList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitAssignParamList) {
			return visitor.visitAssignParamList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(RalphParser.IDENTIFIER, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(RalphParser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_assign; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterAssign) {
			listener.enterAssign(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitAssign) {
			listener.exitAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitAssign) {
			return visitor.visitAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public L_CURLY(): TerminalNode { return this.getToken(RalphParser.L_CURLY, 0); }
	public R_CURLY(): TerminalNode { return this.getToken(RalphParser.R_CURLY, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
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


export class StatementListContext extends ParserRuleContext {
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
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.SEMI);
		} else {
			return this.getToken(RalphParser.SEMI, i);
		}
	}
	public EOS(): TerminalNode[];
	public EOS(i: number): TerminalNode;
	public EOS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.EOS);
		} else {
			return this.getToken(RalphParser.EOS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_statementList; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterStatementList) {
			listener.enterStatementList(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitStatementList) {
			listener.exitStatementList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitStatementList) {
			return visitor.visitStatementList(this);
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
	public EOS(): TerminalNode | undefined { return this.tryGetToken(RalphParser.EOS, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(RalphParser.SEMI, 0); }
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
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
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
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(RalphParser.SEMI, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(RalphParser.EOF, 0); }
	public EOS(): TerminalNode | undefined { return this.tryGetToken(RalphParser.EOS, 0); }
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



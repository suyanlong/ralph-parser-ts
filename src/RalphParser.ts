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
	public static readonly FOR = 16;
	public static readonly WHILE = 17;
	public static readonly BREAK = 18;
	public static readonly CONTINUE = 19;
	public static readonly DEFAULT = 20;
	public static readonly GOTO = 21;
	public static readonly SWITCH = 22;
	public static readonly CASE = 23;
	public static readonly TYPE = 24;
	public static readonly LET = 25;
	public static readonly CONST = 26;
	public static readonly MUT = 27;
	public static readonly ALPH = 28;
	public static readonly EXTENDS = 29;
	public static readonly ABSTRACT = 30;
	public static readonly IMPLEMENTS = 31;
	public static readonly EVENT = 32;
	public static readonly EVMIT = 33;
	public static readonly USING = 34;
	public static readonly AT = 35;
	public static readonly BOOL = 36;
	public static readonly I256 = 37;
	public static readonly U256 = 38;
	public static readonly BYTE = 39;
	public static readonly BYTEVEC = 40;
	public static readonly ADDRESS = 41;
	public static readonly R_ARROW = 42;
	public static readonly IDENTIFIER = 43;
	public static readonly L_PAREN = 44;
	public static readonly R_PAREN = 45;
	public static readonly L_CURLY = 46;
	public static readonly R_CURLY = 47;
	public static readonly L_BRACKET = 48;
	public static readonly R_BRACKET = 49;
	public static readonly ASSIGN = 50;
	public static readonly COMMA = 51;
	public static readonly SEMI = 52;
	public static readonly COLON = 53;
	public static readonly DOT = 54;
	public static readonly CONCAT = 55;
	public static readonly ADD = 56;
	public static readonly SUB = 57;
	public static readonly MUL = 58;
	public static readonly DIV = 59;
	public static readonly MOD = 60;
	public static readonly MODADD = 61;
	public static readonly MODSUB = 62;
	public static readonly MODMUL = 63;
	public static readonly SHL = 64;
	public static readonly SHR = 65;
	public static readonly BITAND = 66;
	public static readonly XOR = 67;
	public static readonly BITOR = 68;
	public static readonly EQ = 69;
	public static readonly NQ = 70;
	public static readonly LT = 71;
	public static readonly LE = 72;
	public static readonly GT = 73;
	public static readonly GE = 74;
	public static readonly AND = 75;
	public static readonly OR = 76;
	public static readonly NOT = 77;
	public static readonly DECIMAL_LIT = 78;
	public static readonly BINARY_LIT = 79;
	public static readonly OCTAL_LIT = 80;
	public static readonly HEX_LIT = 81;
	public static readonly FLOAT_LIT = 82;
	public static readonly DECIMAL_FLOAT_LIT = 83;
	public static readonly HEX_FLOAT_LIT = 84;
	public static readonly IMAGINARY_LIT = 85;
	public static readonly RUNE_LIT = 86;
	public static readonly BYTE_VALUE = 87;
	public static readonly OCTAL_BYTE_VALUE = 88;
	public static readonly HEX_BYTE_VALUE = 89;
	public static readonly LITTLE_U_VALUE = 90;
	public static readonly BIG_U_VALUE = 91;
	public static readonly RAW_STRING_LIT = 92;
	public static readonly INTERPRETED_STRING_LIT = 93;
	public static readonly WS = 94;
	public static readonly COMMENT = 95;
	public static readonly TERMINATOR = 96;
	public static readonly LINE_COMMENT = 97;
	public static readonly EOS = 98;
	public static readonly RULE_sourceFile = 0;
	public static readonly RULE_importDecl = 1;
	public static readonly RULE_importSpec = 2;
	public static readonly RULE_importPath = 3;
	public static readonly RULE_declaration = 4;
	public static readonly RULE_identifierList = 5;
	public static readonly RULE_constDecl = 6;
	public static readonly RULE_constSpec = 7;
	public static readonly RULE_letDecl = 8;
	public static readonly RULE_letSpec = 9;
	public static readonly RULE_expression = 10;
	public static readonly RULE_expressionList = 11;
	public static readonly RULE_primaryExpr = 12;
	public static readonly RULE_primitiveType = 13;
	public static readonly RULE_arrayType = 14;
	public static readonly RULE_arrayLength = 15;
	public static readonly RULE_elementType = 16;
	public static readonly RULE_typeDecl = 17;
	public static readonly RULE_typeSpec = 18;
	public static readonly RULE_typeList = 19;
	public static readonly RULE_type_ = 20;
	public static readonly RULE_typeBasic = 21;
	public static readonly RULE_signature = 22;
	public static readonly RULE_result = 23;
	public static readonly RULE_parameters = 24;
	public static readonly RULE_parameterDecl = 25;
	public static readonly RULE_basicLit = 26;
	public static readonly RULE_integer = 27;
	public static readonly RULE_fieldDecl = 28;
	public static readonly RULE_string_ = 29;
	public static readonly RULE_index = 30;
	public static readonly RULE_arguments = 31;
	public static readonly RULE_methodDecl = 32;
	public static readonly RULE_typeStruct = 33;
	public static readonly RULE_typeParam = 34;
	public static readonly RULE_typeStructHeader = 35;
	public static readonly RULE_typeStructBody = 36;
	public static readonly RULE_eventEmit = 37;
	public static readonly RULE_annotation = 38;
	public static readonly RULE_varAssignParamList = 39;
	public static readonly RULE_assign = 40;
	public static readonly RULE_varParamList = 41;
	public static readonly RULE_block = 42;
	public static readonly RULE_statementList = 43;
	public static readonly RULE_statement = 44;
	public static readonly RULE_simpleStmt = 45;
	public static readonly RULE_expressionStmt = 46;
	public static readonly RULE_emptyStmt = 47;
	public static readonly RULE_returnStmt = 48;
	public static readonly RULE_breakStmt = 49;
	public static readonly RULE_continueStmt = 50;
	public static readonly RULE_ifStmt = 51;
	public static readonly RULE_forStmt = 52;
	public static readonly RULE_whileStmt = 53;
	public static readonly RULE_eos = 54;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sourceFile", "importDecl", "importSpec", "importPath", "declaration", 
		"identifierList", "constDecl", "constSpec", "letDecl", "letSpec", "expression", 
		"expressionList", "primaryExpr", "primitiveType", "arrayType", "arrayLength", 
		"elementType", "typeDecl", "typeSpec", "typeList", "type_", "typeBasic", 
		"signature", "result", "parameters", "parameterDecl", "basicLit", "integer", 
		"fieldDecl", "string_", "index", "arguments", "methodDecl", "typeStruct", 
		"typeParam", "typeStructHeader", "typeStructBody", "eventEmit", "annotation", 
		"varAssignParamList", "assign", "varParamList", "block", "statementList", 
		"statement", "simpleStmt", "expressionStmt", "emptyStmt", "returnStmt", 
		"breakStmt", "continueStmt", "ifStmt", "forStmt", "whileStmt", "eos",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'import'", "'package'", "'fn'", "'pub'", "'payable'", "'return'", 
		"'Interface'", "'struct'", "'enum'", "'TxScript'", "'TxContract'", "'Contract'", 
		"'AssetScript'", "'if'", "'else'", "'for'", "'while'", "'break'", "'continue'", 
		"'default'", "'goto'", "'switch'", "'case'", "'type'", "'let'", "'const'", 
		"'mut'", "'alph'", "'extends'", "'Abstract'", "'implements'", "'event'", 
		"'emit'", "'using'", "'@'", "'Bool'", "'I256'", "'U256'", "'Byte'", "'ByteVec'", 
		"'Address'", "'->'", undefined, "'('", "')'", "'{'", "'}'", "'['", "']'", 
		"'='", "','", "';'", "':'", "'.'", "'++'", "'+'", "'-'", "'*'", "'/'", 
		"'%'", undefined, undefined, undefined, "'<<'", "'>>'", "'&'", "'^'", 
		"'|'", "'=='", "'!='", "'<'", "'<='", "'>'", "'>='", "'&&'", "'||'", "'!'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "IMPORT", "PACKAGE", "FN", "PUB", "PAYABLE", "RETURN", "INTERFACE", 
		"STRUCT", "ENUM", "TXSCRIPT", "TXCONTRACT", "CONTRACT", "ASSETSCRIPT", 
		"IF", "ELSE", "FOR", "WHILE", "BREAK", "CONTINUE", "DEFAULT", "GOTO", 
		"SWITCH", "CASE", "TYPE", "LET", "CONST", "MUT", "ALPH", "EXTENDS", "ABSTRACT", 
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
			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.IMPORT) {
				{
				{
				this.state = 110;
				this.importDecl();
				this.state = 111;
				this.eos();
				}
				}
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.TYPE) | (1 << RalphParser.LET) | (1 << RalphParser.CONST))) !== 0)) {
				{
				{
				this.state = 118;
				this.declaration();
				this.state = 119;
				this.eos();
				}
				}
				this.state = 125;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 126;
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
			this.state = 128;
			this.match(RalphParser.IMPORT);
			this.state = 140;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.IDENTIFIER:
			case RalphParser.DOT:
			case RalphParser.RAW_STRING_LIT:
			case RalphParser.INTERPRETED_STRING_LIT:
				{
				this.state = 129;
				this.importSpec();
				}
				break;
			case RalphParser.L_PAREN:
				{
				this.state = 130;
				this.match(RalphParser.L_PAREN);
				this.state = 136;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === RalphParser.IDENTIFIER || _la === RalphParser.DOT || _la === RalphParser.RAW_STRING_LIT || _la === RalphParser.INTERPRETED_STRING_LIT) {
					{
					{
					this.state = 131;
					this.importSpec();
					this.state = 132;
					this.eos();
					}
					}
					this.state = 138;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 139;
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
	public importSpec(): ImportSpecContext {
		let _localctx: ImportSpecContext = new ImportSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, RalphParser.RULE_importSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.IDENTIFIER || _la === RalphParser.DOT) {
				{
				this.state = 142;
				_localctx._alias = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === RalphParser.IDENTIFIER || _la === RalphParser.DOT)) {
					_localctx._alias = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 145;
			this.importPath();
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
	public importPath(): ImportPathContext {
		let _localctx: ImportPathContext = new ImportPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, RalphParser.RULE_importPath);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
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
		this.enterRule(_localctx, 8, RalphParser.RULE_declaration);
		try {
			this.state = 152;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.CONST:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 149;
				this.constDecl();
				}
				break;
			case RalphParser.TYPE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 150;
				this.typeDecl();
				}
				break;
			case RalphParser.LET:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 151;
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
		this.enterRule(_localctx, 10, RalphParser.RULE_identifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			this.match(RalphParser.IDENTIFIER);
			this.state = 159;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.COMMA) {
				{
				{
				this.state = 155;
				this.match(RalphParser.COMMA);
				this.state = 156;
				this.match(RalphParser.IDENTIFIER);
				}
				}
				this.state = 161;
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
		this.enterRule(_localctx, 12, RalphParser.RULE_constDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			this.match(RalphParser.CONST);
			this.state = 174;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.IDENTIFIER:
				{
				this.state = 163;
				this.constSpec();
				}
				break;
			case RalphParser.L_PAREN:
				{
				this.state = 164;
				this.match(RalphParser.L_PAREN);
				this.state = 170;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === RalphParser.IDENTIFIER) {
					{
					{
					this.state = 165;
					this.constSpec();
					this.state = 166;
					this.eos();
					}
					}
					this.state = 172;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 173;
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
	public constSpec(): ConstSpecContext {
		let _localctx: ConstSpecContext = new ConstSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, RalphParser.RULE_constSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			this.identifierList();
			this.state = 182;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.INTERFACE) | (1 << RalphParser.STRUCT) | (1 << RalphParser.ENUM) | (1 << RalphParser.TXSCRIPT) | (1 << RalphParser.TXCONTRACT) | (1 << RalphParser.CONTRACT) | (1 << RalphParser.ASSETSCRIPT))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (RalphParser.BOOL - 36)) | (1 << (RalphParser.I256 - 36)) | (1 << (RalphParser.U256 - 36)) | (1 << (RalphParser.BYTE - 36)) | (1 << (RalphParser.BYTEVEC - 36)) | (1 << (RalphParser.ADDRESS - 36)) | (1 << (RalphParser.L_BRACKET - 36)) | (1 << (RalphParser.ASSIGN - 36)))) !== 0)) {
				{
				this.state = 178;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.INTERFACE) | (1 << RalphParser.STRUCT) | (1 << RalphParser.ENUM) | (1 << RalphParser.TXSCRIPT) | (1 << RalphParser.TXCONTRACT) | (1 << RalphParser.CONTRACT) | (1 << RalphParser.ASSETSCRIPT))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (RalphParser.BOOL - 36)) | (1 << (RalphParser.I256 - 36)) | (1 << (RalphParser.U256 - 36)) | (1 << (RalphParser.BYTE - 36)) | (1 << (RalphParser.BYTEVEC - 36)) | (1 << (RalphParser.ADDRESS - 36)) | (1 << (RalphParser.L_BRACKET - 36)))) !== 0)) {
					{
					this.state = 177;
					this.type_();
					}
				}

				this.state = 180;
				this.match(RalphParser.ASSIGN);
				this.state = 181;
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
	public letDecl(): LetDeclContext {
		let _localctx: LetDeclContext = new LetDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, RalphParser.RULE_letDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			this.match(RalphParser.LET);
			this.state = 186;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.MUT) {
				{
				this.state = 185;
				this.match(RalphParser.MUT);
				}
			}

			this.state = 199;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.IDENTIFIER:
				{
				this.state = 188;
				this.letSpec();
				}
				break;
			case RalphParser.L_PAREN:
				{
				this.state = 189;
				this.match(RalphParser.L_PAREN);
				this.state = 195;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === RalphParser.IDENTIFIER) {
					{
					{
					this.state = 190;
					this.letSpec();
					this.state = 191;
					this.eos();
					}
					}
					this.state = 197;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 198;
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
	public letSpec(): LetSpecContext {
		let _localctx: LetSpecContext = new LetSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, RalphParser.RULE_letSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
			this.identifierList();
			this.state = 209;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
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
				{
				this.state = 202;
				this.type_();
				this.state = 205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RalphParser.ASSIGN) {
					{
					this.state = 203;
					this.match(RalphParser.ASSIGN);
					this.state = 204;
					this.expressionList();
					}
				}

				}
				break;
			case RalphParser.ASSIGN:
				{
				this.state = 207;
				this.match(RalphParser.ASSIGN);
				this.state = 208;
				this.expressionList();
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
		let _startState: number = 20;
		this.enterRecursionRule(_localctx, 20, RalphParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 215;
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
				{
				this.state = 212;
				this.primaryExpr(0);
				}
				break;
			case RalphParser.SUB:
			case RalphParser.NOT:
				{
				this.state = 213;
				_localctx._unary_op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === RalphParser.SUB || _la === RalphParser.NOT)) {
					_localctx._unary_op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 214;
				this.expression(4);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 228;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 226;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, RalphParser.RULE_expression);
						this.state = 217;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 218;
						_la = this._input.LA(1);
						if (!(((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (RalphParser.CONCAT - 55)) | (1 << (RalphParser.ADD - 55)) | (1 << (RalphParser.SUB - 55)) | (1 << (RalphParser.MUL - 55)) | (1 << (RalphParser.DIV - 55)) | (1 << (RalphParser.MOD - 55)) | (1 << (RalphParser.MODADD - 55)) | (1 << (RalphParser.MODSUB - 55)) | (1 << (RalphParser.MODMUL - 55)) | (1 << (RalphParser.SHL - 55)) | (1 << (RalphParser.SHR - 55)) | (1 << (RalphParser.BITAND - 55)) | (1 << (RalphParser.XOR - 55)) | (1 << (RalphParser.BITOR - 55)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 219;
						this.expression(4);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, RalphParser.RULE_expression);
						this.state = 220;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 221;
						_localctx._rel_op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (RalphParser.EQ - 69)) | (1 << (RalphParser.NQ - 69)) | (1 << (RalphParser.LT - 69)) | (1 << (RalphParser.LE - 69)) | (1 << (RalphParser.GT - 69)) | (1 << (RalphParser.GE - 69)))) !== 0))) {
							_localctx._rel_op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 222;
						this.expression(3);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, RalphParser.RULE_expression);
						this.state = 223;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 224;
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
						this.state = 225;
						this.expression(2);
						}
						break;
					}
					}
				}
				this.state = 230;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
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
		this.enterRule(_localctx, 22, RalphParser.RULE_expressionList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 231;
			this.expression(0);
			this.state = 236;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 232;
					this.match(RalphParser.COMMA);
					this.state = 233;
					this.expression(0);
					}
					}
				}
				this.state = 238;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
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

	public primaryExpr(): PrimaryExprContext;
	public primaryExpr(_p: number): PrimaryExprContext;
	// @RuleVersion(0)
	public primaryExpr(_p?: number): PrimaryExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PrimaryExprContext = new PrimaryExprContext(this._ctx, _parentState);
		let _prevctx: PrimaryExprContext = _localctx;
		let _startState: number = 24;
		this.enterRecursionRule(_localctx, 24, RalphParser.RULE_primaryExpr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 240;
			this.basicLit();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 251;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new PrimaryExprContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, RalphParser.RULE_primaryExpr);
					this.state = 242;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 247;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case RalphParser.DOT:
						{
						{
						this.state = 243;
						this.match(RalphParser.DOT);
						this.state = 244;
						this.match(RalphParser.IDENTIFIER);
						}
						}
						break;
					case RalphParser.L_BRACKET:
						{
						this.state = 245;
						this.index();
						}
						break;
					case RalphParser.L_PAREN:
						{
						this.state = 246;
						this.arguments();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 253;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
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
	public primitiveType(): PrimitiveTypeContext {
		let _localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, RalphParser.RULE_primitiveType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 254;
			_la = this._input.LA(1);
			if (!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (RalphParser.BOOL - 36)) | (1 << (RalphParser.I256 - 36)) | (1 << (RalphParser.U256 - 36)) | (1 << (RalphParser.BYTE - 36)) | (1 << (RalphParser.BYTEVEC - 36)) | (1 << (RalphParser.ADDRESS - 36)))) !== 0))) {
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
		this.enterRule(_localctx, 28, RalphParser.RULE_arrayType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 256;
			this.match(RalphParser.L_BRACKET);
			this.state = 257;
			this.elementType();
			this.state = 258;
			this.match(RalphParser.SEMI);
			this.state = 259;
			this.arrayLength();
			this.state = 260;
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
		this.enterRule(_localctx, 30, RalphParser.RULE_arrayLength);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 262;
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
	public elementType(): ElementTypeContext {
		let _localctx: ElementTypeContext = new ElementTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, RalphParser.RULE_elementType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 264;
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
	public typeDecl(): TypeDeclContext {
		let _localctx: TypeDeclContext = new TypeDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, RalphParser.RULE_typeDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 266;
			this.match(RalphParser.TYPE);
			this.state = 278;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.IDENTIFIER:
				{
				this.state = 267;
				this.typeSpec();
				}
				break;
			case RalphParser.L_PAREN:
				{
				this.state = 268;
				this.match(RalphParser.L_PAREN);
				this.state = 274;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === RalphParser.IDENTIFIER) {
					{
					{
					this.state = 269;
					this.typeSpec();
					this.state = 270;
					this.eos();
					}
					}
					this.state = 276;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 277;
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
	public typeSpec(): TypeSpecContext {
		let _localctx: TypeSpecContext = new TypeSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, RalphParser.RULE_typeSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 280;
			this.match(RalphParser.IDENTIFIER);
			this.state = 282;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.ASSIGN) {
				{
				this.state = 281;
				this.match(RalphParser.ASSIGN);
				}
			}

			this.state = 284;
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
	public typeList(): TypeListContext {
		let _localctx: TypeListContext = new TypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, RalphParser.RULE_typeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 286;
			this.type_();
			}
			this.state = 291;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.COMMA) {
				{
				{
				this.state = 287;
				this.match(RalphParser.COMMA);
				{
				this.state = 288;
				this.type_();
				}
				}
				}
				this.state = 293;
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
	public type_(): Type_Context {
		let _localctx: Type_Context = new Type_Context(this._ctx, this.state);
		this.enterRule(_localctx, 40, RalphParser.RULE_type_);
		try {
			this.state = 296;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.BOOL:
			case RalphParser.I256:
			case RalphParser.U256:
			case RalphParser.BYTE:
			case RalphParser.BYTEVEC:
			case RalphParser.ADDRESS:
			case RalphParser.L_BRACKET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 294;
				this.typeBasic();
				}
				break;
			case RalphParser.INTERFACE:
			case RalphParser.STRUCT:
			case RalphParser.ENUM:
			case RalphParser.TXSCRIPT:
			case RalphParser.TXCONTRACT:
			case RalphParser.CONTRACT:
			case RalphParser.ASSETSCRIPT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 295;
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
	public typeBasic(): TypeBasicContext {
		let _localctx: TypeBasicContext = new TypeBasicContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, RalphParser.RULE_typeBasic);
		try {
			this.state = 300;
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
				this.state = 298;
				this.primitiveType();
				}
				break;
			case RalphParser.L_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 299;
				this.arrayType();
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
	public signature(): SignatureContext {
		let _localctx: SignatureContext = new SignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, RalphParser.RULE_signature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 302;
			this.parameters();
			this.state = 305;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.R_ARROW) {
				{
				this.state = 303;
				this.match(RalphParser.R_ARROW);
				this.state = 304;
				this.result();
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
	public result(): ResultContext {
		let _localctx: ResultContext = new ResultContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, RalphParser.RULE_result);
		let _la: number;
		try {
			let _alt: number;
			this.state = 325;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 307;
				this.match(RalphParser.L_PAREN);
				this.state = 308;
				this.match(RalphParser.R_PAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 309;
				this.type_();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 310;
				this.match(RalphParser.L_PAREN);
				this.state = 322;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.INTERFACE) | (1 << RalphParser.STRUCT) | (1 << RalphParser.ENUM) | (1 << RalphParser.TXSCRIPT) | (1 << RalphParser.TXCONTRACT) | (1 << RalphParser.CONTRACT) | (1 << RalphParser.ASSETSCRIPT))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (RalphParser.BOOL - 36)) | (1 << (RalphParser.I256 - 36)) | (1 << (RalphParser.U256 - 36)) | (1 << (RalphParser.BYTE - 36)) | (1 << (RalphParser.BYTEVEC - 36)) | (1 << (RalphParser.ADDRESS - 36)) | (1 << (RalphParser.L_BRACKET - 36)))) !== 0)) {
					{
					this.state = 311;
					this.type_();
					this.state = 316;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 312;
							this.match(RalphParser.COMMA);
							this.state = 313;
							this.type_();
							}
							}
						}
						this.state = 318;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
					}
					this.state = 320;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RalphParser.COMMA) {
						{
						this.state = 319;
						this.match(RalphParser.COMMA);
						}
					}

					}
				}

				this.state = 324;
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
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, RalphParser.RULE_parameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 327;
			this.match(RalphParser.L_PAREN);
			this.state = 339;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.INTERFACE) | (1 << RalphParser.STRUCT) | (1 << RalphParser.ENUM) | (1 << RalphParser.TXSCRIPT) | (1 << RalphParser.TXCONTRACT) | (1 << RalphParser.CONTRACT) | (1 << RalphParser.ASSETSCRIPT))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (RalphParser.BOOL - 36)) | (1 << (RalphParser.I256 - 36)) | (1 << (RalphParser.U256 - 36)) | (1 << (RalphParser.BYTE - 36)) | (1 << (RalphParser.BYTEVEC - 36)) | (1 << (RalphParser.ADDRESS - 36)) | (1 << (RalphParser.IDENTIFIER - 36)) | (1 << (RalphParser.L_BRACKET - 36)))) !== 0)) {
				{
				this.state = 328;
				this.parameterDecl();
				this.state = 333;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 329;
						this.match(RalphParser.COMMA);
						this.state = 330;
						this.parameterDecl();
						}
						}
					}
					this.state = 335;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
				}
				this.state = 337;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RalphParser.COMMA) {
					{
					this.state = 336;
					this.match(RalphParser.COMMA);
					}
				}

				}
			}

			this.state = 341;
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
	public parameterDecl(): ParameterDeclContext {
		let _localctx: ParameterDeclContext = new ParameterDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, RalphParser.RULE_parameterDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 344;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.IDENTIFIER) {
				{
				this.state = 343;
				this.identifierList();
				}
			}

			this.state = 346;
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
	public basicLit(): BasicLitContext {
		let _localctx: BasicLitContext = new BasicLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, RalphParser.RULE_basicLit);
		try {
			this.state = 350;
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
				this.state = 348;
				this.integer();
				}
				break;
			case RalphParser.RAW_STRING_LIT:
			case RalphParser.INTERPRETED_STRING_LIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 349;
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
		this.enterRule(_localctx, 54, RalphParser.RULE_integer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 352;
			_la = this._input.LA(1);
			if (!(((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (RalphParser.DECIMAL_LIT - 78)) | (1 << (RalphParser.BINARY_LIT - 78)) | (1 << (RalphParser.OCTAL_LIT - 78)) | (1 << (RalphParser.HEX_LIT - 78)) | (1 << (RalphParser.IMAGINARY_LIT - 78)) | (1 << (RalphParser.RUNE_LIT - 78)))) !== 0))) {
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
		this.enterRule(_localctx, 56, RalphParser.RULE_fieldDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 355;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.LET) {
				{
				this.state = 354;
				this.match(RalphParser.LET);
				}
			}

			this.state = 358;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.MUT) {
				{
				this.state = 357;
				this.match(RalphParser.MUT);
				}
			}

			this.state = 360;
			this.identifierList();
			this.state = 361;
			this.match(RalphParser.COLON);
			this.state = 362;
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
	public string_(): String_Context {
		let _localctx: String_Context = new String_Context(this._ctx, this.state);
		this.enterRule(_localctx, 58, RalphParser.RULE_string_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 364;
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
	public index(): IndexContext {
		let _localctx: IndexContext = new IndexContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, RalphParser.RULE_index);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 366;
			this.match(RalphParser.L_BRACKET);
			this.state = 367;
			this.expression(0);
			this.state = 368;
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
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, RalphParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 370;
			this.match(RalphParser.L_PAREN);
			this.state = 375;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (RalphParser.SUB - 57)) | (1 << (RalphParser.NOT - 57)) | (1 << (RalphParser.DECIMAL_LIT - 57)) | (1 << (RalphParser.BINARY_LIT - 57)) | (1 << (RalphParser.OCTAL_LIT - 57)) | (1 << (RalphParser.HEX_LIT - 57)) | (1 << (RalphParser.IMAGINARY_LIT - 57)) | (1 << (RalphParser.RUNE_LIT - 57)))) !== 0) || _la === RalphParser.RAW_STRING_LIT || _la === RalphParser.INTERPRETED_STRING_LIT) {
				{
				{
				this.state = 371;
				this.expressionList();
				}
				this.state = 373;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RalphParser.COMMA) {
					{
					this.state = 372;
					this.match(RalphParser.COMMA);
					}
				}

				}
			}

			this.state = 377;
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
	public methodDecl(): MethodDeclContext {
		let _localctx: MethodDeclContext = new MethodDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, RalphParser.RULE_methodDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 382;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.AT || _la === RalphParser.EOS) {
				{
				this.state = 379;
				this.annotation();
				this.state = 380;
				this.match(RalphParser.EOS);
				}
			}

			this.state = 385;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.PUB) {
				{
				this.state = 384;
				this.match(RalphParser.PUB);
				}
			}

			this.state = 387;
			this.match(RalphParser.FN);
			this.state = 389;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.PAYABLE) {
				{
				this.state = 388;
				this.match(RalphParser.PAYABLE);
				}
			}

			this.state = 391;
			this.match(RalphParser.IDENTIFIER);
			this.state = 392;
			this.signature();
			this.state = 394;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.L_CURLY) {
				{
				this.state = 393;
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
	public typeStruct(): TypeStructContext {
		let _localctx: TypeStructContext = new TypeStructContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, RalphParser.RULE_typeStruct);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 396;
			this.typeStructHeader();
			this.state = 397;
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
		this.enterRule(_localctx, 68, RalphParser.RULE_typeParam);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 399;
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
		this.enterRule(_localctx, 70, RalphParser.RULE_typeStructHeader);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 401;
			this.typeParam();
			this.state = 402;
			this.match(RalphParser.IDENTIFIER);
			this.state = 413;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.LT) {
				{
				this.state = 403;
				this.match(RalphParser.LT);
				this.state = 409;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (RalphParser.LET - 25)) | (1 << (RalphParser.MUT - 25)) | (1 << (RalphParser.IDENTIFIER - 25)))) !== 0)) {
					{
					{
					this.state = 404;
					this.fieldDecl();
					this.state = 405;
					this.eos();
					}
					}
					this.state = 411;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 412;
				this.match(RalphParser.GT);
				}
			}

			this.state = 425;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.L_PAREN) {
				{
				this.state = 415;
				this.match(RalphParser.L_PAREN);
				this.state = 421;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (RalphParser.LET - 25)) | (1 << (RalphParser.MUT - 25)) | (1 << (RalphParser.IDENTIFIER - 25)))) !== 0)) {
					{
					{
					this.state = 416;
					this.fieldDecl();
					this.state = 417;
					this.eos();
					}
					}
					this.state = 423;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 424;
				this.match(RalphParser.R_PAREN);
				}
			}

			this.state = 441;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.EXTENDS || _la === RalphParser.IMPLEMENTS) {
				{
				this.state = 427;
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
				this.state = 428;
				this.match(RalphParser.IDENTIFIER);
				this.state = 439;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RalphParser.L_PAREN) {
					{
					this.state = 429;
					this.match(RalphParser.L_PAREN);
					this.state = 435;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (RalphParser.LET - 25)) | (1 << (RalphParser.MUT - 25)) | (1 << (RalphParser.IDENTIFIER - 25)))) !== 0)) {
						{
						{
						this.state = 430;
						this.fieldDecl();
						this.state = 431;
						this.eos();
						}
						}
						this.state = 437;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 438;
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
		this.enterRule(_localctx, 72, RalphParser.RULE_typeStructBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 443;
			this.match(RalphParser.L_CURLY);
			this.state = 453;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.FN) | (1 << RalphParser.PUB) | (1 << RalphParser.LET) | (1 << RalphParser.MUT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RalphParser.EVENT - 32)) | (1 << (RalphParser.EVMIT - 32)) | (1 << (RalphParser.AT - 32)) | (1 << (RalphParser.IDENTIFIER - 32)))) !== 0) || _la === RalphParser.EOS) {
				{
				{
				this.state = 447;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RalphParser.LET:
				case RalphParser.MUT:
				case RalphParser.IDENTIFIER:
					{
					this.state = 444;
					this.fieldDecl();
					}
					break;
				case RalphParser.EVENT:
				case RalphParser.EVMIT:
					{
					this.state = 445;
					this.eventEmit();
					}
					break;
				case RalphParser.FN:
				case RalphParser.PUB:
				case RalphParser.AT:
				case RalphParser.EOS:
					{
					this.state = 446;
					this.methodDecl();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 449;
				this.eos();
				}
				}
				this.state = 455;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 456;
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
		this.enterRule(_localctx, 74, RalphParser.RULE_eventEmit);
		let _la: number;
		try {
			this.state = 480;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.EVENT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 458;
				this.match(RalphParser.EVENT);
				this.state = 459;
				this.match(RalphParser.IDENTIFIER);
				this.state = 470;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RalphParser.L_PAREN) {
					{
					this.state = 460;
					this.match(RalphParser.L_PAREN);
					this.state = 466;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (RalphParser.LET - 25)) | (1 << (RalphParser.MUT - 25)) | (1 << (RalphParser.IDENTIFIER - 25)))) !== 0)) {
						{
						{
						this.state = 461;
						this.fieldDecl();
						this.state = 462;
						this.eos();
						}
						}
						this.state = 468;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 469;
					this.match(RalphParser.R_PAREN);
					}
				}

				}
				break;
			case RalphParser.EVMIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 472;
				this.match(RalphParser.EVMIT);
				this.state = 473;
				this.match(RalphParser.IDENTIFIER);
				this.state = 478;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RalphParser.L_PAREN) {
					{
					this.state = 474;
					this.match(RalphParser.L_PAREN);
					this.state = 475;
					this.expressionList();
					this.state = 476;
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
		this.enterRule(_localctx, 76, RalphParser.RULE_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 488;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.AT) {
				{
				this.state = 482;
				this.match(RalphParser.AT);
				this.state = 483;
				this.match(RalphParser.USING);
				this.state = 484;
				this.match(RalphParser.L_PAREN);
				this.state = 485;
				this.varAssignParamList();
				this.state = 486;
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
	public varAssignParamList(): VarAssignParamListContext {
		let _localctx: VarAssignParamListContext = new VarAssignParamListContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, RalphParser.RULE_varAssignParamList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 490;
			this.assign();
			this.state = 495;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.COMMA) {
				{
				{
				this.state = 491;
				this.match(RalphParser.COMMA);
				this.state = 492;
				this.assign();
				}
				}
				this.state = 497;
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
		this.enterRule(_localctx, 80, RalphParser.RULE_assign);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 500;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.IDENTIFIER:
				{
				this.state = 498;
				this.match(RalphParser.IDENTIFIER);
				}
				break;
			case RalphParser.L_PAREN:
				{
				this.state = 499;
				this.varParamList();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 502;
			this.match(RalphParser.ASSIGN);
			this.state = 503;
			this.expressionStmt();
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
	public varParamList(): VarParamListContext {
		let _localctx: VarParamListContext = new VarParamListContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, RalphParser.RULE_varParamList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 505;
			this.match(RalphParser.L_PAREN);
			this.state = 506;
			this.match(RalphParser.IDENTIFIER);
			this.state = 511;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RalphParser.COMMA) {
				{
				{
				this.state = 507;
				this.match(RalphParser.COMMA);
				this.state = 508;
				this.match(RalphParser.IDENTIFIER);
				}
				}
				this.state = 513;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 514;
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
		this.enterRule(_localctx, 84, RalphParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 516;
			this.match(RalphParser.L_CURLY);
			this.state = 518;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.RETURN) | (1 << RalphParser.IF) | (1 << RalphParser.FOR) | (1 << RalphParser.WHILE) | (1 << RalphParser.BREAK) | (1 << RalphParser.CONTINUE) | (1 << RalphParser.TYPE) | (1 << RalphParser.LET) | (1 << RalphParser.CONST))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RalphParser.EVENT - 32)) | (1 << (RalphParser.EVMIT - 32)) | (1 << (RalphParser.L_CURLY - 32)) | (1 << (RalphParser.SEMI - 32)) | (1 << (RalphParser.SUB - 32)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (RalphParser.NOT - 77)) | (1 << (RalphParser.DECIMAL_LIT - 77)) | (1 << (RalphParser.BINARY_LIT - 77)) | (1 << (RalphParser.OCTAL_LIT - 77)) | (1 << (RalphParser.HEX_LIT - 77)) | (1 << (RalphParser.IMAGINARY_LIT - 77)) | (1 << (RalphParser.RUNE_LIT - 77)) | (1 << (RalphParser.RAW_STRING_LIT - 77)) | (1 << (RalphParser.INTERPRETED_STRING_LIT - 77)) | (1 << (RalphParser.EOS - 77)))) !== 0)) {
				{
				this.state = 517;
				this.statementList();
				}
			}

			this.state = 520;
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
		this.enterRule(_localctx, 86, RalphParser.RULE_statementList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 533;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 528;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
				case 1:
					{
					this.state = 523;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
					case 1:
						{
						this.state = 522;
						this.match(RalphParser.SEMI);
						}
						break;
					}
					}
					break;

				case 2:
					{
					this.state = 526;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
					case 1:
						{
						this.state = 525;
						this.match(RalphParser.EOS);
						}
						break;
					}
					}
					break;
				}
				this.state = 530;
				this.statement();
				this.state = 531;
				this.eos();
				}
				}
				this.state = 535;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RalphParser.RETURN) | (1 << RalphParser.IF) | (1 << RalphParser.FOR) | (1 << RalphParser.WHILE) | (1 << RalphParser.BREAK) | (1 << RalphParser.CONTINUE) | (1 << RalphParser.TYPE) | (1 << RalphParser.LET) | (1 << RalphParser.CONST))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RalphParser.EVENT - 32)) | (1 << (RalphParser.EVMIT - 32)) | (1 << (RalphParser.L_CURLY - 32)) | (1 << (RalphParser.SEMI - 32)) | (1 << (RalphParser.SUB - 32)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (RalphParser.NOT - 77)) | (1 << (RalphParser.DECIMAL_LIT - 77)) | (1 << (RalphParser.BINARY_LIT - 77)) | (1 << (RalphParser.OCTAL_LIT - 77)) | (1 << (RalphParser.HEX_LIT - 77)) | (1 << (RalphParser.IMAGINARY_LIT - 77)) | (1 << (RalphParser.RUNE_LIT - 77)) | (1 << (RalphParser.RAW_STRING_LIT - 77)) | (1 << (RalphParser.INTERPRETED_STRING_LIT - 77)) | (1 << (RalphParser.EOS - 77)))) !== 0));
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
		this.enterRule(_localctx, 88, RalphParser.RULE_statement);
		try {
			this.state = 546;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.TYPE:
			case RalphParser.LET:
			case RalphParser.CONST:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 537;
				this.declaration();
				}
				break;
			case RalphParser.EVENT:
			case RalphParser.EVMIT:
			case RalphParser.SEMI:
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
			case RalphParser.EOS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 538;
				this.simpleStmt();
				}
				break;
			case RalphParser.RETURN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 539;
				this.returnStmt();
				}
				break;
			case RalphParser.BREAK:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 540;
				this.breakStmt();
				}
				break;
			case RalphParser.CONTINUE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 541;
				this.continueStmt();
				}
				break;
			case RalphParser.L_CURLY:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 542;
				this.block();
				}
				break;
			case RalphParser.IF:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 543;
				this.ifStmt();
				}
				break;
			case RalphParser.FOR:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 544;
				this.forStmt();
				}
				break;
			case RalphParser.WHILE:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 545;
				this.whileStmt();
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
	public simpleStmt(): SimpleStmtContext {
		let _localctx: SimpleStmtContext = new SimpleStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, RalphParser.RULE_simpleStmt);
		try {
			this.state = 551;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RalphParser.SEMI:
			case RalphParser.EOS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 548;
				this.emptyStmt();
				}
				break;
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
				this.state = 549;
				this.expressionStmt();
				}
				break;
			case RalphParser.EVENT:
			case RalphParser.EVMIT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 550;
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
		this.enterRule(_localctx, 92, RalphParser.RULE_expressionStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 553;
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
		this.enterRule(_localctx, 94, RalphParser.RULE_emptyStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 555;
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
		this.enterRule(_localctx, 96, RalphParser.RULE_returnStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 557;
			this.match(RalphParser.RETURN);
			this.state = 559;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (RalphParser.SUB - 57)) | (1 << (RalphParser.NOT - 57)) | (1 << (RalphParser.DECIMAL_LIT - 57)) | (1 << (RalphParser.BINARY_LIT - 57)) | (1 << (RalphParser.OCTAL_LIT - 57)) | (1 << (RalphParser.HEX_LIT - 57)) | (1 << (RalphParser.IMAGINARY_LIT - 57)) | (1 << (RalphParser.RUNE_LIT - 57)))) !== 0) || _la === RalphParser.RAW_STRING_LIT || _la === RalphParser.INTERPRETED_STRING_LIT) {
				{
				this.state = 558;
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
	public breakStmt(): BreakStmtContext {
		let _localctx: BreakStmtContext = new BreakStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, RalphParser.RULE_breakStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 561;
			this.match(RalphParser.BREAK);
			this.state = 563;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.IDENTIFIER) {
				{
				this.state = 562;
				this.match(RalphParser.IDENTIFIER);
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
	public continueStmt(): ContinueStmtContext {
		let _localctx: ContinueStmtContext = new ContinueStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, RalphParser.RULE_continueStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 565;
			this.match(RalphParser.CONTINUE);
			this.state = 567;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.IDENTIFIER) {
				{
				this.state = 566;
				this.match(RalphParser.IDENTIFIER);
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
		this.enterRule(_localctx, 102, RalphParser.RULE_ifStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 569;
			this.match(RalphParser.IF);
			this.state = 578;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				{
				this.state = 570;
				this.expression(0);
				}
				break;

			case 2:
				{
				this.state = 571;
				this.eos();
				this.state = 572;
				this.expression(0);
				}
				break;

			case 3:
				{
				this.state = 574;
				this.simpleStmt();
				this.state = 575;
				this.eos();
				this.state = 576;
				this.expression(0);
				}
				break;
			}
			this.state = 580;
			this.block();
			this.state = 586;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RalphParser.ELSE) {
				{
				this.state = 581;
				this.match(RalphParser.ELSE);
				this.state = 584;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RalphParser.IF:
					{
					this.state = 582;
					this.ifStmt();
					}
					break;
				case RalphParser.L_CURLY:
					{
					this.state = 583;
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
	public forStmt(): ForStmtContext {
		let _localctx: ForStmtContext = new ForStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, RalphParser.RULE_forStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 588;
			this.match(RalphParser.FOR);
			{
			this.state = 590;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (RalphParser.SUB - 57)) | (1 << (RalphParser.NOT - 57)) | (1 << (RalphParser.DECIMAL_LIT - 57)) | (1 << (RalphParser.BINARY_LIT - 57)) | (1 << (RalphParser.OCTAL_LIT - 57)) | (1 << (RalphParser.HEX_LIT - 57)) | (1 << (RalphParser.IMAGINARY_LIT - 57)) | (1 << (RalphParser.RUNE_LIT - 57)))) !== 0) || _la === RalphParser.RAW_STRING_LIT || _la === RalphParser.INTERPRETED_STRING_LIT) {
				{
				this.state = 589;
				this.expression(0);
				}
			}

			}
			this.state = 592;
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
	public whileStmt(): WhileStmtContext {
		let _localctx: WhileStmtContext = new WhileStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, RalphParser.RULE_whileStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 594;
			this.match(RalphParser.WHILE);
			{
			this.state = 596;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (RalphParser.SUB - 57)) | (1 << (RalphParser.NOT - 57)) | (1 << (RalphParser.DECIMAL_LIT - 57)) | (1 << (RalphParser.BINARY_LIT - 57)) | (1 << (RalphParser.OCTAL_LIT - 57)) | (1 << (RalphParser.HEX_LIT - 57)) | (1 << (RalphParser.IMAGINARY_LIT - 57)) | (1 << (RalphParser.RUNE_LIT - 57)))) !== 0) || _la === RalphParser.RAW_STRING_LIT || _la === RalphParser.INTERPRETED_STRING_LIT) {
				{
				this.state = 595;
				this.expression(0);
				}
			}

			}
			this.state = 598;
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
		this.enterRule(_localctx, 108, RalphParser.RULE_eos);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 600;
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
		case 10:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 12:
			return this.primaryExpr_sempred(_localctx as PrimaryExprContext, predIndex);
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
	private primaryExpr_sempred(_localctx: PrimaryExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03d\u025D\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x03\x02\x03\x02\x03\x02\x07\x02t\n" +
		"\x02\f\x02\x0E\x02w\v\x02\x03\x02\x03\x02\x03\x02\x07\x02|\n\x02\f\x02" +
		"\x0E\x02\x7F\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x07\x03\x89\n\x03\f\x03\x0E\x03\x8C\v\x03\x03\x03\x05\x03" +
		"\x8F\n\x03\x03\x04\x05\x04\x92\n\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
		"\x06\x03\x06\x03\x06\x05\x06\x9B\n\x06\x03\x07\x03\x07\x03\x07\x07\x07" +
		"\xA0\n\x07\f\x07\x0E\x07\xA3\v\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b" +
		"\x07\b\xAB\n\b\f\b\x0E\b\xAE\v\b\x03\b\x05\b\xB1\n\b\x03\t\x03\t\x05\t" +
		"\xB5\n\t\x03\t\x03\t\x05\t\xB9\n\t\x03\n\x03\n\x05\n\xBD\n\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x07\n\xC4\n\n\f\n\x0E\n\xC7\v\n\x03\n\x05\n\xCA\n" +
		"\n\x03\v\x03\v\x03\v\x03\v\x05\v\xD0\n\v\x03\v\x03\v\x05\v\xD4\n\v\x03" +
		"\f\x03\f\x03\f\x03\f\x05\f\xDA\n\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f" +
		"\x03\f\x03\f\x03\f\x07\f\xE5\n\f\f\f\x0E\f\xE8\v\f\x03\r\x03\r\x03\r\x07" +
		"\r\xED\n\r\f\r\x0E\r\xF0\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x05\x0E\xFA\n\x0E\x07\x0E\xFC\n\x0E\f\x0E\x0E\x0E" +
		"\xFF\v\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x07\x13\u0113\n\x13\f\x13\x0E\x13\u0116\v\x13\x03\x13\x05" +
		"\x13\u0119\n\x13\x03\x14\x03\x14\x05\x14\u011D\n\x14\x03\x14\x03\x14\x03" +
		"\x15\x03\x15\x03\x15\x07\x15\u0124\n\x15\f\x15\x0E\x15\u0127\v\x15\x03" +
		"\x16\x03\x16\x05\x16\u012B\n\x16\x03\x17\x03\x17\x05\x17\u012F\n\x17\x03" +
		"\x18\x03\x18\x03\x18\x05\x18\u0134\n\x18\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x07\x19\u013D\n\x19\f\x19\x0E\x19\u0140\v\x19" +
		"\x03\x19\x05\x19\u0143\n\x19\x05\x19\u0145\n\x19\x03\x19\x05\x19\u0148" +
		"\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u014E\n\x1A\f\x1A\x0E\x1A" +
		"\u0151\v\x1A\x03\x1A\x05\x1A\u0154\n\x1A\x05\x1A\u0156\n\x1A\x03\x1A\x03" +
		"\x1A\x03\x1B\x05\x1B\u015B\n\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x05\x1C" +
		"\u0161\n\x1C\x03\x1D\x03\x1D\x03\x1E\x05\x1E\u0166\n\x1E\x03\x1E\x05\x1E" +
		"\u0169\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03" +
		" \x03 \x03 \x03!\x03!\x03!\x05!\u0178\n!\x05!\u017A\n!\x03!\x03!\x03\"" +
		"\x03\"\x03\"\x05\"\u0181\n\"\x03\"\x05\"\u0184\n\"\x03\"\x03\"\x05\"\u0188" +
		"\n\"\x03\"\x03\"\x03\"\x05\"\u018D\n\"\x03#\x03#\x03#\x03$\x03$\x03%\x03" +
		"%\x03%\x03%\x03%\x03%\x07%\u019A\n%\f%\x0E%\u019D\v%\x03%\x05%\u01A0\n" +
		"%\x03%\x03%\x03%\x03%\x07%\u01A6\n%\f%\x0E%\u01A9\v%\x03%\x05%\u01AC\n" +
		"%\x03%\x03%\x03%\x03%\x03%\x03%\x07%\u01B4\n%\f%\x0E%\u01B7\v%\x03%\x05" +
		"%\u01BA\n%\x05%\u01BC\n%\x03&\x03&\x03&\x03&\x05&\u01C2\n&\x03&\x03&\x07" +
		"&\u01C6\n&\f&\x0E&\u01C9\v&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x03" +
		"\'\x07\'\u01D3\n\'\f\'\x0E\'\u01D6\v\'\x03\'\x05\'\u01D9\n\'\x03\'\x03" +
		"\'\x03\'\x03\'\x03\'\x03\'\x05\'\u01E1\n\'\x05\'\u01E3\n\'\x03(\x03(\x03" +
		"(\x03(\x03(\x03(\x05(\u01EB\n(\x03)\x03)\x03)\x07)\u01F0\n)\f)\x0E)\u01F3" +
		"\v)\x03*\x03*\x05*\u01F7\n*\x03*\x03*\x03*\x03+\x03+\x03+\x03+\x07+\u0200" +
		"\n+\f+\x0E+\u0203\v+\x03+\x03+\x03,\x03,\x05,\u0209\n,\x03,\x03,\x03-" +
		"\x05-\u020E\n-\x03-\x05-\u0211\n-\x05-\u0213\n-\x03-\x03-\x03-\x06-\u0218" +
		"\n-\r-\x0E-\u0219\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x05.\u0225" +
		"\n.\x03/\x03/\x03/\x05/\u022A\n/\x030\x030\x031\x031\x032\x032\x052\u0232" +
		"\n2\x033\x033\x053\u0236\n3\x034\x034\x054\u023A\n4\x035\x035\x035\x03" +
		"5\x035\x035\x035\x035\x035\x055\u0245\n5\x035\x035\x035\x035\x055\u024B" +
		"\n5\x055\u024D\n5\x036\x036\x056\u0251\n6\x036\x036\x037\x037\x057\u0257" +
		"\n7\x037\x037\x038\x038\x038\x02\x02\x04\x16\x1A9\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02" +
		"2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02" +
		"N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02" +
		"j\x02l\x02n\x02\x02\x0E\x04\x02--88\x04\x02;;OO\x03\x029F\x03\x02GL\x03" +
		"\x02MN\x03\x02&+\x04\x02PSWX\x03\x02^_\x03\x02\t\x0F\x04\x02\x1F\x1F!" +
		"!\x04\x0266dd\x04\x0366dd\x02\u0281\x02u\x03\x02\x02\x02\x04\x82\x03\x02" +
		"\x02\x02\x06\x91\x03\x02\x02\x02\b\x95\x03\x02\x02\x02\n\x9A\x03\x02\x02" +
		"\x02\f\x9C\x03\x02\x02\x02\x0E\xA4\x03\x02\x02\x02\x10\xB2\x03\x02\x02" +
		"\x02\x12\xBA\x03\x02\x02\x02\x14\xCB\x03\x02\x02\x02\x16\xD9\x03\x02\x02" +
		"\x02\x18\xE9\x03\x02\x02\x02\x1A\xF1\x03\x02\x02\x02\x1C\u0100\x03\x02" +
		"\x02\x02\x1E\u0102\x03\x02\x02\x02 \u0108\x03\x02\x02\x02\"\u010A\x03" +
		"\x02\x02\x02$\u010C\x03\x02\x02\x02&\u011A\x03\x02\x02\x02(\u0120\x03" +
		"\x02\x02\x02*\u012A\x03\x02\x02\x02,\u012E\x03\x02\x02\x02.\u0130\x03" +
		"\x02\x02\x020\u0147\x03\x02\x02\x022\u0149\x03\x02\x02\x024\u015A\x03" +
		"\x02\x02\x026\u0160\x03\x02\x02\x028\u0162\x03\x02\x02\x02:\u0165\x03" +
		"\x02\x02\x02<\u016E\x03\x02\x02\x02>\u0170\x03\x02\x02\x02@\u0174\x03" +
		"\x02\x02\x02B\u0180\x03\x02\x02\x02D\u018E\x03\x02\x02\x02F\u0191\x03" +
		"\x02\x02\x02H\u0193\x03\x02\x02\x02J\u01BD\x03\x02\x02\x02L\u01E2\x03" +
		"\x02\x02\x02N\u01EA\x03\x02\x02\x02P\u01EC\x03\x02\x02\x02R\u01F6\x03" +
		"\x02\x02\x02T\u01FB\x03\x02\x02\x02V\u0206\x03\x02\x02\x02X\u0217\x03" +
		"\x02\x02\x02Z\u0224\x03\x02\x02\x02\\\u0229\x03\x02\x02\x02^\u022B\x03" +
		"\x02\x02\x02`\u022D\x03\x02\x02\x02b\u022F\x03\x02\x02\x02d\u0233\x03" +
		"\x02\x02\x02f\u0237\x03\x02\x02\x02h\u023B\x03\x02\x02\x02j\u024E\x03" +
		"\x02\x02\x02l\u0254\x03\x02\x02\x02n\u025A\x03\x02\x02\x02pq\x05\x04\x03" +
		"\x02qr\x05n8\x02rt\x03\x02\x02\x02sp\x03\x02\x02\x02tw\x03\x02\x02\x02" +
		"us\x03\x02\x02\x02uv\x03\x02\x02\x02v}\x03\x02\x02\x02wu\x03\x02\x02\x02" +
		"xy\x05\n\x06\x02yz\x05n8\x02z|\x03\x02\x02\x02{x\x03\x02\x02\x02|\x7F" +
		"\x03\x02\x02\x02}{\x03\x02\x02\x02}~\x03\x02\x02\x02~\x80\x03\x02\x02" +
		"\x02\x7F}\x03\x02\x02\x02\x80\x81\x07\x02\x02\x03\x81\x03\x03\x02\x02" +
		"\x02\x82\x8E\x07\x03\x02\x02\x83\x8F\x05\x06\x04\x02\x84\x8A\x07.\x02" +
		"\x02\x85\x86\x05\x06\x04\x02\x86\x87\x05n8\x02\x87\x89\x03\x02\x02\x02" +
		"\x88\x85\x03\x02\x02\x02\x89\x8C\x03\x02\x02\x02\x8A\x88\x03\x02\x02\x02" +
		"\x8A\x8B\x03\x02\x02\x02\x8B\x8D\x03\x02\x02\x02\x8C\x8A\x03\x02\x02\x02" +
		"\x8D\x8F\x07/\x02\x02\x8E\x83\x03\x02\x02\x02\x8E\x84\x03\x02\x02\x02" +
		"\x8F\x05\x03\x02\x02\x02\x90\x92\t\x02\x02\x02\x91\x90\x03\x02\x02\x02" +
		"\x91\x92\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x94\x05\b\x05\x02" +
		"\x94\x07\x03\x02\x02\x02\x95\x96\x05<\x1F\x02\x96\t\x03\x02\x02\x02\x97" +
		"\x9B\x05\x0E\b\x02\x98\x9B\x05$\x13\x02\x99\x9B\x05\x12\n\x02\x9A\x97" +
		"\x03\x02\x02\x02\x9A\x98\x03\x02\x02\x02\x9A\x99\x03\x02\x02\x02\x9B\v" +
		"\x03\x02\x02\x02\x9C\xA1\x07-\x02\x02\x9D\x9E\x075\x02\x02\x9E\xA0\x07" +
		"-\x02\x02\x9F\x9D\x03\x02\x02\x02\xA0\xA3\x03\x02\x02\x02\xA1\x9F\x03" +
		"\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\r\x03\x02\x02\x02\xA3\xA1\x03" +
		"\x02\x02\x02\xA4\xB0\x07\x1C\x02\x02\xA5\xB1\x05\x10\t\x02\xA6\xAC\x07" +
		".\x02\x02\xA7\xA8\x05\x10\t\x02\xA8\xA9\x05n8\x02\xA9\xAB\x03\x02\x02" +
		"\x02\xAA\xA7\x03\x02\x02\x02\xAB\xAE\x03\x02\x02\x02\xAC\xAA\x03\x02\x02" +
		"\x02\xAC\xAD\x03\x02\x02\x02\xAD\xAF\x03\x02\x02\x02\xAE\xAC\x03\x02\x02" +
		"\x02\xAF\xB1\x07/\x02\x02\xB0\xA5\x03\x02\x02\x02\xB0\xA6\x03\x02\x02" +
		"\x02\xB1\x0F\x03\x02\x02\x02\xB2\xB8\x05\f\x07\x02\xB3\xB5\x05*\x16\x02" +
		"\xB4\xB3\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02" +
		"\xB6\xB7\x074\x02\x02\xB7\xB9\x05\x18\r\x02\xB8\xB4\x03\x02\x02\x02\xB8" +
		"\xB9\x03\x02\x02\x02\xB9\x11\x03\x02\x02\x02\xBA\xBC\x07\x1B\x02\x02\xBB" +
		"\xBD\x07\x1D\x02\x02\xBC\xBB\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD" +
		"\xC9\x03\x02\x02\x02\xBE\xCA\x05\x14\v\x02\xBF\xC5\x07.\x02\x02\xC0\xC1" +
		"\x05\x14\v\x02\xC1\xC2\x05n8\x02\xC2\xC4\x03\x02\x02\x02\xC3\xC0\x03\x02" +
		"\x02\x02\xC4\xC7\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC5\xC6\x03\x02" +
		"\x02\x02\xC6\xC8\x03\x02\x02\x02\xC7\xC5\x03\x02\x02\x02\xC8\xCA\x07/" +
		"\x02\x02\xC9\xBE\x03\x02\x02\x02\xC9\xBF\x03\x02\x02\x02\xCA\x13\x03\x02" +
		"\x02\x02\xCB\xD3\x05\f\x07\x02\xCC\xCF\x05*\x16\x02\xCD\xCE\x074\x02\x02" +
		"\xCE\xD0\x05\x18\r\x02\xCF\xCD\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02" +
		"\xD0\xD4\x03\x02\x02\x02\xD1\xD2\x074\x02\x02\xD2\xD4\x05\x18\r\x02\xD3" +
		"\xCC\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD4\x15\x03\x02\x02\x02\xD5" +
		"\xD6\b\f\x01\x02\xD6\xDA\x05\x1A\x0E\x02\xD7\xD8\t\x03\x02\x02\xD8\xDA" +
		"\x05\x16\f\x06\xD9\xD5\x03\x02\x02\x02\xD9\xD7\x03\x02\x02\x02\xDA\xE6" +
		"\x03\x02\x02\x02\xDB\xDC\f\x05\x02\x02\xDC\xDD\t\x04\x02\x02\xDD\xE5\x05" +
		"\x16\f\x06\xDE\xDF\f\x04\x02\x02\xDF\xE0\t\x05\x02\x02\xE0\xE5\x05\x16" +
		"\f\x05\xE1\xE2\f\x03\x02\x02\xE2\xE3\t\x06\x02\x02\xE3\xE5\x05\x16\f\x04" +
		"\xE4\xDB\x03\x02\x02\x02\xE4\xDE\x03\x02\x02\x02\xE4\xE1\x03\x02\x02\x02" +
		"\xE5\xE8\x03\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02" +
		"\xE7\x17\x03\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE9\xEE\x05\x16\f\x02" +
		"\xEA\xEB\x075\x02\x02\xEB\xED\x05\x16\f\x02\xEC\xEA\x03\x02\x02\x02\xED" +
		"\xF0\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF" +
		"\x19\x03\x02\x02\x02\xF0\xEE\x03\x02\x02\x02\xF1\xF2\b\x0E\x01\x02\xF2" +
		"\xF3\x056\x1C\x02\xF3\xFD\x03\x02\x02\x02\xF4\xF9\f\x03\x02\x02\xF5\xF6" +
		"\x078\x02\x02\xF6\xFA\x07-\x02\x02\xF7\xFA\x05> \x02\xF8\xFA\x05@!\x02" +
		"\xF9\xF5\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xF9\xF8\x03\x02\x02\x02" +
		"\xFA\xFC\x03\x02\x02\x02\xFB\xF4\x03\x02\x02\x02\xFC\xFF\x03\x02\x02\x02" +
		"\xFD\xFB\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\x1B\x03\x02\x02\x02" +
		"\xFF\xFD\x03\x02\x02\x02\u0100\u0101\t\x07\x02\x02\u0101\x1D\x03\x02\x02" +
		"\x02\u0102\u0103\x072\x02\x02\u0103\u0104\x05\"\x12\x02\u0104\u0105\x07" +
		"6\x02\x02\u0105\u0106\x05 \x11\x02\u0106\u0107\x073\x02\x02\u0107\x1F" +
		"\x03\x02\x02\x02\u0108\u0109\x05\x16\f\x02\u0109!\x03\x02\x02\x02\u010A" +
		"\u010B\x05*\x16\x02\u010B#\x03\x02\x02\x02\u010C\u0118\x07\x1A\x02\x02" +
		"\u010D\u0119\x05&\x14\x02\u010E\u0114\x07.\x02\x02\u010F\u0110\x05&\x14" +
		"\x02\u0110\u0111\x05n8\x02\u0111\u0113\x03\x02\x02\x02\u0112\u010F\x03" +
		"\x02\x02\x02\u0113\u0116\x03\x02\x02\x02\u0114\u0112\x03\x02\x02\x02\u0114" +
		"\u0115\x03\x02\x02\x02\u0115\u0117\x03\x02\x02\x02\u0116\u0114\x03\x02" +
		"\x02\x02\u0117\u0119\x07/\x02\x02\u0118\u010D\x03\x02\x02\x02\u0118\u010E" +
		"\x03\x02\x02\x02\u0119%\x03\x02\x02\x02\u011A\u011C\x07-\x02\x02\u011B" +
		"\u011D\x074\x02\x02\u011C\u011B\x03\x02\x02\x02\u011C\u011D\x03\x02\x02" +
		"\x02\u011D\u011E\x03\x02\x02\x02\u011E\u011F\x05*\x16\x02\u011F\'\x03" +
		"\x02\x02\x02\u0120\u0125\x05*\x16\x02\u0121\u0122\x075\x02\x02\u0122\u0124" +
		"\x05*\x16\x02\u0123\u0121\x03\x02\x02\x02\u0124\u0127\x03\x02\x02\x02" +
		"\u0125\u0123\x03\x02\x02\x02\u0125\u0126\x03\x02\x02\x02\u0126)\x03\x02" +
		"\x02\x02\u0127\u0125\x03\x02\x02\x02\u0128\u012B\x05,\x17\x02\u0129\u012B" +
		"\x05D#\x02\u012A\u0128\x03\x02\x02\x02\u012A\u0129\x03\x02\x02\x02\u012B" +
		"+\x03\x02\x02\x02\u012C\u012F\x05\x1C\x0F\x02\u012D\u012F\x05\x1E\x10" +
		"\x02\u012E\u012C\x03\x02\x02\x02\u012E\u012D\x03\x02\x02\x02\u012F-\x03" +
		"\x02\x02\x02\u0130\u0133\x052\x1A\x02\u0131\u0132\x07,\x02\x02\u0132\u0134" +
		"\x050\x19\x02\u0133\u0131\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02" +
		"\u0134/\x03\x02\x02\x02\u0135\u0136\x07.\x02\x02\u0136\u0148\x07/\x02" +
		"\x02\u0137\u0148\x05*\x16\x02\u0138\u0144\x07.\x02\x02\u0139\u013E\x05" +
		"*\x16\x02\u013A\u013B\x075\x02\x02\u013B\u013D\x05*\x16\x02\u013C\u013A" +
		"\x03\x02\x02\x02\u013D\u0140\x03\x02\x02\x02\u013E\u013C\x03\x02\x02\x02" +
		"\u013E\u013F\x03\x02\x02\x02\u013F\u0142\x03\x02\x02\x02\u0140\u013E\x03" +
		"\x02\x02\x02\u0141\u0143\x075\x02\x02\u0142\u0141\x03\x02\x02\x02\u0142" +
		"\u0143\x03\x02\x02\x02\u0143\u0145\x03\x02\x02\x02\u0144\u0139\x03\x02" +
		"\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\u0146\x03\x02\x02\x02\u0146" +
		"\u0148\x07/\x02\x02\u0147\u0135\x03\x02\x02\x02\u0147\u0137\x03\x02\x02" +
		"\x02\u0147\u0138\x03\x02\x02\x02\u01481\x03\x02\x02\x02\u0149\u0155\x07" +
		".\x02\x02\u014A\u014F\x054\x1B\x02\u014B\u014C\x075\x02\x02\u014C\u014E" +
		"\x054\x1B\x02\u014D\u014B\x03\x02\x02\x02\u014E\u0151\x03\x02\x02\x02" +
		"\u014F\u014D\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150\u0153\x03" +
		"\x02\x02\x02\u0151\u014F\x03\x02\x02\x02\u0152\u0154\x075\x02\x02\u0153" +
		"\u0152\x03\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154\u0156\x03\x02" +
		"\x02\x02\u0155\u014A\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156" +
		"\u0157\x03\x02\x02\x02\u0157\u0158\x07/\x02\x02\u01583\x03\x02\x02\x02" +
		"\u0159\u015B\x05\f\x07\x02\u015A\u0159\x03\x02\x02\x02\u015A\u015B\x03" +
		"\x02\x02\x02\u015B\u015C\x03\x02\x02\x02\u015C\u015D\x05*\x16\x02\u015D" +
		"5\x03\x02\x02\x02\u015E\u0161\x058\x1D\x02\u015F\u0161\x05<\x1F\x02\u0160" +
		"\u015E\x03\x02\x02\x02\u0160\u015F\x03\x02\x02\x02\u01617\x03\x02\x02" +
		"\x02\u0162\u0163\t\b\x02\x02\u01639\x03\x02\x02\x02\u0164\u0166\x07\x1B" +
		"\x02\x02\u0165\u0164\x03\x02\x02\x02\u0165\u0166\x03\x02\x02\x02\u0166" +
		"\u0168\x03\x02\x02\x02\u0167\u0169\x07\x1D\x02\x02\u0168\u0167\x03\x02" +
		"\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A" +
		"\u016B\x05\f\x07\x02\u016B\u016C\x077\x02\x02\u016C\u016D\x05*\x16\x02" +
		"\u016D;\x03\x02\x02\x02\u016E\u016F\t\t\x02\x02\u016F=\x03\x02\x02\x02" +
		"\u0170\u0171\x072\x02\x02\u0171\u0172\x05\x16\f\x02\u0172\u0173\x073\x02" +
		"\x02\u0173?\x03\x02\x02\x02\u0174\u0179\x07.\x02\x02\u0175\u0177\x05\x18" +
		"\r\x02\u0176\u0178\x075\x02\x02\u0177\u0176\x03\x02\x02\x02\u0177\u0178" +
		"\x03\x02\x02\x02\u0178\u017A\x03\x02\x02\x02\u0179\u0175\x03\x02\x02\x02" +
		"\u0179\u017A\x03\x02\x02\x02\u017A\u017B\x03\x02\x02\x02\u017B\u017C\x07" +
		"/\x02\x02\u017CA\x03\x02\x02\x02\u017D\u017E\x05N(\x02\u017E\u017F\x07" +
		"d\x02\x02\u017F\u0181\x03\x02\x02\x02\u0180\u017D\x03\x02\x02\x02\u0180" +
		"\u0181\x03\x02\x02\x02\u0181\u0183\x03\x02\x02\x02\u0182\u0184\x07\x06" +
		"\x02\x02\u0183\u0182\x03\x02\x02\x02\u0183\u0184\x03\x02\x02\x02\u0184" +
		"\u0185\x03\x02\x02\x02\u0185\u0187\x07\x05\x02\x02\u0186\u0188\x07\x07" +
		"\x02\x02\u0187\u0186\x03\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188" +
		"\u0189\x03\x02\x02\x02\u0189\u018A\x07-\x02\x02\u018A\u018C\x05.\x18\x02" +
		"\u018B\u018D\x05V,\x02\u018C\u018B\x03\x02\x02\x02\u018C\u018D\x03\x02" +
		"\x02\x02\u018DC\x03\x02\x02\x02\u018E\u018F\x05H%\x02\u018F\u0190\x05" +
		"J&\x02\u0190E\x03\x02\x02\x02\u0191\u0192\t\n\x02\x02\u0192G\x03\x02\x02" +
		"\x02\u0193\u0194\x05F$\x02\u0194\u019F\x07-\x02\x02\u0195\u019B\x07I\x02" +
		"\x02\u0196\u0197\x05:\x1E\x02\u0197\u0198\x05n8\x02\u0198\u019A\x03\x02" +
		"\x02\x02\u0199\u0196\x03\x02\x02\x02\u019A\u019D\x03\x02\x02\x02\u019B" +
		"\u0199\x03\x02\x02\x02\u019B\u019C\x03\x02\x02\x02\u019C\u019E\x03\x02" +
		"\x02\x02\u019D\u019B\x03\x02\x02\x02\u019E\u01A0\x07K\x02\x02\u019F\u0195" +
		"\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0\u01AB\x03\x02\x02\x02" +
		"\u01A1\u01A7\x07.\x02\x02\u01A2\u01A3\x05:\x1E\x02\u01A3\u01A4\x05n8\x02" +
		"\u01A4\u01A6\x03\x02\x02\x02\u01A5\u01A2\x03\x02\x02\x02\u01A6\u01A9\x03" +
		"\x02\x02\x02\u01A7\u01A5\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8" +
		"\u01AA\x03\x02\x02\x02\u01A9\u01A7\x03\x02\x02\x02\u01AA\u01AC\x07/\x02" +
		"\x02\u01AB\u01A1\x03\x02\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC\u01BB" +
		"\x03\x02\x02\x02\u01AD\u01AE\t\v\x02\x02\u01AE\u01B9\x07-\x02\x02\u01AF" +
		"\u01B5\x07.\x02\x02\u01B0\u01B1\x05:\x1E\x02\u01B1\u01B2\x05n8\x02\u01B2" +
		"\u01B4\x03\x02\x02\x02\u01B3\u01B0\x03\x02\x02\x02\u01B4\u01B7\x03\x02" +
		"\x02\x02\u01B5\u01B3\x03\x02\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6" +
		"\u01B8\x03\x02\x02\x02\u01B7\u01B5\x03\x02\x02\x02\u01B8\u01BA\x07/\x02" +
		"\x02\u01B9\u01AF\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA\u01BC" +
		"\x03\x02\x02\x02\u01BB\u01AD\x03\x02\x02\x02\u01BB\u01BC\x03\x02\x02\x02" +
		"\u01BCI\x03\x02\x02\x02\u01BD\u01C7\x070\x02\x02\u01BE\u01C2\x05:\x1E" +
		"\x02\u01BF\u01C2\x05L\'\x02\u01C0\u01C2\x05B\"\x02\u01C1\u01BE\x03\x02" +
		"\x02\x02\u01C1\u01BF\x03\x02\x02\x02\u01C1\u01C0\x03\x02\x02\x02\u01C2" +
		"\u01C3\x03\x02\x02\x02\u01C3\u01C4\x05n8\x02\u01C4\u01C6\x03\x02\x02\x02" +
		"\u01C5\u01C1\x03\x02\x02\x02\u01C6\u01C9\x03\x02\x02\x02\u01C7\u01C5\x03" +
		"\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8\u01CA\x03\x02\x02\x02\u01C9" +
		"\u01C7\x03\x02\x02\x02\u01CA\u01CB\x071\x02\x02\u01CBK\x03\x02\x02\x02" +
		"\u01CC\u01CD\x07\"\x02\x02\u01CD\u01D8\x07-\x02\x02\u01CE\u01D4\x07.\x02" +
		"\x02\u01CF\u01D0\x05:\x1E\x02\u01D0\u01D1\x05n8\x02\u01D1\u01D3\x03\x02" +
		"\x02\x02\u01D2\u01CF\x03\x02\x02\x02\u01D3\u01D6\x03\x02\x02\x02\u01D4" +
		"\u01D2\x03\x02\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5\u01D7\x03\x02" +
		"\x02\x02\u01D6\u01D4\x03\x02\x02\x02\u01D7\u01D9\x07/\x02\x02\u01D8\u01CE" +
		"\x03\x02\x02\x02\u01D8\u01D9\x03\x02\x02\x02\u01D9\u01E3\x03\x02\x02\x02" +
		"\u01DA\u01DB\x07#\x02\x02\u01DB\u01E0\x07-\x02\x02\u01DC\u01DD\x07.\x02" +
		"\x02\u01DD\u01DE\x05\x18\r\x02\u01DE\u01DF\x07/\x02\x02\u01DF\u01E1\x03" +
		"\x02\x02\x02\u01E0\u01DC\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1" +
		"\u01E3\x03\x02\x02\x02\u01E2\u01CC\x03\x02\x02\x02\u01E2\u01DA\x03\x02" +
		"\x02\x02\u01E3M\x03\x02\x02\x02\u01E4\u01E5\x07%\x02\x02\u01E5\u01E6\x07" +
		"$\x02\x02\u01E6\u01E7\x07.\x02\x02\u01E7\u01E8\x05P)\x02\u01E8\u01E9\x07" +
		"/\x02\x02\u01E9\u01EB\x03\x02\x02\x02\u01EA\u01E4\x03\x02\x02\x02\u01EA" +
		"\u01EB\x03\x02\x02\x02\u01EBO\x03\x02\x02\x02\u01EC\u01F1\x05R*\x02\u01ED" +
		"\u01EE\x075\x02\x02\u01EE\u01F0\x05R*\x02\u01EF\u01ED\x03\x02\x02\x02" +
		"\u01F0\u01F3\x03\x02\x02\x02\u01F1\u01EF\x03\x02\x02\x02\u01F1\u01F2\x03" +
		"\x02\x02\x02\u01F2Q\x03\x02\x02\x02\u01F3\u01F1\x03\x02\x02\x02\u01F4" +
		"\u01F7\x07-\x02\x02\u01F5\u01F7\x05T+\x02\u01F6\u01F4\x03\x02\x02\x02" +
		"\u01F6\u01F5\x03\x02\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8\u01F9\x07" +
		"4\x02\x02\u01F9\u01FA\x05^0\x02\u01FAS\x03\x02\x02\x02\u01FB\u01FC\x07" +
		".\x02\x02\u01FC\u0201\x07-\x02\x02\u01FD\u01FE\x075\x02\x02\u01FE\u0200" +
		"\x07-\x02\x02\u01FF\u01FD\x03\x02\x02\x02\u0200\u0203\x03\x02\x02\x02" +
		"\u0201\u01FF\x03\x02\x02\x02\u0201\u0202\x03\x02\x02\x02\u0202\u0204\x03" +
		"\x02\x02\x02\u0203\u0201\x03\x02\x02\x02\u0204\u0205\x07/\x02\x02\u0205" +
		"U\x03\x02\x02\x02\u0206\u0208\x070\x02\x02\u0207\u0209\x05X-\x02\u0208" +
		"\u0207\x03\x02\x02\x02\u0208\u0209\x03\x02\x02\x02\u0209\u020A\x03\x02" +
		"\x02\x02\u020A\u020B\x071\x02\x02\u020BW\x03\x02\x02\x02\u020C\u020E\x07" +
		"6\x02\x02\u020D\u020C\x03\x02\x02\x02\u020D\u020E\x03\x02\x02\x02\u020E" +
		"\u0213\x03\x02\x02\x02\u020F\u0211\x07d\x02\x02\u0210\u020F\x03\x02\x02" +
		"\x02\u0210\u0211\x03\x02\x02\x02\u0211\u0213\x03\x02\x02\x02\u0212\u020D" +
		"\x03\x02\x02\x02\u0212\u0210\x03\x02\x02\x02\u0213\u0214\x03\x02\x02\x02" +
		"\u0214\u0215\x05Z.\x02\u0215\u0216\x05n8\x02\u0216\u0218\x03\x02\x02\x02" +
		"\u0217\u0212\x03\x02\x02\x02\u0218\u0219\x03\x02\x02\x02\u0219\u0217\x03" +
		"\x02\x02\x02\u0219\u021A\x03\x02\x02\x02\u021AY\x03\x02\x02\x02\u021B" +
		"\u0225\x05\n\x06\x02\u021C\u0225\x05\\/\x02\u021D\u0225\x05b2\x02\u021E" +
		"\u0225\x05d3\x02\u021F\u0225\x05f4\x02\u0220\u0225\x05V,\x02\u0221\u0225" +
		"\x05h5\x02\u0222\u0225\x05j6\x02\u0223\u0225\x05l7\x02\u0224\u021B\x03" +
		"\x02\x02\x02\u0224\u021C\x03\x02\x02\x02\u0224\u021D\x03\x02\x02\x02\u0224" +
		"\u021E\x03\x02\x02\x02\u0224\u021F\x03\x02\x02\x02\u0224\u0220\x03\x02" +
		"\x02\x02\u0224\u0221\x03\x02\x02\x02\u0224\u0222\x03\x02\x02\x02\u0224" +
		"\u0223\x03\x02\x02\x02\u0225[\x03\x02\x02\x02\u0226\u022A\x05`1\x02\u0227" +
		"\u022A\x05^0\x02\u0228\u022A\x05L\'\x02\u0229\u0226\x03\x02\x02\x02\u0229" +
		"\u0227\x03\x02\x02\x02\u0229\u0228\x03\x02\x02\x02\u022A]\x03\x02\x02" +
		"\x02\u022B\u022C\x05\x16\f\x02\u022C_\x03\x02\x02\x02\u022D\u022E\t\f" +
		"\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\u022Ea\x03\x02\x02\x02\u022F\u0231\x07\b\x02\x02\u0230\u0232\x05\x18" +
		"\r\x02\u0231\u0230\x03\x02\x02\x02\u0231\u0232\x03\x02\x02\x02\u0232c" +
		"\x03\x02\x02\x02\u0233\u0235\x07\x14\x02\x02\u0234\u0236\x07-\x02\x02" +
		"\u0235\u0234\x03\x02\x02\x02\u0235\u0236\x03\x02\x02\x02\u0236e\x03\x02" +
		"\x02\x02\u0237\u0239\x07\x15\x02\x02\u0238\u023A\x07-\x02\x02\u0239\u0238" +
		"\x03\x02\x02\x02\u0239\u023A\x03\x02\x02\x02\u023Ag\x03\x02\x02\x02\u023B" +
		"\u0244\x07\x10\x02\x02\u023C\u0245\x05\x16\f\x02\u023D\u023E\x05n8\x02" +
		"\u023E\u023F\x05\x16\f\x02\u023F\u0245\x03\x02\x02\x02\u0240\u0241\x05" +
		"\\/\x02\u0241\u0242\x05n8\x02\u0242\u0243\x05\x16\f\x02\u0243\u0245\x03" +
		"\x02\x02\x02\u0244\u023C\x03\x02\x02\x02\u0244\u023D\x03\x02\x02\x02\u0244" +
		"\u0240\x03\x02\x02\x02\u0245\u0246\x03\x02\x02\x02\u0246\u024C\x05V,\x02" +
		"\u0247\u024A\x07\x11\x02\x02\u0248\u024B\x05h5\x02\u0249\u024B\x05V,\x02" +
		"\u024A\u0248\x03\x02\x02\x02\u024A\u0249\x03\x02\x02\x02\u024B\u024D\x03" +
		"\x02\x02\x02\u024C\u0247\x03\x02\x02\x02\u024C\u024D\x03\x02\x02\x02\u024D" +
		"i\x03\x02\x02\x02\u024E\u0250\x07\x12\x02\x02\u024F\u0251\x05\x16\f\x02" +
		"\u0250\u024F\x03\x02\x02\x02\u0250\u0251\x03\x02\x02\x02\u0251\u0252\x03" +
		"\x02\x02\x02\u0252\u0253\x05V,\x02\u0253k\x03\x02\x02\x02\u0254\u0256" +
		"\x07\x13\x02\x02\u0255\u0257\x05\x16\f\x02\u0256\u0255\x03\x02\x02\x02" +
		"\u0256\u0257\x03\x02\x02\x02\u0257\u0258\x03\x02\x02\x02\u0258\u0259\x05" +
		"V,\x02\u0259m\x03\x02\x02\x02\u025A\u025B\t\r\x02\x02\u025Bo\x03\x02\x02" +
		"\x02Pu}\x8A\x8E\x91\x9A\xA1\xAC\xB0\xB4\xB8\xBC\xC5\xC9\xCF\xD3\xD9\xE4" +
		"\xE6\xEE\xF9\xFD\u0114\u0118\u011C\u0125\u012A\u012E\u0133\u013E\u0142" +
		"\u0144\u0147\u014F\u0153\u0155\u015A\u0160\u0165\u0168\u0177\u0179\u0180" +
		"\u0183\u0187\u018C\u019B\u019F\u01A7\u01AB\u01B5\u01B9\u01BB\u01C1\u01C7" +
		"\u01D4\u01D8\u01E0\u01E2\u01EA\u01F1\u01F6\u0201\u0208\u020D\u0210\u0212" +
		"\u0219\u0224\u0229\u0231\u0235\u0239\u0244\u024A\u024C\u0250\u0256";
	public static readonly _serializedATN: string = Utils.join(
		[
			RalphParser._serializedATNSegment0,
			RalphParser._serializedATNSegment1,
		],
		"",
	);
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
	public importSpec(): ImportSpecContext[];
	public importSpec(i: number): ImportSpecContext;
	public importSpec(i?: number): ImportSpecContext | ImportSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportSpecContext);
		} else {
			return this.getRuleContext(i, ImportSpecContext);
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


export class ImportSpecContext extends ParserRuleContext {
	public _alias!: Token;
	public importPath(): ImportPathContext {
		return this.getRuleContext(0, ImportPathContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.DOT, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(RalphParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_importSpec; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterImportSpec) {
			listener.enterImportSpec(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitImportSpec) {
			listener.exitImportSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitImportSpec) {
			return visitor.visitImportSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportPathContext extends ParserRuleContext {
	public string_(): String_Context {
		return this.getRuleContext(0, String_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_importPath; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterImportPath) {
			listener.enterImportPath(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitImportPath) {
			listener.exitImportPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitImportPath) {
			return visitor.visitImportPath(this);
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
	public constSpec(): ConstSpecContext[];
	public constSpec(i: number): ConstSpecContext;
	public constSpec(i?: number): ConstSpecContext | ConstSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstSpecContext);
		} else {
			return this.getRuleContext(i, ConstSpecContext);
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


export class ConstSpecContext extends ParserRuleContext {
	public identifierList(): IdentifierListContext {
		return this.getRuleContext(0, IdentifierListContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.ASSIGN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_constSpec; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterConstSpec) {
			listener.enterConstSpec(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitConstSpec) {
			listener.exitConstSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitConstSpec) {
			return visitor.visitConstSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LetDeclContext extends ParserRuleContext {
	public LET(): TerminalNode { return this.getToken(RalphParser.LET, 0); }
	public letSpec(): LetSpecContext[];
	public letSpec(i: number): LetSpecContext;
	public letSpec(i?: number): LetSpecContext | LetSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LetSpecContext);
		} else {
			return this.getRuleContext(i, LetSpecContext);
		}
	}
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_PAREN, 0); }
	public MUT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.MUT, 0); }
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


export class LetSpecContext extends ParserRuleContext {
	public identifierList(): IdentifierListContext {
		return this.getRuleContext(0, IdentifierListContext);
	}
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.ASSIGN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_letSpec; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterLetSpec) {
			listener.enterLetSpec(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitLetSpec) {
			listener.exitLetSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitLetSpec) {
			return visitor.visitLetSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public _unary_op!: Token;
	public _rel_op!: Token;
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


export class PrimaryExprContext extends ParserRuleContext {
	public basicLit(): BasicLitContext | undefined {
		return this.tryGetRuleContext(0, BasicLitContext);
	}
	public primaryExpr(): PrimaryExprContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExprContext);
	}
	public index(): IndexContext | undefined {
		return this.tryGetRuleContext(0, IndexContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(RalphParser.DOT, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(RalphParser.IDENTIFIER, 0); }
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
	public elementType(): ElementTypeContext {
		return this.getRuleContext(0, ElementTypeContext);
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


export class ElementTypeContext extends ParserRuleContext {
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_elementType; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterElementType) {
			listener.enterElementType(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitElementType) {
			listener.exitElementType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitElementType) {
			return visitor.visitElementType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDeclContext extends ParserRuleContext {
	public TYPE(): TerminalNode { return this.getToken(RalphParser.TYPE, 0); }
	public typeSpec(): TypeSpecContext[];
	public typeSpec(i: number): TypeSpecContext;
	public typeSpec(i?: number): TypeSpecContext | TypeSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeSpecContext);
		} else {
			return this.getRuleContext(i, TypeSpecContext);
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


export class TypeSpecContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(RalphParser.IDENTIFIER, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_typeSpec; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterTypeSpec) {
			listener.enterTypeSpec(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitTypeSpec) {
			listener.exitTypeSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitTypeSpec) {
			return visitor.visitTypeSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeListContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return RalphParser.RULE_typeList; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterTypeList) {
			listener.enterTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitTypeList) {
			listener.exitTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitTypeList) {
			return visitor.visitTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_Context extends ParserRuleContext {
	public typeBasic(): TypeBasicContext | undefined {
		return this.tryGetRuleContext(0, TypeBasicContext);
	}
	public typeStruct(): TypeStructContext | undefined {
		return this.tryGetRuleContext(0, TypeStructContext);
	}
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


export class TypeBasicContext extends ParserRuleContext {
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_typeBasic; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterTypeBasic) {
			listener.enterTypeBasic(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitTypeBasic) {
			listener.exitTypeBasic(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitTypeBasic) {
			return visitor.visitTypeBasic(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SignatureContext extends ParserRuleContext {
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public R_ARROW(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_ARROW, 0); }
	public result(): ResultContext | undefined {
		return this.tryGetRuleContext(0, ResultContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_signature; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterSignature) {
			listener.enterSignature(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitSignature) {
			listener.exitSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitSignature) {
			return visitor.visitSignature(this);
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


export class ParametersContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(RalphParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(RalphParser.R_PAREN, 0); }
	public parameterDecl(): ParameterDeclContext[];
	public parameterDecl(i: number): ParameterDeclContext;
	public parameterDecl(i?: number): ParameterDeclContext | ParameterDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterDeclContext);
		} else {
			return this.getRuleContext(i, ParameterDeclContext);
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
	public get ruleIndex(): number { return RalphParser.RULE_parameters; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterParameters) {
			listener.enterParameters(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitParameters) {
			listener.exitParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitParameters) {
			return visitor.visitParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterDeclContext extends ParserRuleContext {
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
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
	public identifierList(): IdentifierListContext {
		return this.getRuleContext(0, IdentifierListContext);
	}
	public COLON(): TerminalNode { return this.getToken(RalphParser.COLON, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
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


export class IndexContext extends ParserRuleContext {
	public L_BRACKET(): TerminalNode { return this.getToken(RalphParser.L_BRACKET, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public R_BRACKET(): TerminalNode { return this.getToken(RalphParser.R_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_index; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterIndex) {
			listener.enterIndex(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitIndex) {
			listener.exitIndex(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitIndex) {
			return visitor.visitIndex(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(RalphParser.L_PAREN, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(RalphParser.R_PAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(RalphParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_arguments; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDeclContext extends ParserRuleContext {
	public FN(): TerminalNode { return this.getToken(RalphParser.FN, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(RalphParser.IDENTIFIER, 0); }
	public signature(): SignatureContext {
		return this.getRuleContext(0, SignatureContext);
	}
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public EOS(): TerminalNode | undefined { return this.tryGetToken(RalphParser.EOS, 0); }
	public PUB(): TerminalNode | undefined { return this.tryGetToken(RalphParser.PUB, 0); }
	public PAYABLE(): TerminalNode | undefined { return this.tryGetToken(RalphParser.PAYABLE, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
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
	public varAssignParamList(): VarAssignParamListContext | undefined {
		return this.tryGetRuleContext(0, VarAssignParamListContext);
	}
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(RalphParser.R_PAREN, 0); }
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


export class VarAssignParamListContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return RalphParser.RULE_varAssignParamList; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterVarAssignParamList) {
			listener.enterVarAssignParamList(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitVarAssignParamList) {
			listener.exitVarAssignParamList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitVarAssignParamList) {
			return visitor.visitVarAssignParamList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignContext extends ParserRuleContext {
	public ASSIGN(): TerminalNode { return this.getToken(RalphParser.ASSIGN, 0); }
	public expressionStmt(): ExpressionStmtContext {
		return this.getRuleContext(0, ExpressionStmtContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(RalphParser.IDENTIFIER, 0); }
	public varParamList(): VarParamListContext | undefined {
		return this.tryGetRuleContext(0, VarParamListContext);
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


export class VarParamListContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(RalphParser.L_PAREN, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RalphParser.IDENTIFIER);
		} else {
			return this.getToken(RalphParser.IDENTIFIER, i);
		}
	}
	public R_PAREN(): TerminalNode { return this.getToken(RalphParser.R_PAREN, 0); }
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
	public get ruleIndex(): number { return RalphParser.RULE_varParamList; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterVarParamList) {
			listener.enterVarParamList(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitVarParamList) {
			listener.exitVarParamList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitVarParamList) {
			return visitor.visitVarParamList(this);
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
	public breakStmt(): BreakStmtContext | undefined {
		return this.tryGetRuleContext(0, BreakStmtContext);
	}
	public continueStmt(): ContinueStmtContext | undefined {
		return this.tryGetRuleContext(0, ContinueStmtContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public ifStmt(): IfStmtContext | undefined {
		return this.tryGetRuleContext(0, IfStmtContext);
	}
	public forStmt(): ForStmtContext | undefined {
		return this.tryGetRuleContext(0, ForStmtContext);
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


export class BreakStmtContext extends ParserRuleContext {
	public BREAK(): TerminalNode { return this.getToken(RalphParser.BREAK, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(RalphParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_breakStmt; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterBreakStmt) {
			listener.enterBreakStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitBreakStmt) {
			listener.exitBreakStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitBreakStmt) {
			return visitor.visitBreakStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStmtContext extends ParserRuleContext {
	public CONTINUE(): TerminalNode { return this.getToken(RalphParser.CONTINUE, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(RalphParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RalphParser.RULE_continueStmt; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterContinueStmt) {
			listener.enterContinueStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitContinueStmt) {
			listener.exitContinueStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitContinueStmt) {
			return visitor.visitContinueStmt(this);
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
	public eos(): EosContext | undefined {
		return this.tryGetRuleContext(0, EosContext);
	}
	public simpleStmt(): SimpleStmtContext | undefined {
		return this.tryGetRuleContext(0, SimpleStmtContext);
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


export class ForStmtContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(RalphParser.FOR, 0); }
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
	public get ruleIndex(): number { return RalphParser.RULE_forStmt; }
	// @Override
	public enterRule(listener: RalphParserListener): void {
		if (listener.enterForStmt) {
			listener.enterForStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RalphParserListener): void {
		if (listener.exitForStmt) {
			listener.exitForStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RalphParserVisitor<Result>): Result {
		if (visitor.visitForStmt) {
			return visitor.visitForStmt(this);
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



// Generated from RalphParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { SourceFileContext } from "./RalphParser";
import { ImportDeclContext } from "./RalphParser";
import { ImportSpecContext } from "./RalphParser";
import { ImportPathContext } from "./RalphParser";
import { DeclarationContext } from "./RalphParser";
import { IdentifierListContext } from "./RalphParser";
import { ConstDeclContext } from "./RalphParser";
import { ConstSpecContext } from "./RalphParser";
import { VarDeclContext } from "./RalphParser";
import { VarSpecContext } from "./RalphParser";
import { ExpressionContext } from "./RalphParser";
import { ExpressionListContext } from "./RalphParser";
import { PrimaryExprContext } from "./RalphParser";
import { ConversionContext } from "./RalphParser";
import { MethodExprContext } from "./RalphParser";
import { PrimitiveTypeContext } from "./RalphParser";
import { TypeDeclContext } from "./RalphParser";
import { TypeSpecContext } from "./RalphParser";
import { TypeListContext } from "./RalphParser";
import { Type_Context } from "./RalphParser";
import { TypeNameContext } from "./RalphParser";
import { TypeLitContext } from "./RalphParser";
import { ArrayTypeContext } from "./RalphParser";
import { ArrayLengthContext } from "./RalphParser";
import { ElementTypeContext } from "./RalphParser";
import { FunctionTypeContext } from "./RalphParser";
import { SignatureContext } from "./RalphParser";
import { ResultContext } from "./RalphParser";
import { ParametersContext } from "./RalphParser";
import { ParameterDeclContext } from "./RalphParser";
import { NonNamedTypeContext } from "./RalphParser";
import { OperandContext } from "./RalphParser";
import { LiteralContext } from "./RalphParser";
import { BasicLitContext } from "./RalphParser";
import { IntegerContext } from "./RalphParser";
import { QualifiedIdentContext } from "./RalphParser";
import { FieldDeclContext } from "./RalphParser";
import { String_Context } from "./RalphParser";
import { IndexContext } from "./RalphParser";
import { Slice_Context } from "./RalphParser";
import { ArgumentsContext } from "./RalphParser";
import { MethodDeclContext } from "./RalphParser";
import { SliceTypeContext } from "./RalphParser";
import { TypeStructContext } from "./RalphParser";
import { TypeParamContext } from "./RalphParser";
import { TypeStructHeaderContext } from "./RalphParser";
import { TypeStructBodyContext } from "./RalphParser";
import { EventEmitContext } from "./RalphParser";
import { AnnotationContext } from "./RalphParser";
import { VarAssignParamListContext } from "./RalphParser";
import { AssignContext } from "./RalphParser";
import { VarParamListContext } from "./RalphParser";
import { BlockContext } from "./RalphParser";
import { StatementListContext } from "./RalphParser";
import { StatementContext } from "./RalphParser";
import { SimpleStmtContext } from "./RalphParser";
import { ExpressionStmtContext } from "./RalphParser";
import { IncDecStmtContext } from "./RalphParser";
import { AssignmentContext } from "./RalphParser";
import { Assign_opContext } from "./RalphParser";
import { ShortVarDeclContext } from "./RalphParser";
import { EmptyStmtContext } from "./RalphParser";
import { ReturnStmtContext } from "./RalphParser";
import { BreakStmtContext } from "./RalphParser";
import { ContinueStmtContext } from "./RalphParser";
import { IfStmtContext } from "./RalphParser";
import { ForStmtContext } from "./RalphParser";
import { WhileStmtContext } from "./RalphParser";
import { EosContext } from "./RalphParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `RalphParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface RalphParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `RalphParser.sourceFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSourceFile?: (ctx: SourceFileContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.importDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportDecl?: (ctx: ImportDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.importSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportSpec?: (ctx: ImportSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.importPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportPath?: (ctx: ImportPathContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.identifierList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierList?: (ctx: IdentifierListContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.constDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstDecl?: (ctx: ConstDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.constSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstSpec?: (ctx: ConstSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.varDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarDecl?: (ctx: VarDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.varSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarSpec?: (ctx: VarSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.primaryExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpr?: (ctx: PrimaryExprContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.conversion`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConversion?: (ctx: ConversionContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.methodExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodExpr?: (ctx: MethodExprContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.primitiveType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveType?: (ctx: PrimitiveTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.typeDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDecl?: (ctx: TypeDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.typeSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeSpec?: (ctx: TypeSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.typeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeList?: (ctx: TypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.type_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_?: (ctx: Type_Context) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.typeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeName?: (ctx: TypeNameContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.typeLit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeLit?: (ctx: TypeLitContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.arrayType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayType?: (ctx: ArrayTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.arrayLength`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayLength?: (ctx: ArrayLengthContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.elementType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementType?: (ctx: ElementTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.functionType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionType?: (ctx: FunctionTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.signature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignature?: (ctx: SignatureContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.result`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResult?: (ctx: ResultContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.parameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameters?: (ctx: ParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.parameterDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterDecl?: (ctx: ParameterDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.nonNamedType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonNamedType?: (ctx: NonNamedTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.operand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperand?: (ctx: OperandContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.basicLit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasicLit?: (ctx: BasicLitContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.integer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger?: (ctx: IntegerContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.qualifiedIdent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedIdent?: (ctx: QualifiedIdentContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.fieldDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldDecl?: (ctx: FieldDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.string_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString_?: (ctx: String_Context) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.index`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndex?: (ctx: IndexContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.slice_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSlice_?: (ctx: Slice_Context) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.methodDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodDecl?: (ctx: MethodDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.sliceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSliceType?: (ctx: SliceTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.typeStruct`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeStruct?: (ctx: TypeStructContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.typeParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParam?: (ctx: TypeParamContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.typeStructHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeStructHeader?: (ctx: TypeStructHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.typeStructBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeStructBody?: (ctx: TypeStructBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.eventEmit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEventEmit?: (ctx: EventEmitContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation?: (ctx: AnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.varAssignParamList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarAssignParamList?: (ctx: VarAssignParamListContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.assign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssign?: (ctx: AssignContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.varParamList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarParamList?: (ctx: VarParamListContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.statementList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementList?: (ctx: StatementListContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.simpleStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleStmt?: (ctx: SimpleStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.expressionStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStmt?: (ctx: ExpressionStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.incDecStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncDecStmt?: (ctx: IncDecStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.assign_op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssign_op?: (ctx: Assign_opContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.shortVarDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShortVarDecl?: (ctx: ShortVarDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.emptyStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyStmt?: (ctx: EmptyStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.returnStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStmt?: (ctx: ReturnStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.breakStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStmt?: (ctx: BreakStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.continueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStmt?: (ctx: ContinueStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.ifStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStmt?: (ctx: IfStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.forStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStmt?: (ctx: ForStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.whileStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStmt?: (ctx: WhileStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `RalphParser.eos`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEos?: (ctx: EosContext) => Result;
}


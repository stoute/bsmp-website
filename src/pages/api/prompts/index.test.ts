import { get, post } from "./index.json";
import { db, PromptTemplateTable } from "../../../db/config";
import { v4 as uuid } from "uuid";

jest.mock("../../../db/config");
jest.mock("uuid", () => ({
  v4: jest.fn(),
}));

describe("/api/prompts", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("GET", () => {
    it("should return all prompt templates", async () => {
      const mockPrompts = [
        {
          id: "1",
          name: "Test Prompt",
          description: "Description",
          systemPrompt: "System Prompt",
          template: "Template",
          variables: [],
          created_at: "2024-01-27T10:00:00Z",
          updated_at: "2024-01-27T10:00:00Z",
        },
      ];
      (
        db.select().from(PromptTemplateTable).all as jest.Mock
      ).mockResolvedValue(mockPrompts);

      const response = await get();
      const responseBody = await response.json();

      expect(response.status).toBe(200);
      expect(responseBody).toEqual(mockPrompts);
    });

    it("should return an empty array if no prompt templates exist", async () => {
      (
        db.select().from(PromptTemplateTable).all as jest.Mock
      ).mockResolvedValue([]);

      const response = await get();
      const responseBody = await response.json();

      expect(response.status).toBe(200);
      expect(responseBody).toEqual([]);
    });

    it("should return a 500 status code if there is a database error", async () => {
      (
        db.select().from(PromptTemplateTable).all as jest.Mock
      ).mockRejectedValue(new Error("Database error"));

      const response = await get();
      const responseBody = await response.json();

      expect(response.status).toBe(500);
      expect(responseBody).toEqual({
        message: "Failed to retrieve prompt templates",
      });
    });
  });

  describe("POST", () => {
    it("should create a new prompt template", async () => {
      const mockRequest = {
        json: jest.fn().mockResolvedValue({
          name: "New Prompt",
          description: "Description",
          systemPrompt: "System Prompt",
          template: "Template",
          variables: [],
        }),
      } as unknown as Request;

      (uuid as jest.Mock).mockReturnValue("new-uuid");
      const now = new Date().toISOString();
      const mockNewPrompt = {
        id: "new-uuid",
        name: "New Prompt",
        description: "Description",
        systemPrompt: "System Prompt",
        template: "Template",
        variables: [],
        created_at: now,
        updated_at: now,
      };

      const response = await post({ request: mockRequest });
      const responseBody = await response.json();

      expect(response.status).toBe(201);
      expect(responseBody).toEqual(mockNewPrompt);
      expect(db.insert(PromptTemplateTable).values).toHaveBeenCalledWith(
        mockNewPrompt,
      );
    });

    it("should return a 400 status code if required fields are missing", async () => {
      const mockRequest = {
        json: jest.fn().mockResolvedValue({
          name: "New Prompt",
          description: "Description",
        }),
      } as unknown as Request;

      const response = await post({ request: mockRequest });
      const responseBody = await response.json();

      expect(response.status).toBe(400);
      expect(responseBody).toEqual({ message: "Missing required fields" });
    });

    it("should return a 500 status code if there is a database error", async () => {
      const mockRequest = {
        json: jest.fn().mockResolvedValue({
          name: "New Prompt",
          description: "Description",
          systemPrompt: "System Prompt",
          template: "Template",
          variables: [],
        }),
      } as unknown as Request;

      (db.insert(PromptTemplateTable).values as jest.Mock).mockRejectedValue(
        new Error("Database error"),
      );

      const response = await post({ request: mockRequest });
      const responseBody = await response.json();

      expect(response.status).toBe(500);
      expect(responseBody).toEqual({
        message: "Failed to create prompt template",
      });
    });
  });
});

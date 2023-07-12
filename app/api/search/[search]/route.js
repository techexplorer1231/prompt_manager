import Prompt from "@models/prompt";

export const GET = async (req, { params }) => {
  try {
    const searchTerm = params.search;
    const filteredPosts = await Prompt.find({
      $or: [
        { prompt: { $regex: new RegExp(searchTerm, "i") } },
        { tag: { $regex: new RegExp(searchTerm, "i") } },
      ],
    }).populate("creator");

    return new Response(JSON.stringify(filteredPosts), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to fetch prompts", { status: 500 });
  }
};

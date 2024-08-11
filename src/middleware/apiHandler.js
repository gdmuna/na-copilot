export const apiHandler = (callback) => {
    return async (req) => {
      try {
        const response = await callback(req);
        return new Response(JSON.stringify(response), { status: 200 });
      } catch (error) {
        console.error('Error in API handler:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error', details: error.message }), { status: 500 });
      }
    };
  };
  
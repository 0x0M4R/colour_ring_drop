// admin/orderResource.js

import { Order } from '../models/order.model.js'; // Adjust the path according to your project structure

const orderResourceOptions = {
  resource: Order,
  options: {
    actions: {
      edit: {
        // Allow editing but limit it to the status field only
        isAccessible: true, // Allow access to the edit action
        handler: async (request, response, context) => {
          const { record, currentAdmin } = context;
          const { status } = request.payload;

          // Only allow updating the status field
          if (record && status) {
            // Making a PATCH request to the backend to update status
            const result = await fetch(`http://localhost:4000/api/orders/${record.id}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ status }),
            });

            if (!result.ok) {
              throw new Error('Failed to update order status');
            }

            // Return updated record
            record.update({ status });
          }

          return {
            record: record.toJSON(),
          };
        },
      },
      new: { isAccessible: false }, // Disable creating new orders from AdminJS
      delete: { isAccessible: false }, // Disable deleting orders from AdminJS
    },
    properties: {
      id: { isVisible: { edit: false, show: true, list: true, filter: true } },
      user: { isVisible: { edit: false, show: true, list: true, filter: true } },
      product: { isVisible: { edit: false, show: true, list: true, filter: true } },
      quantity: { isVisible: { edit: false, show: true, list: true, filter: true } },
      payment_id: { isVisible: { edit: false, show: true, list: true, filter: true } },
      status: { isVisible: { edit: true, show: true, list: true, filter: true } },
      created_at: { isVisible: { edit: false, show: true, list: true, filter: true } },
      updated_at: { isVisible: { edit: false, show: true, list: true, filter: true } },
    },
  },
};

export default orderResourceOptions;

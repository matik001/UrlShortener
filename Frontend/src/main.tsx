import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ErrorBoundary from 'components/Error/ErrorBoundary';
import 'devextreme/dist/css/dx.light.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from './setup/router/router';

const init = async () => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnReconnect: false,

				refetchOnWindowFocus: false,

				refetchInterval: false,

				refetchOnMount: false,

				retry: 3
			}
		}
	});

	ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
		<React.StrictMode>
			<QueryClientProvider client={queryClient}>
				<ErrorBoundary>
					<Router />
				</ErrorBoundary>

				<ReactQueryDevtools initialIsOpen={false} />

				<ToastContainer position="bottom-right" />
			</QueryClientProvider>
		</React.StrictMode>
	);
};

init();

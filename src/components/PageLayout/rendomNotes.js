<Routes>
	<Route path='/'>
		<Route index element={<LandingPage />} />
		<Route path='login' element={<LoginPage />} />
		<Route path='*' element={<PageNotFound />} />
	</Route>
</Routes>;

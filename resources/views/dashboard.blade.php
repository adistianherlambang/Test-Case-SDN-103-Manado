<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-2xl text-gray-800 leading-tight">
            {{ __('Admin Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12 bg-gray-50 min-h-screen">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-2xl border border-gray-100">
                <div class="p-8 text-gray-900">
                    <div class="flex items-center space-x-4 mb-6">
                        <div class="p-3 bg-blue-100 text-blue-600 rounded-full">
                            <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">Welcome back, {{ Auth::user()->name }}!</h3>
                            <p className="text-gray-500 text-sm">You are successfully authenticated and have access to the dashboard.</p>
                        </div>
                    </div>
                    <hr class="border-gray-100 mb-6"/>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <a href="{{ route('admin.users.index') }}" class="block p-6 bg-gradient-to-br from-indigo-50 to-white hover:shadow-md border border-indigo-100 rounded-xl transition duration-200 group">
                            <h4 class="text-lg font-bold text-indigo-700 group-hover:text-indigo-800 flex items-center">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                                Manage Users
                            </h4>
                            <p class="text-sm text-gray-600 mt-2 hover:text-gray-800">Add, view, and organize administrative and registered users.</p>
                        </a>
                        <a href="{{ route('admin.pages.index') }}" class="block p-6 bg-gradient-to-br from-emerald-50 to-white hover:shadow-md border border-emerald-100 rounded-xl transition duration-200 group">
                            <h4 class="text-lg font-bold text-emerald-700 group-hover:text-emerald-800 flex items-center">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14"></path></svg>
                                Manage Pages
                            </h4>
                            <p class="text-sm text-gray-600 mt-2 hover:text-gray-800">Create, edit, and publish dynamic pages for the school website.</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>

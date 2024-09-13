<?php

namespace App\Http\Controllers\Api;

use App\Models\Organisation;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class OrganisationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $organisations = Organisation::all();
        return response()->json($organisations);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $photoPath = null;
        if ($request->hasFile('photo')) {
            $photoPath = $request->file('photo')->store('organisation_images', 'public');
        }

        $organisation = Organisation::create([
            'user_id' => auth()->id(),
            'name' => $request->name,
            'description' => $request->description,
            'photo' => $photoPath,
        ]);

        return response()->json([
            'message' => 'Organisation created successfully'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
         $organisation = Organisation::find($id);

        if (!$organisation) {
            return response()->json([
                'status' => false,
                'message' => 'Organisation not found',
            ], 404);
        }

        return response()->json([
            'status' => true,
            'organisation' => $organisation,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // Hanapin ang organization gamit ang ID
        $organisation = Organisation::findOrFail($id);

        // I-update ang name at description
        $organisation->name = $request->input('name');
        $organisation->description = $request->input('description');

        // I-save ang mga pagbabago
        $organisation->save();

        // Ibalik ang updated na organization bilang response
        return response()->json([
            'status' => 'success',
            'organisation' => $organisation
        ]);
    }

    public function updateImage(Request $request, $id)
    {
        // \Log::info('Uploaded file:', [$request->file('photo')]);
        $organisation = Organisation::findOrFail($id);

        // Validate the photo
        $data = $request->validate([
            'photo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($request->hasFile('photo')) {
            // Delete the existing photo if it exists
            if ($organisation->photo) {
                $previousPhotoPath = 'public/' . $organisation->photo;
                if (Storage::exists($previousPhotoPath)) {
                    Storage::delete($previousPhotoPath);
                } else {
                    // \Log::warning('Previous photo not found: ' . $previousPhotoPath);
                }
            }

            // Store the new photo
            $path = $request->file('photo')->store('public/organisation_images');

            // Update the organisation's photo path, removing 'public/' prefix
            $organisation->photo = str_replace('public/', '', $path);

            // \Log::info('New photo path: ' . $organisation->photo);
        } else {
            // \Log::info('No new photo uploaded');
        }

        // Save the updated organisation record
        $organisation->save();

        // \Log::info('Updated organisation: ', $organisation->toArray());

        return response()->json([
            'status' => 'success',
            'organisation' => $organisation
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // Find the organisation by ID
        $organisation = Organisation::findOrFail($id);

        // Delete the photo if it exists
        if ($organisation->photo) {
            // Delete the existing photo from storage
            Storage::delete('public/' . $organisation->photo);
        }

        // Delete the organisation record from the database
        $organisation->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Organisation deleted successfully',
        ]);
    }

    public function userOrganisations()
    {
        $userId = auth()->id();
        $organisations = Organisation::where('user_id', $userId)->get();
        
        return response()->json([
            'status' => true,
            'organisations' => $organisations,
        ]);
    }

    public function publicOrganisations()
    {
        $organisations = Organisation::all();
        return response()->json($organisations);

    }
}

-- Fix 1: Restrict uploaded_files table access to authenticated users only
DROP POLICY IF EXISTS "Anyone can view uploaded files" ON public.uploaded_files;

CREATE POLICY "Authenticated users can view files" 
ON public.uploaded_files
FOR SELECT 
TO authenticated
USING (true);

-- Fix 2: Make study-materials bucket private
UPDATE storage.buckets 
SET public = false 
WHERE id = 'study-materials';

-- Fix 3: Add RLS policies to storage.objects for authenticated access
CREATE POLICY "Authenticated users can view study materials" 
ON storage.objects
FOR SELECT 
TO authenticated
USING (bucket_id = 'study-materials');

CREATE POLICY "Admins can upload study materials" 
ON storage.objects
FOR INSERT 
TO authenticated
WITH CHECK (
  bucket_id = 'study-materials' 
  AND public.has_role(auth.uid(), 'admin'::app_role)
);

CREATE POLICY "Admins can delete study materials" 
ON storage.objects
FOR DELETE 
TO authenticated
USING (
  bucket_id = 'study-materials' 
  AND public.has_role(auth.uid(), 'admin'::app_role)
);
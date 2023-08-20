Kesimpulan dari pembelajaran materi Version Control System:
1. Versioning digunakan mengatur versi dari source code program
2. Ada 3 macam Version Control System yaitu Single User, Centralized, dan Distributed
3. Untuk mengupload repositori lokal ke Github kita harus menginstal Git lalu melakukan configurasi dengan terminal sebagai berikut :
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin "link repo github" , misalkan "https://github.com/Mojsovski/react_amratta-tegar-l.git"
git push -u origin main
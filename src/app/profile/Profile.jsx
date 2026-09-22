'use client'
import React, { useState } from 'react'
import {
  Container,
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
  Button,
  IconButton,
  Stack,
  Grid,
  Chip,
  Divider,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

  //  CARA PAKAI FILE INI
  //  ============================================================
  //  Semua import dan state sudah aktif dari awal, jadi peserta
  //  TIDAK perlu naik-turun file untuk uncomment import.

  //  Setiap STEP punya `return (...)` sendiri yang LENGKAP
  //  (sudah mencakup hasil step sebelumnya). Untuk pindah step:

  //  1. Hapus `return` step sebelumnya (yang sedang aktif).
  //  2. Di step berikutnya, hapus tanda "/* di awal dan */ di akhir
  //     blok return -nya.

  //  Urutan step:
  //  STEP 0 - halaman kosong(aktif dari awal)
  //  STEP A - Container, Box, Typography
  //  STEP B - Card + Avatar
  //  STEP C - Stack tombol(Button, IconButton)
  //  STEP D - Divider, Grid statistik, Chip
  //  STEP E - state & aksi pseudo(Follow, Edit)
  //  STEP F - responsive(nilai statis jadi breakpoint)

const Profile = () => {
    // State & fungsi ini sudah disiapkan, baru DIPAKAI mulai STEP E
    const [isFollowing, setIsFollowing] = useState(false)
    const [isEditing, setIsEditing] = useState(false)

    const handleFollow = () => setIsFollowing((prev) => !prev)
    const handleEdit = () => setIsEditing(true)

    // ===================== STEP 0 (aktif) =====================
    // return (
    //     <div>Profile</div>
    // )

    // ===================== STEP A =====================
    // Container, Box, Typography
    
    // return (
    //     <Container maxWidth="sm">
    //         <Box sx={{ py: 4 }}>
    //             <Typography variant="h4" fontWeight={700}>
    //                 Halaman Profile
    //             </Typography>
    //             <Typography variant="body2" color="text.secondary">
    //                 Belajar Material UI step by step
    //             </Typography>
    //         </Box>
    //     </Container>
    // )
    

    // ===================== STEP B =====================
    // Ditambah: Card + Avatar
    
    // return (
    //     <Container maxWidth="sm">
    //         <Box sx={{ py: 4 }}>
    //             <Typography variant="h4" fontWeight={700}>
    //                 Halaman Profile
    //             </Typography>
    //             <Typography variant="body2" color="text.secondary">
    //                 Belajar Material UI step by step
    //             </Typography>

    //             <Card sx={{ borderRadius: 3, boxShadow: 3, mt: 2 }}>
    //                 <CardContent
    //                     sx={{
    //                         display: 'flex',
    //                         flexDirection: 'row',
    //                         alignItems: 'center',
    //                         gap: 2,
    //                     }}
    //                 >
    //                     <Avatar
    //                         alt="User"
    //                         src="/avatar.jpg"
    //                         sx={{ width: 80, height: 80 }}
    //                     />
    //                     <Box>
    //                         <Typography variant="h6">Budi Santoso</Typography>
    //                         <Typography variant="body2" color="text.secondary">
    //                             Frontend Developer
    //                         </Typography>
    //                     </Box>
    //                 </CardContent>
    //             </Card>
    //         </Box>
    //     </Container>
    // )
    

    // ===================== STEP C =====================
    // Ditambah: Stack berisi Button dan IconButton (belum ada aksi)
    
    // return (
    //     <Container maxWidth="sm">
    //         <Box sx={{ py: 4 }}>
    //             <Typography variant="h4" fontWeight={700}>
    //                 Halaman Profile
    //             </Typography>
    //             <Typography variant="body2" color="text.secondary">
    //                 Belajar Material UI step by step
    //             </Typography>

    //             <Card sx={{ borderRadius: 3, boxShadow: 3, mt: 2 }}>
    //                 <CardContent
    //                     sx={{
    //                         display: 'flex',
    //                         flexDirection: 'row',
    //                         alignItems: 'center',
    //                         gap: 2,
    //                     }}
    //                 >
    //                     <Avatar
    //                         alt="User"
    //                         src="/avatar.jpg"
    //                         sx={{ width: 80, height: 80 }}
    //                     />
    //                     <Box>
    //                         <Typography variant="h6">Budi Santoso</Typography>
    //                         <Typography variant="body2" color="text.secondary">
    //                             Frontend Developer
    //                         </Typography>
    //                     </Box>
    //                 </CardContent>

    //                 <CardContent>
    //                     <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
    //                         <Button variant="contained" fullWidth>
    //                             Follow
    //                         </Button>
    //                         <Button variant="outlined" fullWidth>
    //                             Message
    //                         </Button>
    //                         <IconButton color="primary" aria-label="edit profile">
    //                             <EditIcon />
    //                         </IconButton>
    //                     </Stack>
    //                 </CardContent>
    //             </Card>
    //         </Box>
    //     </Container>
    // )
    

    // ===================== STEP D =====================
    // Ditambah: Divider, Grid statistik, dan Chip
    
    // return (
    //     <Container maxWidth="sm">
    //         <Box sx={{ py: 4 }}>
    //             <Typography variant="h4" fontWeight={700}>
    //                 Halaman Profile
    //             </Typography>
    //             <Typography variant="body2" color="text.secondary">
    //                 Belajar Material UI step by step
    //             </Typography>

    //             <Card sx={{ borderRadius: 3, boxShadow: 3, mt: 2 }}>
    //                 <CardContent
    //                     sx={{
    //                         display: 'flex',
    //                         flexDirection: 'row',
    //                         alignItems: 'center',
    //                         gap: 2,
    //                     }}
    //                 >
    //                     <Avatar
    //                         alt="User"
    //                         src="/avatar.jpg"
    //                         sx={{ width: 80, height: 80 }}
    //                     />
    //                     <Box>
    //                         <Typography variant="h6">Budi Santoso</Typography>
    //                         <Typography variant="body2" color="text.secondary">
    //                             Frontend Developer
    //                         </Typography>
    //                     </Box>
    //                 </CardContent>

    //                 <CardContent>
    //                     <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
    //                         <Button variant="contained" fullWidth>
    //                             Follow
    //                         </Button>
    //                         <Button variant="outlined" fullWidth>
    //                             Message
    //                         </Button>
    //                         <IconButton color="primary" aria-label="edit profile">
    //                             <EditIcon />
    //                         </IconButton>
    //                     </Stack>

    //                     <Divider sx={{ my: 2 }} />

    //                     <Grid container spacing={2}>
    //                         <Grid xs={4}>
    //                             <Typography variant="h6" align="center">120</Typography>
    //                             <Typography variant="caption" align="center" display="block">Post</Typography>
    //                         </Grid>
    //                         <Grid xs={4}>
    //                             <Typography variant="h6" align="center">3.2K</Typography>
    //                             <Typography variant="caption" align="center" display="block">Followers</Typography>
    //                         </Grid>
    //                         <Grid xs={4}>
    //                             <Typography variant="h6" align="center">180</Typography>
    //                             <Typography variant="caption" align="center" display="block">Following</Typography>
    //                         </Grid>
    //                     </Grid>

    //                     <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: 'wrap' }}>
    //                         <Chip label="React" />
    //                         <Chip label="Next.js" />
    //                         <Chip label="MUI" />
    //                     </Stack>
    //                 </CardContent>
    //             </Card>
    //         </Box>
    //     </Container>
    // )
    

    // ===================== STEP E =====================
    // Ditambah: state & aksi pseudo (tombol Follow berubah, tombol Edit menampilkan teks)
    
    // return (
    //     <Container maxWidth="sm">
    //         <Box sx={{ py: 4 }}>
    //             <Typography variant="h4" fontWeight={700}>
    //                 Halaman Profile
    //             </Typography>
    //             <Typography variant="body2" color="text.secondary">
    //                 Belajar Material UI step by step
    //             </Typography>

    //             <Card sx={{ borderRadius: 3, boxShadow: 3, mt: 2 }}>
    //                 <CardContent
    //                     sx={{
    //                         display: 'flex',
    //                         flexDirection: 'row',
    //                         alignItems: 'center',
    //                         gap: 2,
    //                     }}
    //                 >
    //                     <Avatar
    //                         alt="User"
    //                         src="/avatar.jpg"
    //                         sx={{ width: 80, height: 80 }}
    //                     />
    //                     <Box>
    //                         <Typography variant="h6">Budi Santoso</Typography>
    //                         <Typography variant="body2" color="text.secondary">
    //                             Frontend Developer
    //                         </Typography>
    //                     </Box>
    //                 </CardContent>

    //                 <CardContent>
    //                     <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
    //                         <Button
    //                             variant={isFollowing ? 'outlined' : 'contained'}
    //                             onClick={handleFollow}
    //                             fullWidth
    //                         >
    //                             {isFollowing ? 'Following' : 'Follow'}
    //                         </Button>
    //                         <Button variant="outlined" fullWidth>
    //                             Message
    //                         </Button>
    //                         <IconButton
    //                             color="primary"
    //                             aria-label="edit profile"
    //                             onClick={handleEdit}
    //                         >
    //                             <EditIcon />
    //                         </IconButton>
    //                     </Stack>

    //                     {isEditing && (
    //                         <Typography variant="body2" color="primary" sx={{ mb: 2 }}>
    //                             Mode edit aktif (pseudo)
    //                         </Typography>
    //                     )}

    //                     <Divider sx={{ my: 2 }} />

    //                     <Grid container spacing={2}>
    //                         <Grid xs={4}>
    //                             <Typography variant="h6" align="center">120</Typography>
    //                             <Typography variant="caption" align="center" display="block">Post</Typography>
    //                         </Grid>
    //                         <Grid xs={4}>
    //                             <Typography variant="h6" align="center">3.2K</Typography>
    //                             <Typography variant="caption" align="center" display="block">Followers</Typography>
    //                         </Grid>
    //                         <Grid xs={4}>
    //                             <Typography variant="h6" align="center">180</Typography>
    //                             <Typography variant="caption" align="center" display="block">Following</Typography>
    //                         </Grid>
    //                     </Grid>

    //                     <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: 'wrap' }}>
    //                         <Chip label="React" />
    //                         <Chip label="Next.js" />
    //                         <Chip label="MUI" />
    //                     </Stack>
    //                 </CardContent>
    //             </Card>
    //         </Box>
    //     </Container>
    // )
    

    // ===================== STEP F (final) =====================
    // Responsive: nilai statis diganti object breakpoint { xs, sm, md }
    // Perubahan dari STEP E ditandai komentar "STEP F"
    
    return (
        <Container maxWidth="sm">
            <Box sx={{ py: 4 }}>
                <Typography variant="h4" fontWeight={700}>
                    Halaman Profile
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Belajar Material UI step by step
                </Typography>

                <Card sx={{ borderRadius: 3, boxShadow: 3, mt: 2 }}>
                    <CardContent
                        sx={{
                            display: 'flex',
                            // STEP F: kolom di HP, baris di layar lebih besar
                            flexDirection: { xs: 'column', sm: 'row' },
                            alignItems: 'center',
                            textAlign: { xs: 'center', sm: 'left' },
                            gap: 2,
                        }}
                    >
                        <Avatar
                            alt="User"
                            src="/avatar.jpg"
                            sx={{
                                // STEP F: ukuran avatar mengecil di HP
                                width: { xs: 64, sm: 80, md: 96 },
                                height: { xs: 64, sm: 80, md: 96 },
                            }}
                        />
                        <Box>
                            <Typography variant="h6">Budi Santoso</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Frontend Developer
                            </Typography>
                        </Box>
                    </CardContent>

                    <CardContent>
                        <Stack
                            // STEP F: tombol menumpuk vertikal di HP
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={1}
                            sx={{ mb: 2 }}
                        >
                            <Button
                                variant={isFollowing ? 'outlined' : 'contained'}
                                onClick={handleFollow}
                                fullWidth
                            >
                                {isFollowing ? 'Following' : 'Follow'}
                            </Button>
                            <Button variant="outlined" fullWidth>
                                Message
                            </Button>
                            <IconButton
                                color="primary"
                                aria-label="edit profile"
                                onClick={handleEdit}
                            >
                                <EditIcon />
                            </IconButton>
                        </Stack>

                        {isEditing && (
                            <Typography variant="body2" color="primary" sx={{ mb: 2 }}>
                                Mode edit aktif (pseudo)
                            </Typography>
                        )}

                        <Divider sx={{ my: 2 }} />

                        <Grid container spacing={2}>
                            <Grid xs={4}>
                                <Typography variant="h6" align="center">120</Typography>
                                <Typography variant="caption" align="center" display="block">Post</Typography>
                            </Grid>
                            <Grid xs={4}>
                                <Typography variant="h6" align="center">3.2K</Typography>
                                <Typography variant="caption" align="center" display="block">Followers</Typography>
                            </Grid>
                            <Grid xs={4}>
                                <Typography variant="h6" align="center">180</Typography>
                                <Typography variant="caption" align="center" display="block">Following</Typography>
                            </Grid>
                        </Grid>

                        <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: 'wrap' }}>
                            <Chip label="React" />
                            <Chip label="Next.js" />
                            <Chip label="MUI" />
                        </Stack>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    )
    
}

export default Profile
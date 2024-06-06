import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const posts = [
  {
    title: "Video Remote Interpretation: The Unseen...",
    date: "November 3, 2023",
    author: "Saheli Sukhwal",
    excerpt: "Have you ever thought about the incredible power of interpretation? It’s like a magic wand that helps people from different walks of life connect through the enchantment of language.",
    imageUrl: "/images/post1.png",
    category: "Interpretation"
  },
  {
    title: "9 Factors Shaping Interpretation Cost – A...",
    date: "October 12, 2023",
    author: "Saheli Sukhwal",
    excerpt: "In a world that’s more interconnected than ever, effective communication across languages is vital. Whether sealing a...",
    imageUrl: "/images/post2.png",
    category: "Interpretation"
  },
  {
    title: "6 Marketing Translation Fails That Cost Millions!",
    date: "June 9, 2023",
    author: "Saheli Sukhwal",
    excerpt: "Ever wondered how brands can conquer the global market? Well, they aim to connect with diverse audiences...",
    imageUrl: "/images/post3.png",
    category: "Translation And Localisation"
  },
  {
    title: "Why And How To Localise Your Marketing Assets",
    date: "May 20, 2023",
    author: "John Doe",
    excerpt: "These days marketing starts even before a product hits the shelf. With the right marketing plan and assets in place, you can build excitement for a product before it even launches.",
    imageUrl: "/images/post4.png",
    category: "General"
  },
  {
    title: "A Complete Guide to Remote Simultaneous Interpretation",
    date: "April 15, 2023",
    author: "Jane Smith",
    excerpt: "If you’re organising a meeting or conference,Remote simultaneous interpretation is a great way to ensure that everyone can participate in the conversation, regardless of location.",
    imageUrl: "/images/post5.png",
    category: "Localization"
  },
  {
    title: "Risks and Consequences of AI translation in 2023",
    date: "March 1, 2023",
    author: "Alex Johnson",
    excerpt: "It looks like AI is getting advanced so rapidly that soon it might replace many things, and translation seems to stand at the beginning of this line!",
    imageUrl: "/images/post6.png",
    category: "Translation"
  }
];

const LatestPosts = () => {
  return (
    <Box sx={{ flexGrow: 3, p: { xs: 2, md: 10 }, paddingTop: 1, mt: 0 }}> {/* Adjust padding for different screen sizes */}
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', mt: 1, mb: 1 }}>
        Our Latest Posts
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {posts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card raised sx={{ maxWidth: 345, mx: "auto", borderRadius: '20px', minHeight: '100%' }}>
              <CardMedia
                component="img"
                height="140"
                image={post.imageUrl}
                alt={post.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.excerpt}
                </Typography>
                <Typography variant="caption" display="block" sx={{ mt: 2 }}>
                  {post.author} | {post.date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LatestPosts;

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import { useTranslation } from 'react-i18next';
import { getLocalizedH2 } from '../../shared/SEO.tsx';
import { trackButtonClick } from '../../../lib/analytics';

const PainPointsContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(8, 0),
  overflow: 'hidden',
  background: 'linear-gradient(180deg, #f8fafc 0%, #e0e7ff 50%, #f3f4f6 100%)',
  minHeight: '100vh',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '1000px',
    height: '1000px',
    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
    pointerEvents: 'none',
    zIndex: 0,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '800px',
    height: '800px',
    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
    pointerEvents: 'none',
    zIndex: 0,
  }
}));

const ComparisonCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  borderRadius: '24px',
  overflow: 'hidden',
  background: '#ffffff',
  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  border: '1px solid rgba(59, 130, 246, 0.1)',
  '&:hover': {
    transform: 'translateY(-16px)',
    boxShadow: '0 30px 80px rgba(59, 130, 246, 0.2)',
    borderColor: 'rgba(59, 130, 246, 0.3)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)',
    zIndex: 10,
  }
}));


export interface PainPointItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: {
    theory?: number;
    lesson?: number;
    total?: number;
    manualTotalLabel?: string;
    autoTotalLabel?: string;
    autoTotal?: number;
    finalLabel?: string;
    finalPrice?: number;
  };
  buttonText: string;
  priceLabel?: string;
  afterPrice?: string;
  buttonLink?: string;
}

interface PainPointsProps {
  title?: string;
  subtitle?: string;
  items?: PainPointItem[];
}

export default function PainPoints({ 
  title,
  subtitle = "Before vs After AI Integration",
  items = []
}: PainPointsProps) {
  const { t, i18n } = useTranslation();
  const defaultTitle = title || getLocalizedH2('categories', i18n.language || 'et');

  // Trust indicators
  const trustIndicators = [
    { text: "SSL turvaline" },
    { text: "Garantitud tulemus" },
    { text: "24/7 tugi" }
  ];
  
  const defaultItems: PainPointItem[] = [
    {
      id: 'category-a',
      title: t('painpoints.categories.a.title'),
      description: t('painpoints.categories.a.description'),
      imageUrl: 'https://placehold.co/320x180?text=Before',
      price: {
        theory: 120,
        lesson: 45,
        total: 570
      },
      buttonText: t('painpoints.categories.a.button'),
      priceLabel: t('painpoints.categories.a.price_label')
    },
    {
      id: 'category-b',
      title: t('painpoints.categories.b.title'),
      description: t('painpoints.categories.b.description'),
      imageUrl: 'https://placehold.co/320x180?text=After',
      price: {
        theory: 150,
        lesson: 50,
        total: 650,
        manualTotalLabel: t('painpoints.categories.b.manual_total'),
        autoTotalLabel: t('painpoints.categories.b.auto_total'),
        autoTotal: 780
      },
      buttonText: t('painpoints.categories.b.button'),
      priceLabel: t('painpoints.categories.b.price_label')
    },
    {
      id: 'category-c',
      title: t('painpoints.categories.c.title'),
      description: t('painpoints.categories.c.description'),
      imageUrl: 'https://placehold.co/320x180?text=After',
      price: {
        finalLabel: t('painpoints.categories.c.final_label'),
        finalPrice: 150
      },
      buttonText: t('painpoints.categories.c.button'),
      priceLabel: t('painpoints.categories.c.price_label'),
      afterPrice: t('painpoints.categories.c.after_price')
    }
  ];
  
  // Use provided items or fall back to default items
  const displayItems = items.length > 0 ? items : defaultItems;

  return (
    <PainPointsContent id="pricing">
      <Container maxWidth="xl">
      
        <Stack spacing={4} alignItems="center">
          <Box sx={{ 
            textAlign: 'center', 
            mb: 3, 
            position: 'relative', 
            zIndex: 1,
            px: { xs: 2, sm: 0 }
          }}>
            {/* SEO H2 tag - hidden but accessible */}
            <h2 style={{ 
              position: 'absolute',
              width: '1px',
              height: '1px',
              padding: 0,
              margin: '-1px',
              overflow: 'hidden',
              clipPath: 'inset(50%)',
              whiteSpace: 'nowrap',
              border: 0,
            }}>
              {defaultTitle}
            </h2>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.25rem', sm: '2.5rem', md: '3rem' },
                fontWeight: 800,
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                mb: 2,
                lineHeight: 1.2,
              }}
            >
              {defaultTitle}
            </Typography>
            <Typography
              variant="h6"
              sx={{ 
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                color: '#64748b',
                fontWeight: 500,
                lineHeight: 1.6,
                maxWidth: '900px',
                mx: 'auto',
                mb: 0
              }}
            >
              {subtitle}
            </Typography>
            
            {/* Trust Indicators */}
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              flexWrap: 'wrap', 
              gap: { xs: 2, sm: 4 },
              mt: 4,
              mb: 7.5,
              px: { xs: 1, sm: 0 }
            }}>
              {trustIndicators.map((indicator, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.25,
                    px: 3,
                    py: 1.5,
                    background: '#ffffff',
                    borderRadius: '50px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: '#475569',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
                    }
                  }}
                >
                  <Box component="span" sx={{ fontSize: '1.25rem' }}>
                    {index === 0 ? '🔒' : index === 1 ? '✅' : '⏰'}
                  </Box>
                  <Typography sx={{ fontSize: '0.95rem', fontWeight: 600, color: '#475569' }}>
                    {indicator.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(auto-fit, minmax(340px, 1fr))',
                md: 'repeat(auto-fit, minmax(380px, 1fr))'
              },
              gap: { xs: 3, sm: 4 },
              width: '100%',
              maxWidth: '1400px',
              mx: 'auto',
              px: { xs: 2, sm: 2.5 },
              mb: 7.5
            }}
          >
            {displayItems.length === 0 ? (
              <Typography variant="body1" sx={{ textAlign: 'center', width: '100%' }}>
                {t('painpoints.no_categories')}
              </Typography>
            ) : (
              displayItems.map((item) => (
                <ComparisonCard 
                  key={item.id}
                  sx={{ 
                    width: '100%',
                    maxWidth: { xs: '100%', sm: '400px' },
                    mx: { xs: 1, sm: 0 }
                  }}
                >
                  {/* Image with Badge */}
                  <Box
                    sx={{
                      position: 'relative',
                      height: '240px',
                      overflow: 'hidden',
                      background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
                    }}
                  >
                    <Box
                      component="img"
                      src={item.imageUrl}
                      alt={item.title}
                      loading="lazy"
                      sx={{ 
                        width: '100%', 
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        '&:hover': {
                          transform: 'scale(1.15) rotate(2deg)',
                        }
                      }}
                    />
                    {/* Overlay Gradient on Hover */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)',
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                        pointerEvents: 'none',
                        '.MuiCard-root:hover &': {
                          opacity: 1,
                        }
                      }}
                    />
                    {/* Category Badge - Enhanced */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(10px)',
                        px: 2.5,
                        py: 1.2,
                        borderRadius: '50px',
                        fontSize: '0.875rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.75,
                        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                        border: '1px solid rgba(255, 255, 255, 0.5)',
                        animation: 'slideDown 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        '@keyframes slideDown': {
                          from: {
                            opacity: 0,
                            transform: 'translateY(-10px)',
                          },
                          to: {
                            opacity: 1,
                            transform: 'translateY(0)',
                          }
                        }
                      }}
                    >
                      {item.id === 'category-a' && '🏍️ A-kategooria'}
                      {item.id === 'category-b' && '🚗 B-kategooria'}
                      {item.id === 'category-c' && '🎓 Lõppkursus'}
                    </Box>
                  </Box>

                  <CardContent sx={{ p: 4, position: 'relative', zIndex: 1 }}>
                    {/* Title with Icon */}
                    {/* <Typography 
                      variant="h5" 
                      component="h3"
                      sx={{ 
                        mb: 2, 
                        fontSize: '1.5rem', 
                        fontWeight: 700,
                        color: '#1e293b',
                        lineHeight: 1.3,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5
                      }}
                    >
                      <Box component="span" sx={{ fontSize: '1.75rem' }}>
                        {item.id === 'category-a' && '🏍️'}
                        {item.id === 'category-b' && '🚗'}
                        {item.id === 'category-c' && '🎓'}
                      </Box>
                      {item.title}
                    </Typography> */}

                    {/* Description */}
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        mb: 3, 
                        color: '#64748b',
                        fontSize: '1rem',
                        lineHeight: 1.7
                      }}
                    >
                      {item.description}
                    </Typography>

                    

                    {/* Features List - Extract from description or use defaults */}
                    {item.id === 'category-a' && (
                      <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, mb: 3 }}>
                        <Box component="li" sx={{ display: 'flex', alignItems: 'center', gap: 1.25, py: 0.6, fontSize: '0.95rem', color: '#475569', transition: 'all 0.3s ease', '&:hover': { color: '#22c55e', transform: 'translateX(4px)' } }}>
                          <Box component="span" sx={{ color: '#22c55e', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '24px', minHeight: '24px', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '8px' }}>✅</Box>
                          <span>Teooriakursus</span>
                        </Box>
                        <Box component="li" sx={{ display: 'flex', alignItems: 'center', gap: 1.25, py: 0.6, fontSize: '0.95rem', color: '#475569', transition: 'all 0.3s ease', '&:hover': { color: '#22c55e', transform: 'translateX(4px)' } }}>
                          <Box component="span" sx={{ color: '#22c55e', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '24px', minHeight: '24px', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '8px' }}>✅</Box>
                          <span>Praktilised sõidutunnid</span>
                        </Box>
                        <Box component="li" sx={{ display: 'flex', alignItems: 'center', gap: 1.25, py: 0.6, fontSize: '0.95rem', color: '#475569', transition: 'all 0.3s ease', '&:hover': { color: '#22c55e', transform: 'translateX(4px)' } }}>
                          <Box component="span" sx={{ color: '#22c55e', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '24px', minHeight: '24px', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '8px' }}>✅</Box>
                          <span>Eksamite sooritamine</span>
                        </Box>
                      </Box>
                    )}
                    {item.id === 'category-b' && (
                      <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, mb: 3 }}>
                        <Box component="li" sx={{ display: 'flex', alignItems: 'center', gap: 1.25, py: 0.6, fontSize: '0.95rem', color: '#475569', transition: 'all 0.3s ease', '&:hover': { color: '#22c55e', transform: 'translateX(4px)' } }}>
                          <Box component="span" sx={{ color: '#22c55e', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '24px', minHeight: '24px', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '8px' }}>✅</Box>
                          <span>95% edu esimesel korral</span>
                        </Box>
                        <Box component="li" sx={{ display: 'flex', alignItems: 'center', gap: 1.25, py: 0.6, fontSize: '0.95rem', color: '#475569', transition: 'all 0.3s ease', '&:hover': { color: '#22c55e', transform: 'translateX(4px)' } }}>
                          <Box component="span" sx={{ color: '#22c55e', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '24px', minHeight: '24px', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '8px' }}>✅</Box>
                          <span>Individuaalne lähenemine</span>
                        </Box>
                        <Box component="li" sx={{ display: 'flex', alignItems: 'center', gap: 1.25, py: 0.6, fontSize: '0.95rem', color: '#475569', transition: 'all 0.3s ease', '&:hover': { color: '#22c55e', transform: 'translateX(4px)' } }}>
                          <Box component="span" sx={{ color: '#22c55e', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '24px', minHeight: '24px', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '8px' }}>✅</Box>
                          <span>Paindlik ajakava</span>
                        </Box>
                        <Box component="li" sx={{ display: 'flex', alignItems: 'center', gap: 1.25, py: 0.6, fontSize: '0.95rem', color: '#475569', transition: 'all 0.3s ease', '&:hover': { color: '#22c55e', transform: 'translateX(4px)' } }}>
                          <Box component="span" sx={{ color: '#22c55e', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '24px', minHeight: '24px', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '8px' }}>✅</Box>
                          <span>Kaasaegsed autod</span>
                        </Box>
                      </Box>
                    )}
                    {item.id === 'category-c' && (
                      <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, mb: 3 }}>
                        <Box component="li" sx={{ display: 'flex', alignItems: 'center', gap: 1.25, py: 0.6, fontSize: '0.95rem', color: '#475569', transition: 'all 0.3s ease', '&:hover': { color: '#22c55e', transform: 'translateX(4px)' } }}>
                          <Box component="span" sx={{ color: '#22c55e', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '24px', minHeight: '24px', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '8px' }}>✅</Box>
                          <span>100% tagatud tulemus</span>
                        </Box>
                        <Box component="li" sx={{ display: 'flex', alignItems: 'center', gap: 1.25, py: 0.6, fontSize: '0.95rem', color: '#475569', transition: 'all 0.3s ease', '&:hover': { color: '#22c55e', transform: 'translateX(4px)' } }}>
                          <Box component="span" sx={{ color: '#22c55e', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '24px', minHeight: '24px', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '8px' }}>✅</Box>
                          <span>Kogenud instruktorid</span>
                        </Box>
                        <Box component="li" sx={{ display: 'flex', alignItems: 'center', gap: 1.25, py: 0.6, fontSize: '0.95rem', color: '#475569', transition: 'all 0.3s ease', '&:hover': { color: '#22c55e', transform: 'translateX(4px)' } }}>
                          <Box component="span" sx={{ color: '#22c55e', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '24px', minHeight: '24px', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '8px' }}>✅</Box>
                          <span>Individuaalne lähenemine</span>
                        </Box>
                        <Box component="li" sx={{ display: 'flex', alignItems: 'center', gap: 1.25, py: 0.6, fontSize: '0.95rem', color: '#475569', transition: 'all 0.3s ease', '&:hover': { color: '#22c55e', transform: 'translateX(4px)' } }}>
                          <Box component="span" sx={{ color: '#22c55e', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '24px', minHeight: '24px', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '8px' }}>✅</Box>
                          <span>Paindlik ajakava</span>
                        </Box>
                      </Box>
                    )}
                    {/* Pricing Section with Gradient Background */}
                    <Box
                      sx={{
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)',
                        p: 3,
                        borderRadius: '16px',
                        mb: 3,
                        border: '1px solid rgba(59, 130, 246, 0.1)',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      {item.price.finalLabel && item.price.finalPrice !== undefined ? (
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1.2 }}>
                          <Typography sx={{ color: '#64748b', fontWeight: 500, fontSize: '0.95rem' }}>
                            {item.price.finalLabel}
                          </Typography>
                          <Typography sx={{ color: '#3b82f6', fontWeight: 800, fontSize: '1.3rem', letterSpacing: '-0.5px' }}>
                            {item.price.finalPrice} {t('painpoints.euro')}
                          </Typography>
                        </Box>
                      ) : (
                        <>
                          {item.price.theory !== undefined && (
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1.2 }}>
                              <Typography sx={{ color: '#64748b', fontWeight: 500, fontSize: '0.95rem' }}>
                                {t('painpoints.theory')}:
                              </Typography>
                              <Typography sx={{ color: '#475569', fontWeight: 700, fontSize: '1rem' }}>
                                {item.price.theory} {t('painpoints.euro')}
                              </Typography>
                            </Box>
                          )}
                          {item.price.lesson !== undefined && (
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1.2 }}>
                              <Typography sx={{ color: '#64748b', fontWeight: 500, fontSize: '0.95rem' }}>
                                {t('painpoints.lesson')}:
                              </Typography>
                              <Typography sx={{ color: '#475569', fontWeight: 700, fontSize: '1rem' }}>
                                {item.price.lesson} {t('painpoints.euro')}
                              </Typography>
                            </Box>
                          )}
                          {item.price.manualTotalLabel ? (
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1.2, borderTop: '1px solid rgba(59, 130, 246, 0.2)', pt: 1.5, mt: 1.5 }}>
                              <Typography sx={{ color: '#64748b', fontWeight: 600, fontSize: '0.95rem' }}>
                                {item.price.manualTotalLabel}
                              </Typography>
                              <Typography sx={{ color: '#3b82f6', fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.5px' }}>
                                {item.price.total} {t('painpoints.euro')}
                              </Typography>
                            </Box>
                          ) : (
                            item.price.total !== undefined && (
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1.2, borderTop: '1px solid rgba(59, 130, 246, 0.2)', pt: 1.5, mt: 1.5 }}>
                                <Typography sx={{ color: '#64748b', fontWeight: 600, fontSize: '0.95rem' }}>
                                  {t('painpoints.total')}:
                                </Typography>
                                <Typography sx={{ color: '#3b82f6', fontWeight: 800, fontSize: '1.3rem', letterSpacing: '-0.5px' }}>
                                  {item.price.total} {t('painpoints.euro')}
                                </Typography>
                              </Box>
                            )
                          )}
                          {item.price.autoTotalLabel && item.price.autoTotal !== undefined && (
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1.2, borderTop: '1px solid rgba(59, 130, 246, 0.2)', pt: 1.5, mt: 1.5 }}>
                              <Typography sx={{ color: '#64748b', fontWeight: 600, fontSize: '0.95rem' }}>
                                {item.price.autoTotalLabel}
                              </Typography>
                              <Typography sx={{ color: '#3b82f6', fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.5px' }}>
                                {item.price.autoTotal} {t('painpoints.euro')}
                              </Typography>
                            </Box>
                          )}
                        </>
                      )}
                    </Box>

                    {/* After Price Note for Final Course */}
                    {item.afterPrice && (
                      <Box
                        sx={{
                          background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.08) 0%, rgba(245, 158, 11, 0.08) 100%)',
                          borderLeft: '4px solid #f59e0b',
                          p: 2.5,
                          borderRadius: '12px',
                          mb: 3,
                          fontSize: '0.9rem',
                          color: '#92400e',
                          fontWeight: 600,
                          lineHeight: 1.6,
                          border: '1px solid rgba(245, 158, 11, 0.2)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.12) 0%, rgba(245, 158, 11, 0.12) 100%)',
                            borderLeftColor: '#f97316',
                          }
                        }}
                      >
                        {item.afterPrice}
                      </Box>
                    )}
                    {/* Action Buttons */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.75, width: '100%' }}>
                      {item.buttonLink && item.buttonLink.startsWith('http') ? (
                        <a 
                          href={item.buttonLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: 'none', width: '100%' }}
                        >
                          <Button
                            variant="contained"
                            size="large"
                            onClick={() => {
                              const isPayment = item.buttonLink && item.buttonLink.includes('buy.stripe.com');
                              trackButtonClick(
                                `painpoint_${item.id}_button`,
                                isPayment ? 'payment' : 'info',
                                'painpoints',
                                item.buttonText,
                                item.buttonLink
                              );
                            }}
                            sx={{
                              py: 2.2,
                              px: 3,
                              fontSize: '1.05rem',
                              fontWeight: 700,
                              borderRadius: '14px',
                              background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                              color: 'white',
                              boxShadow: '0 12px 25px rgba(34, 197, 94, 0.25)',
                              textTransform: 'none',
                              width: '100%',
                              transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: 1,
                              position: 'relative',
                              overflow: 'hidden',
                              '&::before': {
                                content: '""',
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                                transform: 'translateX(-100%)',
                              },
                              '&:hover': {
                                transform: 'translateY(-3px)',
                                boxShadow: '0 18px 40px rgba(34, 197, 94, 0.35)',
                                background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)',
                                '&::before': {
                                  transform: 'translateX(100%)',
                                  transition: 'transform 0.6s ease',
                                }
                              },
                              '&:active': {
                                transform: 'translateY(-1px)',
                              }
                            }}
                          >
                            <Box component="span" sx={{ fontSize: '1.3rem' }}>
                              {item.id === 'category-a' && '🏍️'}
                              {item.id === 'category-b' && '🚗'}
                              {item.id === 'category-c' && '🎉'}
                            </Box>
                            {item.buttonText}
                          </Button>
                        </a>
                      ) : (
                        <Link 
                          to={item.buttonLink ? `${item.buttonLink}?category=${item.id}` : '#'}
                          style={{ textDecoration: 'none', width: '100%' }}
                        >
                          <Button
                            variant="contained"
                            size="large"
                            onClick={() => {
                              const isPayment = item.buttonLink && item.buttonLink.includes('buy.stripe.com');
                              trackButtonClick(
                                `painpoint_${item.id}_button`,
                                isPayment ? 'payment' : 'info',
                                'painpoints',
                                item.buttonText,
                                item.buttonLink
                              );
                            }}
                            sx={{
                              py: 2,
                              px: 3,
                              fontSize: '1.05rem',
                              fontWeight: 700,
                              borderRadius: '12px',
                              background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                              color: 'white',
                              boxShadow: '0 8px 20px rgba(34, 197, 94, 0.3)',
                              textTransform: 'none',
                              width: '100%',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                transform: 'translateY(-2px)',
                                boxShadow: '0 12px 30px rgba(34, 197, 94, 0.4)',
                              }
                            }}
                          >
                            {item.buttonText}
                          </Button>
                        </Link>
                      )}
                      {/* <Button
                        variant="outlined"
                        size="large"
                        startIcon={<EmailIcon />}
                        href="mailto:viktorijaautokool@hot.ee?subject=Registratsioon%20autokooli"
                        onClick={() => trackButtonClick(
                          `painpoint_${item.id}_email`,
                          'info',
                          'painpoints',
                          t('common.send_email'),
                          'mailto:viktorijaautokool@hot.ee?subject=Registratsioon%20autokooli'
                        )}
                        sx={{
                          py: 2,
                          px: 3,
                          fontSize: '1.05rem',
                          fontWeight: 700,
                          borderRadius: '12px',
                          background: '#ffffff',
                          color: '#1e293b',
                          border: '2px solid #e2e8f0',
                          textTransform: 'none',
                          width: '100%',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: '#f8fafc',
                            borderColor: '#cbd5e1',
                          }
                        }}
                      >
                        {t('common.send_email')}
                      </Button> */}
                    </Box>
                  </CardContent>
                </ComparisonCard>
              ))
            )}
          </Box>
        </Stack>
      </Container>
    </PainPointsContent>
  );
} 
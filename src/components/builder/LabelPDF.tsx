import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { LabelData } from '@/lib/store/useLabelStore';

// Use standard PDF fonts to avoid fontkit resolution issues with external woff2 files
const styles = StyleSheet.create({
  page: {
    padding: 20,
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica',
  },
  labelContainer: {
    width: '100%',
    padding: 15,
    border: '2pt solid black',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    borderBottom: '2pt solid black',
    paddingBottom: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  brand: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#666',
    textTransform: 'uppercase',
    marginTop: 2,
  },
  content: {
    flexGrow: 1,
  },
  ingredientsHeader: {
    fontSize: 8,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  ingredientsText: {
    fontSize: 9,
    lineHeight: 1.4,
  },
  allergen: {
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
  footer: {
    marginTop: 15,
    borderTop: '2pt solid black',
    paddingTop: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  footerLabel: {
    fontSize: 6,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#666',
    marginBottom: 2,
  },
  footerValue: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  notice: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 7,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 3,
    marginTop: 8,
    textTransform: 'uppercase',
  },
  barcodeContainer: {
    marginTop: 10,
    alignItems: 'center',
  }
});

export const LabelPDF = ({ data }: { data: LabelData }) => {
  const ingredientsString = data.ingredients.join(', ');
  
  // Logic to split ingredients into parts to bold allergens
  const renderIngredients = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let parts: any[] = [ingredientsString];
    data.allergens.forEach(allergen => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newParts: any[] = [];
      parts.forEach(part => {
        if (typeof part === 'string') {
          const split = part.split(new RegExp(`(${allergen})`, 'gi'));
          newParts.push(...split);
        } else {
          newParts.push(part);
        }
      });
      parts = newParts;
    });

    return (
      <Text style={styles.ingredientsText}>
        <Text style={styles.ingredientsHeader}>INGREDIENTS: </Text>
        {parts.map((part, i) => {
          const isAllergen = data.allergens.some(a => a.toLowerCase() === part.toLowerCase());
          return (
            <Text key={i} style={isAllergen ? styles.allergen : {}}>
              {part}
            </Text>
          );
        })}
      </Text>
    );
  };

  return (
    <Document>
      <Page size={[283, 198]} style={styles.page}> {/* 100mm x 70mm approx */}
        <View style={styles.labelContainer}>
          <View style={styles.header}>
            <Text style={styles.productName}>{data.productName || 'Product Name'}</Text>
            <Text style={styles.brand}>{data.brand || 'Brand Name'}</Text>
          </View>

          <View style={styles.content}>
            {renderIngredients()}
          </View>

          <View style={styles.footer}>
            <View style={styles.footerItem}>
              <Text style={styles.footerLabel}>Use By</Text>
              <Text style={styles.footerValue}>{data.useByDate || 'DD/MM'}</Text>
            </View>
            <View style={styles.footerItem}>
              <Text style={styles.footerLabel}>Weight</Text>
              <Text style={styles.footerValue}>{data.weight || '0g'}</Text>
            </View>
          </View>

          <Text style={styles.notice}>Keep Refrigerated Below 5°C</Text>
        </View>
      </Page>
    </Document>
  );
};

export default LabelPDF;

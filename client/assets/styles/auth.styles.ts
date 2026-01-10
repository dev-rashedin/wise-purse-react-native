import {
  StyleSheet,
  type ViewStyle,
  type TextStyle,
  type ImageStyle,
} from 'react-native';
import { COLORS } from '../../constants/colors';

type AuthStyles = {
  container: ViewStyle;
  illustration: ImageStyle;
  title: TextStyle;
  input: TextStyle;
  errorInput: TextStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  footerContainer: ViewStyle;
  footerText: TextStyle;
  linkText: TextStyle;
  verificationContainer: ViewStyle;
  verificationTitle: TextStyle;
  verificationInput: TextStyle;
  errorBox: ViewStyle;
  errorText: TextStyle;
};

export const authStyles = StyleSheet.create<AuthStyles>({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustration: {
    height: 310,
    width: 300,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.text,
    marginVertical: 15,
    textAlign: 'center',
  },
  input: {
    backgroundColor: COLORS.white,
    width: '70%',
    borderRadius: 12,
    padding: 15,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    fontSize: 16,
    color: COLORS.text,
  },
  errorInput: {
    borderColor: COLORS.expense,
  },
  button: {
    backgroundColor: COLORS.primary,
    width: '70%',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '600',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  footerText: {
    color: COLORS.text,
    fontSize: 16,
  },
  linkText: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  verificationContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verificationTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 20,
    textAlign: 'center',
  },
  verificationInput: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 15,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    fontSize: 16,
    color: COLORS.text,
    width: '100%',
    textAlign: 'center',
    letterSpacing: 2,
  },
  errorBox: {
    backgroundColor: '#FFE5E5',
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.expense,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  errorText: {
    color: COLORS.text,
    marginLeft: 8,
    flex: 1,
    fontSize: 14,
  },
});

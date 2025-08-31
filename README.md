# 📊 PRE-GPA-Calculator

A simple and efficient web-based GPA calculator that computes student grades based on marks from 6 subjects. Perfect for students and educators who need quick grade calculations with percentage and GPA conversion.

## ✨ Features

- **6-Subject Grade Calculation**: Input marks for all six subjects
- **Automatic Percentage Calculation**: Converts total marks to percentage
- **GPA Conversion**: Uses a 9.5-point scale for GPA calculation
- **Student Name Tracking**: Optional name field for personalized results
- **Results Table**: Displays all calculated results in an organized table
- **Input Validation**: Handles empty fields gracefully with default values
- **Real-time Calculation**: Instant results upon form submission
- **Clean Interface**: User-friendly design for easy grade input

## 🎯 How It Works

The calculator processes marks from 6 subjects:
- **F**: First subject
- **S**: Second subject  
- **N**: Third subject
- **J**: Fourth subject
- **T**: Fifth subject
- **D**: Sixth subject

### Calculation Formula
- **Total Marks**: Sum of all 6 subject marks
- **Percentage**: `(Total Marks / 600) × 100` (assuming 100 marks per subject)
- **GPA**: `Percentage ÷ 9.5` (rounded to 2 decimal places)

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Niru-9/PER-GPA-Calculator
   cd PRE-GPA-Calculator
   ```

2. **Open in browser**
   - Simply open `mark.html` in any modern web browser
   - No installation or setup required!

3. **Start calculating**
   - Enter student name (optional)
   - Input marks for all 6 subjects (0-100)
   - Click submit to see results

## 📁 Project Structure

```
PRE-GPA-Calculator/
├── mark.html      # Main HTML structure with form
├── marks.css       # Styling for calculator interface
├── mark.js       # Core calculation logic
└── README.md       # This documentation
```

## 💡 Usage Example

**Input:**
- Student Name: John Doe
- Subject F: 85
- Subject S: 92
- Subject N: 78
- Subject J: 88
- Subject T: 91
- Subject D: 86

**Output:**
- **Percentage**: 86.67%
- **GPA**: 9.12
- Results added to tracking table

## 🔧 Technical Details

- **Language**: Vanilla JavaScript (ES6+)
- **Styling**: Pure CSS3
- **Form Handling**: Prevents default submission, processes data client-side
- **Data Validation**: Handles empty inputs with fallback to 0
- **Browser Support**: All modern browsers with JavaScript enabled

### Key Functions
- `calculateAttendance(event)`: Main calculation function
- Form validation and error handling
- Dynamic table row insertion for results tracking

## 🎨 Customization Options

- **Modify GPA Scale**: Change the divisor (currently 9.5) in the calculation
- **Add More Subjects**: Extend the form and calculation logic
- **Custom Grading System**: Adjust percentage to GPA conversion
- **Styling**: Customize colors, fonts, and layout in `marks.css`
- **Subject Names**: Update input IDs and labels for specific subjects

## 🔮 Future Enhancements

- [ ] Letter grade display (A, B, C, D, F)
- [ ] Multiple GPA scale options (4.0, 10.0, etc.)
- [ ] Export results to CSV/PDF
- [ ] Grade history and analytics
- [ ] Subject-wise grade analysis
- [ ] Mobile-responsive design improvements
- [ ] Dark/light theme toggle

## 🤝 Contributing

Contributions are welcome! Ideas for improvement:

1. **Enhanced Validation**: Add more robust input validation
2. **UI/UX Improvements**: Modern design patterns and animations
3. **Additional Features**: Credits system, weighted grades, etc.
4. **Accessibility**: Screen reader support and keyboard navigation
5. **Internationalization**: Support for different grading systems

## 📋 Requirements

- Modern web browser with JavaScript enabled
- No external dependencies or frameworks required

## 📄 License

This project is open-source and available under the MIT License. Feel free to use, modify, and distribute for educational or personal purposes.

## 🛠️ Development

To contribute to this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you encounter any issues or have questions:
- Open an issue on GitHub
- Check existing issues for solutions
- Contribute improvements via pull requests

---

**Made with ❤️ for students and educators**

*Calculate smarter, not harder!* 🎓

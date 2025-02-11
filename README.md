Random Color Generator

This project is a simple web application built using React.js that allows users to generate random colors in HEX or RGB format. The user can switch between the color formats and see the background of the application change to the generated color.


![image](https://github.com/user-attachments/assets/a6010444-5138-4834-9d4b-4ce393eedb91)


Features

Generate random HEX colors.

Generate random RGB colors.

Dynamic background color updates based on the generated color.

Stylish interactive buttons with hover effects.

Clean and responsive UI.

Technologies Used

React.js: Front-end framework for building the user interface.

CSS3: Styling for buttons and layout.

Installation

To set up and run this project locally, follow these steps:

Clone this repository:

git clone https://github.com/your-username/random-color-generator.git

Navigate to the project directory:

cd random-color-generator

Install the required dependencies:

npm install

Start the development server:

npm start

Open your browser and visit http://localhost:3000 to use the application.

How It Works

Color Type Selection:

Click the "Hex Generate" button to switch to HEX color generation.

Click the "RGB Generate" button to switch to RGB color generation.

Generate Color:

Click the "Generate" button to create a random color based on the selected type.

The background color will change to the generated color.

CSS Styling

The project uses the following CSS properties for button styling:

Rounded corners (border-radius: 16px)

Dynamic hover effect with brightness (filter: brightness(1.1))

Interactive button press effect (border-width on active state)

Code Highlights

HEX Color Generator:

  
  
    
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
    hexColor += hex[Math.floor(Math.random() * hex.length)];
      }
    setcolor(hexColor);
    }
    

RGB Color Generator:

function handleCreateRandomrgbColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  setcolor(`rgb(${r}, ${g}, ${b})`);
}

Improvements

Potential future enhancements include:

Adding a copy-to-clipboard feature for generated colors.

Displaying the color code text on the screen.

Adding support for HSL color generation.

Improving mobile responsiveness.

License

This project is licensed under the MIT License. Feel free to use and modify it as per your requirements.

Author
Rakesh jeethuri

Happy coding! ✨

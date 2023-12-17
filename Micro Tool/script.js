document.addEventListener('DOMContentLoaded', function () {
    // JavaScript to handle button clicks and display content
    const converterButton = document.getElementById('converterButton');
    const flexboxButton = document.getElementById('flexboxButton');
    const passwordButton = document.getElementById('passwordButton');
    const screen = document.getElementById('screen');

    function showLengthMassConverter() {
        screen.innerHTML = `
        <h2 class="h2tools-tile" >Length and Mass Converter</h2>

        <div class="lmc-container">

            <div class="enter-length-cont">
                    <label for="lengthInput" class="tools-label">Enter Length:</label>
                    <input type="number" id="lengthInput" placeholder="Enter length" class="all-input">
                    <select id="fromLengthUnit" class="all-input">
                        <option value="kilometer">Kilometer</option>
                        <option value="meter">Meter</option>
                        <option value="centimeter">Centimeter</option>
                        <option value="millimeter">Millimeter</option>
                        <!-- Add more length units as needed -->
                    </select>
                    <span>to</span>
                    <select id="toLengthUnit" class="all-input">
                        <option value="kilometer">Kilometer</option>
                        <option value="meter">Meter</option>
                        <option value="centimeter">Centimeter</option>
                        <option value="millimeter">Millimeter</option>
                        <!-- Add more length units as needed -->
                    </select>

                    <button id="convertLengthButton" class="tools-button">Convert</button>
            </div>

            <div class="lenght-result">
                    <div class="lenght-result-left">
                        <div id="lengthResult" class="converter-result"></div>
                    </div>

                    <div class="lenght-result-right">
                        <button id="copyLengthResult" class="tools-button">Copy</button>
                    </div>
            </div>

            <div class="enter-mass-cont">
                    <label for="massInput" class="tools-label" id="converter-label2">Enter Mass:</label>
                    <input type="number" id="massInput" placeholder="Enter mass" class="all-input">
                    <select id="fromMassUnit" class="all-input">
                        <option value="kilogram">Kilogram</option>
                        <option value="gram">Gram</option>
                        <option value="milligram">Milligram</option>
                        <!-- Add more mass units as needed -->
                    </select>
                    <span>to</span>
                    <select id="toMassUnit" class="all-input"">
                        <option value="kilogram">Kilogram</option>
                        <option value="gram">Gram</option>
                        <option value="milligram">Milligram</option>
                        <!-- Add more mass units as needed -->
                    </select>
                    <button id="convertMassButton" class="tools-button">Convert</button>
            </div>

            <div class="mass-result">

                    <div class="mass-result-left">
                        <div id="massResult" class="converter-result"></div>
                    </div>

                    <div class="mass-result-right">
                        <button id="copyMassResult" class="tools-button">Copy</button>
                    </div>

                    
                    
            </div>

        </div>
        `;
    
        const convertLengthButton = document.getElementById('convertLengthButton');
        const lengthResult = document.getElementById('lengthResult');
        const copyLengthResult = document.getElementById('copyLengthResult');
        const convertMassButton = document.getElementById('convertMassButton');
        const massResult = document.getElementById('massResult');
        const copyMassResult = document.getElementById('copyMassResult');
    
        // Function to copy text to clipboard
        function copyTextToClipboard(text) {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            alert('Result copied to clipboard!');
        }
    
        convertLengthButton.addEventListener('click', () => {
            const lengthInput = parseFloat(document.getElementById('lengthInput').value);
            const fromLengthUnit = document.getElementById('fromLengthUnit').value;
            const toLengthUnit = document.getElementById('toLengthUnit').value;
    
            let convertedLength;
    
            // Length conversion logic
            const lengthConversionFactors = {
                kilometer: {
                    meter: 1000,
                    centimeter: 100000,
                    millimeter: 1000000,
                },
                meter: {
                    kilometer: 0.001,
                    centimeter: 100,
                    millimeter: 1000,
                },
                centimeter: {
                    kilometer: 0.00001,
                    meter: 0.01,
                    millimeter: 10,
                },
                millimeter: {
                    kilometer: 0.000001,
                    meter: 0.001,
                    centimeter: 0.1,
                },
            };
    
            if (fromLengthUnit === toLengthUnit) {
                convertedLength = lengthInput;
            } else {
                const conversionFactor = lengthConversionFactors[fromLengthUnit][toLengthUnit];
                if (conversionFactor) {
                    convertedLength = lengthInput * conversionFactor;
                } else {
                    alert('Invalid length conversion.');
                    return;
                }
            }
    
            const resultText = `${convertedLength.toFixed(2)} ${toLengthUnit}`;
            copyLengthResult.addEventListener('click', () => {
                copyTextToClipboard(resultText);
            });
    
            lengthResult.innerHTML = `Converted Length: ${resultText}`;
        });
    
        convertMassButton.addEventListener('click', () => {
            const massInput = parseFloat(document.getElementById('massInput').value);
            const fromMassUnit = document.getElementById('fromMassUnit').value;
            const toMassUnit = document.getElementById('toMassUnit').value;
    
            let convertedMass;
    
            // Mass conversion logic
            const massConversionFactors = {
                kilogram: {
                    gram: 1000,
                    milligram: 1000000,
                },
                gram: {
                    kilogram: 0.001,
                    milligram: 1000,
                },
                milligram: {
                    kilogram: 0.000001,
                    gram: 0.001,
                },
            };
    
            if (fromMassUnit === toMassUnit) {
                convertedMass = massInput;
            } else {
                const conversionFactor = massConversionFactors[fromMassUnit][toMassUnit];
                if (conversionFactor) {
                    convertedMass = massInput * conversionFactor;
                } else {
                    alert('Invalid mass conversion.');
                    return;
                }
            }
    
            const resultText = `${convertedMass.toFixed(2)} ${toMassUnit}`;
            copyMassResult.addEventListener('click', () => {
                copyTextToClipboard(resultText);
            });
    
            massResult.innerHTML = `Converted Mass: ${resultText}`;
        });
    }
    

    function showFlexboxGenerator() {
        screen.innerHTML = `

        <h2 class="h2tools-tile" >Flexbox Generator</h2>

        <div class="fbox-container">

            <div class="fb-top">

                <div class="fb-items1">
                    <label for="flexDirection" class="flexbox-label">Flex Direction:</label>
                    <select id="flexDirection" class="all-input">
                        <option value="row">Row</option>
                        <option value="row-reverse">Row Reverse</option>
                        <option value="column">Column</option>
                        <option value="column-reverse">Column Reverse</option>
                    </select>
                    <br>
                    <label for="justifyContent" class="flexbox-label">Justify Content:</label>
                    <select  id="justifyContent" class="all-input">
                        <option value="flex-start">Flex Start</option>
                        <option value="flex-end">Flex End</option>
                        <option value="center">Center</option>
                        <option value="space-between">Space Between</option>
                        <option value="space-around">Space Around</option>
                    </select>
                </div>

                <div class="fb-items2">
                    <label for="alignItems" class="flexbox-label">Align Items:</label>
                    <select id="alignItems" class="all-input">
                        <option value="flex-start">Flex Start</option>
                        <option value="flex-end">Flex End</option>
                        <option value="center">Center</option>
                        <option value="baseline">Baseline</option>
                        <option value="stretch">Stretch</option>
                    </select>
                    <br>
                    <label for="flexWrap" class="flexbox-label">Flex Wrap:</label>
                    <select id="flexWrap" class="all-input">
                        <option value="nowrap">No Wrap</option>
                        <option value="wrap">Wrap</option>
                        <option value="wrap-reverse">Wrap Reverse</option>
                    </select>
                </div>

            </div>

            <div class="fb-mid">
                <button id="generateFlexbox" class="tools-button">Generate CSS</button>
            </div>   

            <div class="fb-bottom">
                <div class="fb-bottom-left">
                    <pre id="flexboxResult"></pre>
                </div>

                <div class="fb-bottom-right">
                <button id="copyFlexbox" class="tools-button">Copy CSS</button>
                </div>
                
            </div>
            
        </div>
        `;

        const generateFlexbox = document.getElementById('generateFlexbox');
        const flexboxResult = document.getElementById('flexboxResult');
        const copyFlexbox = document.getElementById('copyFlexbox');

        generateFlexbox.addEventListener('click', () => {
            const flexDirection = document.getElementById('flexDirection').value;
            const justifyContent = document.getElementById('justifyContent').value;
            const alignItems = document.getElementById('alignItems').value;
            const flexWrap = document.getElementById('flexWrap').value;

            const cssCode = `
                display: flex;
                flex-direction: ${flexDirection};
                justify-content: ${justifyContent};
                align-items: ${alignItems};
                flex-wrap: ${flexWrap};
            `;

            flexboxResult.textContent = cssCode;
        });

        copyFlexbox.addEventListener('click', () => {
            const textToCopy = flexboxResult.textContent;
            copyTextToClipboard(textToCopy); // Call copyTextToClipboard function
        });

        // Function to copy text to clipboard
        function copyTextToClipboard(text) {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            alert('CSS code copied to clipboard!');
        }
    }


    function showPasswordGenerator() {
        screen.innerHTML = `
            <h2 class="h2tools-tile" >Password Generator</h2>
            <label for="passwordLength" class="tools-label">Password Length:</label>
            <input type="number" id="passwordLength" class="all-input" placeholder="Enter password length">
            <br>
            <label class="tools-label">Character Types:</label>
            <input type="checkbox" id="includeUppercase" checked> Uppercase
            <input type="checkbox" id="includeLowercase" checked> Lowercase
            <input type="checkbox" id="includeNumbers" checked> Numbers
            <input type="checkbox" id="includeSpecialChars" checked> Special Characters
            <br>
            <button id="generatePassword" class="tools-button">Generate Password</button>
            <br>

            <label for="generatedPassword" class="tools-label">Generated Password:</label>

            <div class="genpass-container">

                <div class="genpass-left">
                    <input type="text" class="genpass-result" id="generatedPassword" readonly>
                </div>

                <div class="genpass-right">
                    <button id="copyPassword" class="tools-button">Copy</button>
                <div>
            </div>
        `;

        const generatePassword = document.getElementById('generatePassword');
        const generatedPassword = document.getElementById('generatedPassword');
        const copyPassword = document.getElementById('copyPassword');

        generatePassword.addEventListener('click', () => {
            const passwordLength = parseInt(document.getElementById('passwordLength').value);
            const includeUppercase = document.getElementById('includeUppercase').checked;
            const includeLowercase = document.getElementById('includeLowercase').checked;
            const includeNumbers = document.getElementById('includeNumbers').checked;
            const includeSpecialChars = document.getElementById('includeSpecialChars').checked;

            const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
            const numberChars = '0123456789';
            const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

            let allowedChars = '';

            if (includeUppercase) {
                allowedChars += uppercaseChars;
            }
            if (includeLowercase) {
                allowedChars += lowercaseChars;
            }
            if (includeNumbers) {
                allowedChars += numberChars;
            }
            if (includeSpecialChars) {
                allowedChars += specialChars;
            }

            let password = '';
            const allowedCharsLength = allowedChars.length;

            if (allowedCharsLength === 0) {
                alert('Please select at least one character type.');
                return;
            }

            for (let i = 0; i < passwordLength; i++) {
                const randomIndex = Math.floor(Math.random() * allowedCharsLength);
                password += allowedChars.charAt(randomIndex);
            }

            generatedPassword.value = password;
        });

        copyPassword.addEventListener('click', () => {
            const textToCopy = generatedPassword.value;
            copyTextToClipboard(textToCopy); // Call copyTextToClipboard function
        });

        // Function to copy text to clipboard
        function copyTextToClipboard(text) {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            alert('Password copied to clipboard!');
        }
    }

    converterButton.addEventListener('click', showLengthMassConverter);
    flexboxButton.addEventListener('click', showFlexboxGenerator);
    passwordButton.addEventListener('click', showPasswordGenerator);
});


// ================= for the toggle note button ============

document.addEventListener('DOMContentLoaded', function () {
    // Get the elements
    const toggleNoteButton = document.getElementById('toggleNoteButton');
    const groupSection = document.querySelector('.group-section');

    // Toggle the note section when the button is clicked
    toggleNoteButton.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent the click event from reaching the document

        // Toggle the 'hidden' class to show/hide the note section
        groupSection.classList.toggle('hidden');
    });

    // Hide the note section when you click anywhere else on the screen
    document.addEventListener('click', function (event) {
        // Check if the clicked element is not the button or the note section
        if (event.target !== toggleNoteButton && !groupSection.contains(event.target)) {
            groupSection.classList.add('hidden'); // Hide the note section
        }
    });
});

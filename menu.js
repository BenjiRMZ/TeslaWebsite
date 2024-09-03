/**
 * @file menu.js
 * 
 * This file contains the functionality for toggling the sidebar menu on both desktop and mobile views.
 * The script handles the opening and closing of the sidebar, as well as managing the backdrop's appearance.
 * Additionally, it initializes the AOS (Animate On Scroll) library for animation effects.
 * 
 * @requires Aos - AOS library for scroll animations.
 * 
 * @version 1.0
 * @author BenjiRMZ
 * @license MIT
 */
const menuBtn = document.querySelector('.menu-btn');
const menuBtnMobile = document.querySelector('.menu-btn-mobile');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');
const backdrop = document.querySelector('.sidebar-backdrop');
const navbarMenu = document.querySelector('.navbar-btn');

// Initialize AOS (Animate On Scroll) library
Aos.init();

/**
 * Event listener for opening the sidebar when the menu button is clicked (desktop and mobile).
 * 
 * @function sidebarOpen
 * @param {Event} click - The click event triggered by clicking the menu button.
 * @return {void} - Opens the sidebar and shows the backdrop with a fade-in effect.
 */
menuBtn.addEventListener('click', sidebarOpen);
menuBtnMobile.addEventListener('click', sidebarOpen);

/**
 * Function to open the sidebar and display the backdrop.
 * 
 * @function sidebarOpen
 * @return {void} - Sets the sidebar's position to visible, displays the backdrop, 
 * and applies a fade-in effect. Also adds a class to the body to prevent scrolling.
 */
function sidebarOpen()
{
    sidebar.style.right ="0";// Move the sidebar into view from the right
    backdrop.style.display ="block"; // Display the backdrop

    setTimeout(() =>
    {
        backdrop.style.opacity ="1";
    }, 50);
    // Add a class to the body to prevent scrolling when the sidebar is open
    document.body.classList.add('sidebar-open-body');
}

/**
 * Event listener for closing the sidebar when the close button is clicked.
 * 
 * @function closeSidebar
 * @param {Event} click - The click event triggered by clicking the close button.
 * @return {void} - Closes the sidebar and hides the backdrop with a fade-out effect.
 */
closeBtn.addEventListener('click', () =>{
    sidebar.style.right = "-20em";// Move the sidebar out of view to the right
    backdrop.style.opacity = "0";// Fade out the backdrop

    // Add a slight delay before hiding the backdrop completely
    setTimeout(() =>
    {
        backdrop.style.display = "none";
    }, 300);
    // Removes the class from the body to allow scrolling again
    document.body.classList.remove('sidebar-open-body');
});

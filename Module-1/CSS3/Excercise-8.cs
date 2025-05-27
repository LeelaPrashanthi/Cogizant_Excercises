// 8. Box Model & Layout Control

/* Add spacing and border around event cards */
.eventCard {
  border: 2px solid #aaa;      /* Thicker border */
  padding: 20px;               /* Inner spacing */
  margin: 20px;                /* Outer spacing */
}

/* Add outline to form fields when selected */
input:focus, textarea:focus {
  outline: 2px solid #007BFF;  /* Blue outline on focus */
}

/* Example element that's hidden but still occupies space */
.hiddenElement {
  visibility: hidden;          /* Invisible but space is preserved */
}

/* Example element removed from layout */
.displayNone {
  display: none;               /* Hidden and no space taken */
}

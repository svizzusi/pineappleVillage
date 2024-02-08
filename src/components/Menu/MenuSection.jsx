import style from './Menu.module.css';

const Menu = () => {
  return (
    <section className={style.menuSection}>
      <h1 className={style.menuSectionHeading}>Menu</h1>
      <section className={style.menuSectionTextContainerParent}>
        <div className={style.menuSectionTextContainer}>
          <section className={style.menuSectionCard}>
            <div className={style.menuSectionItemContainer}>
              <h2 className={style.menuSectionSubHeading}>APPETIZERS</h2>
              <h3>Complimentary Chips and Salsa (Additional baskets $2.00)</h3>
              <div className={style.menuItemContainer}>
                <span>NACHOS</span>
                <span>$14.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Chips layered with cheese, beans, and topped with sour cream, guacamole & tomatoes</p>
                <p>Chicken or Beef add $2.00</p>
                <p>{"Linda's style topped w/ enchilada sauce add $2.00"}</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>GUACAMOLE DIP</span>
                <span>$9.75</span>
              </div>
              <div className={style.menuItemContainer}>
                <span>{'CHEESY "n" SAUCY BEAN DIP'}</span>
                <span>$10.75</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Topped with toasted jalapenos</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>Complimentary Chips & Salsa</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Additional Baskets $2.00</p>
              </div>
            </div>

            <div className={style.menuSectionItemContainer}>
              <h2 className={style.menuSectionSubHeading}>SPECIALTY COMBINATIONS</h2>
              <h3>(Served with soup or salad)</h3>
              <div className={style.menuItemContainer}>
                <span>Beef or Chicken FAJITAS</span>
                <span>$25.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Grilled steak or chicken in garlic, onions & bell peppers</p>
                <p>Served with guac, sour cream & your choice of flour or corn tortillas</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>Combo CHICKEN and BEEF</span>
                <span>$27.95</span>
              </div>
              <div className={style.menuItemContainer}>
                <span>SHRIMP FAJITAS</span>
                <span>$27.95</span>
              </div>
              <div className={style.menuItemContainer}>
                <span>Combo CHICKEN/BEEF/SHRIMP</span>
                <span>$29.95</span>
              </div>
              <div className={style.menuItemContainer}>
                <span>CAMARONES</span>
                <span>$26.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Shrimp sauteed in garlic, onions, tomatoes & cilantro</p>
                <p>Served in a special sauce with Flour or Corn Tortillas</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>GILROY GARLIC SHRIMP</span>
                <span>$26.95</span>
              </div>
              <div className={style.menuItemContainer}>
                <span>{"VICTORIA'S FIESTA COMBO"}</span>
                <span>$27.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>One chile relleno, cheese enchilada, beef taco & chile verde burrito</p>
              </div>
            </div>

            <div className={style.menuSectionItemContainer}>
              <h2 className={style.menuSectionSubHeading}>FAMILY FAVORITES</h2>
              <div className={style.menuItemContainer}>
                <span>{"DONALD ELVIS' FAVORITE"}</span>
                <span>$15.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>2 Soft chicken tacos</p>
                <p>Served with rice and beans</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>{"PATRICIA'S SALAD"}</span>
                <span>$14.50</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Shredded chicken, cilantro, onions, & whole beans</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>{"MICHAEL'S FAVORITE"}</span>
                <span>$16.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>2 Chicken Enchiladas</p>
                <p>Topped with green sauce, cheese, guacamole & jalapenos</p>
                <p>Served with rice and beans</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>{"LAUREN'S GRILLED CHICKEN SALAD"}</span>
                <span>$15.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Grilled chicken salad on a bed of lettuce</p>
                <p>Whole beans, cheese, tomato & avocado</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>{"PRESLEY'S FAVORITE"}</span>
                <span>$23.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>(Thursday-Satuday only)</p>
                <p>Tilapia, shrimp, and rice</p>
                <p>Toped with cheese, wrapped in foil</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>{"JOHN PERALES' SALAD"}</span>
                <span>$22.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Grilled prawns, grilled chicken and special sauce</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>{"ERNESTO'S SEAFOOD TACO PLATTER"}</span>
                <span>$18.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>2 Shrimp, tilapia or salmon tacos</p>
                <p>Served with rice and beans</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>{"CARMEN'S FAVORITE"}</span>
                <span>$14.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>3 Street soft tacos</p>
                <p>Served with cilantro, onions and special sauce</p>
                <p>Served with rice and beans</p>
              </div>
            </div>

            <div className={style.menuSectionItemContainer}>
              <h2 className={style.menuSectionSubHeading}>MAIN DISHES</h2>
              <div className={style.menuItemContainer}>
                <span>TACO SALAD</span>
                <span>$16.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Tortilla bowl (Grilled beef, shredded beef or chicken)</p>
                <p>Topped with cheese, sour cream & guacomole</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>FAJITA SALAD</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Beef or chicken $16.95</p>
                <p>Shrimp $18.95</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>TOSTADAS</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Ground beef, shredded beef or chicken, carnitas or carne asada $14.95</p>
                <p>Bean and cheese $12.95</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>QUESADILLAS</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Cheese $11.95</p>
                <p>Chicken, beef, chile verde, or carnitas $14.95</p>
                <p>Served with sour cream and guacamole</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>BURRITOS</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Chile verde, chile colorado, carnitas, carne asada or chicken $13.95</p>
                <p>Bean & cheese $9.95</p>
                <p>Veggie (Rice, beans, sour cream, guacamole, lettuce) $11.95</p>
                <p>Topped with sauce and cheese add $3.50</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>BREAKFAST SERVED ALL DAY</span>
                <span>$16.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Huevos rancheros, chorizo, or machaca & tortillas</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>MENUDO (Friday & Satuday only)</span>
                <span>$17.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Choice of flour or corn tortillas... fixings by request only</p>
              </div>
            </div>
          </section>

          <section className={style.menuSectionCard}>
            <div className={style.menuSectionItemContainer}>
              <h2 className={style.menuSectionSubHeading}>COMBINATIONS</h2>
              <h3>Served with rice & beans. (For an additional $3.00 add soup or salad)</h3>
              <div className={style.menuItemContainer}>
                <span>1. ONE TACO</span>
                <span>$14.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>(ground beef, shredded beef or chicken)</p>
                <p>(add $2.00 for Carne asada)</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>2. ONE CHOICE OF ENCHILADA, CHILE RELLENO OR TAMALE</span>
                <span>$14.95</span>
              </div>
              <div className={style.menuItemContainer}>
                <span>3. ONE BEAN AND CHEESE BURRITO</span>
                <span>$14.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>(Add $2.00 for meat)</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>4. ONE TOSTADA</span>
                <span>$14.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>(ground beef, shedded beef or chicken)</p>
                <p>(Add $1.75 for Carne asada)</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>5. ONE CHEESE ENCHILADA & ONE GROUND BEEF TACO</span>
                <span>$17.95</span>
              </div>
              <div className={style.menuItemContainer}>
                <span>6. ONE CHILE VERDE BURRITO & ONE CHILE RELLENO</span>
                <span>$18.95</span>
              </div>
              <div className={style.menuItemContainer}>
                <span>7. TWO ENCHILADAS</span>
                <span>$17.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>(cheese, ground beef, shredded beef or chicken)</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>8. ONE CHILE RELLENO & ONE ENCHILADA</span>
                <span>$18.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>(cheese, ground beef, shredded beef or chicken)</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>9. THREE FLAUTAS</span>
                <span>$17.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>(shredded beef or chicken, topped with sour cream & guac)</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>10. ONE TAMALE, ONE CHILI RELLENO & ONE CHEESE ENCHILADA</span>
                <span>$19.95</span>
              </div>
              <div className={style.menuItemContainer}>
                <span>11. ONE CHEESE ENCHILADA & ONE CHILI VERDE BURRITO</span>
                <span>$17.95</span>
              </div>
              <div className={style.menuItemContainer}>
                <span>12. CHILE VERDE</span>
                <span>$18.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>(Served with tortillas)</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>13. CHILE COLORADO</span>
                <span>$18.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>(Served with tortillas)</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>14. STEAK RANCHERO</span>
                <span>$18.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>(Served with tortillas)</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>15. TWO TACOS</span>
                <span>$16.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>(Ground beef, shredded beef or chicken (soft or crispy))</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>16. CARNE ASADA</span>
                <span>$18.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>(Served with tortillas)</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>17. CARNITAS</span>
                <span>$18.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>(Served with tortillas)</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>18. CHIMICHANGA</span>
                <span>$18.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>(Chicken, shredded beef, or chile verde)</p>
                <p>(Topped with sour cream & guac)</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>19. ONE CHILE RELLENO & ONE TACO</span>
                <span>$18.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>(Beef or chicken)</p>
              </div>
            </div>

            <div className={style.menuSectionItemContainer}>
              <h2 className={style.menuSectionSubHeading}>{"CHILDREN'S PLATTER"}</h2>
              <h3>(12 & under only)</h3>
              <h3>$8.95</h3>
              <div className={style.menuItemContainer}>
                <span>Choice of one of the following:</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Choice of Taco, Bean & cheese burrito, Cheese Enchilada or Cheese quesadilla </p>
              </div>
            </div>

            <div className={style.menuSectionItemContainer}>
              <h2 className={style.menuSectionSubHeading}>A LA CARTE</h2>
              <div className={style.menuItemDescriptionContainer}>
                <p className={style.menuItemALaCarte}>TAMALE OR CHILE RELLENO $6.75</p>
                <p className={style.menuItemALaCarte}>THREE FLUATAS $11.95</p>
                <p className={style.menuItemALaCarte}>CHIMICHANGA $14.95</p>
                <p className={style.menuItemALaCarte}>TORTILLAS $2.25</p>
                <p className={style.menuItemALaCarte}>GREEN SALAD $7.50</p>
                <p className={style.menuItemALaCarte}>SOUP CUP $6.50</p>
                <p className={style.menuItemALaCarte}>SOUP BOWL $10.25</p>
                <p className={style.menuItemALaCarte}>BAG OF CHIPS (TO GO) $6.00</p>
                <p className={style.menuItemALaCarte}>SALSA (TO GO) $7.50</p>
                <p className={style.menuItemALaCarte}>SOUP TO GO 16OZ $10.95</p>
                <p className={style.menuItemALaCarte}>SIDE CHEESE $2.50</p>
                <p className={style.menuItemALaCarte}>SIDE OF SOUR CREAM $2.00</p>
                <p className={style.menuItemALaCarte}>SIDE OF JALAPENOS $1.25</p>
              </div>
            </div>

            <div className={style.menuSectionItemContainer}>
              <h2 className={style.menuSectionSubHeading}>BEVERAGES</h2>
              <div className={style.menuItemContainer}>
                <span>DRINKS</span>
                <span>$3.00</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Coke, Diet Coke, Sprite, Lemonade, Root Beer, Ice Tea, Milk, Coffee</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>WINE</span>
                <span>$9.50</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Red or White</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>DOMESTIC BEER</span>
                <span>$4.75</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Coors Light, Bud Light</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>IMPORTED BEER</span>
                <span>$5.25</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Corona, Corona Light, Tecate, Pacifico, Dos Equis, Negro Modello, Modello Especial, Victoria</p>
              </div>
            </div>

            <div className={style.menuSectionItemContainer}>
              <h2 className={style.menuSectionSubHeading}>{"VICTORIA'S TEQUILA MARGARITA'S"}</h2>
              <div className={style.menuItemContainer}>
                <span>BLENDED OR ROCKS MARGARITA</span>
                <span>$12.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Top shelf add $3.50</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>BLENDED OR ROCKS MARGARITA PITCHER</span>
                <span>$42.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Top shelf add $9.00</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>BLENDED FLAVORED MARGARITA</span>
                <span>$13.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Top shelf add $3.50</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>BLENDED FLAVORED MARGARITA PITCHER</span>
                <span>$43.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Top shelf add $9.00</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </section>
  )
};

export default Menu;

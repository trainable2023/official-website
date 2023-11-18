parentIsChecked = false;

function setLineThrough(checkbox) {
    let span = checkbox.nextElementSibling.nextElementSibling; // Get the label element

    if (checkbox.checked) {
        span.classList.add("line-through-label"); // Remove the line-through class from the label

    } else {
        span.classList.remove("line-through-label"); // Remove the line-through class from the label

    }
}

function getContainer(checkbox) {
    parent = checkbox.parentNode;
    while (parent.getAttribute('class') !== 'collapse-container') {
        parent = parent.parentNode;
        // console.log(parent.getAttribute('class'));
    }
    return parent;

}

function markCheckbox(checkbox) {
    // console.log(getContainer(checkbox));
    let list = checkbox.parentNode.parentNode;
    let collapseHeading = list.parentNode;
    let collapseContent = collapseHeading.nextElementSibling;
    isChild = checkbox.getAttribute('data') == "child";
    if (isChild) {
        setLineThrough(checkbox);
    }
    isParent = checkbox.getAttribute('data') == "parent";

    if (isParent) {
        parentIsChecked = checkbox.checked == true;
        if (parentIsChecked) {
            collapseContainer = getContainer(checkbox);
            inputs = collapseContainer.querySelectorAll('input');
            inputs.forEach(function(input) {
                input.checked = true;
                setLineThrough(input);
            });

        } else {
            collapseContainer = getContainer(checkbox);
            inputs = collapseContainer.querySelectorAll('input');
            inputs.forEach(function(input) {
                input.checked = false;
                setLineThrough(input);
            });

        }

    }

    /*
        //console.log(list);
        if (iAmOrigin) {

            //console.log('origin!');

            iAmParent = list.getAttribute('class') == 'list-parent';
            if (iAmParent) { // I am origin and I and a parent
                //console.log('parent!');
                iAmChecked = checkbox.value == true;
                if (iAmChecked) { // I am origin and I and a parent and I am checked

                    //console.log('checked!');
                    checkbox.checked = false;
                    span.classList.remove("line-through-label"); // Remove the line-through class from the label

                } else { // I am origin and I and a parent but I am not checked
                    //console.log('not checked!');
                    checkbox.checked = true;
                    span.classList.add("line-through-label"); // Remove the line-through class from the label
                }

                let childCheckbox = collapseHeading.querySelector('label > input');
                //console.log(childCheckbox);
                let iAmNotOrigin = false;
                //console.log('---------------------');
                markCheckbox(childCheckbox, iAmNotOrigin);

            } else { // I am origin but not a parent
                //console.log('not a parent!');
                iAmChecked = checkbox.value == false;
                if (iAmChecked) { // I am originbut not a parent and I am checked
                    //console.log('checked!');
                    checkbox.checked = false;
                    span.classList.remove("line-through-label"); // Remove the line-through class from the label

                } else { // I am origin but not a parent and I am not checked
                    //console.log('not checked!');
                    //console.log('---------------------');
                    checkbox.checked = true;
                    span.classList.add("line-through-label"); // Remove the line-through class from the label
                }

            }
        } else { // I am not origin
            //console.log('not origin!');
            iAmParent = list.getAttribute('class') == 'list-parent';
            if (iAmParent) { // I am not origin but I am a parent
                //console.log('parent!');
                myParentIsChecked = collapseHeading.querySelector("label > input").value == true;
                if (myParentIsChecked) { /// I am not origin but I am a parent and my parent is checked
                    //console.log('parent is checked!');

                    checkbox.checked = true;
                    span.classList.add("line-through-label"); // Remove the line-through class from the label

                } else { /// I am not origin but I am a parent and my parent is unchecked
                    //console.log(collapseHeading.parentNode.querySelector("label > input"));
                    //console.log('parent is not checked!');
                    //console.log(checkbox);

                    checkbox.checked = false;
                    span.classList.remove("line-through-label"); // Remove the line-through class from the label

                }


                let childCheckbox = collapseContent.querySelector('label > input');
                //console.log(childCheckbox);
                let iAmNotOrigin = false;
                //console.log('---------------------');
                markCheckbox(childCheckbox, iAmNotOrigin);

            } else { // I am not origin and I am not a parent
                //console.log('not a parent!');
                collapseHeading = collapseHeading.previousElementSibling;
                myParentIsChecked = collapseHeading.querySelector("label > input").value == true;
                //console.log(collapseHeading.querySelector("label > input"));
                if (myParentIsChecked) { /// I am not origin but I am a parent and my parent is checked
                    //console.log('parent is checked!');
                    checkbox.checked = true;
                    span.classList.add("line-through-label"); // Remove the line-through class from the label
                    let lists = list.parentNode.querySelectorAll('.list');
                    lists.forEach(function(list) {
                        //console.log('brother is not checked!');
                        checkbox = list.querySelector('input');
                        span = checkbox.nextElementSibling.nextElementSibling; // Get the label element
                        checkbox.checked = true;
                        span.classList.add("line-through-label"); // Remove the line-through class from the label

                    });
                } else { /// I am not origin but I am a parent and my parent is unchecked
                    //console.log('parent is not checked!');
                    checkbox.checked = false;
                    span.classList.remove("line-through-label"); // Remove the line-through class from the label
                    let lists = list.parentNode.parentNode.querySelectorAll('.list');
                    //console.log(lists);
                    lists.forEach(function(list) {
                        //console.log('brother is checked!');
                        checkbox = list.querySelector('input');
                        span = checkbox.nextElementSibling.nextElementSibling; // Get the label element
                        checkbox.checked = false;
                        span.classList.remove("line-through-label"); // Remove the line-through class from the label

                    });
                }



            }

        }
    */
}

function toggleCollapse(collapseHeading) {

    let collapseContent = collapseHeading.nextElementSibling;
    collapseContent.classList.toggle("collapsed");
    collapseHeading.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener("change", function() {
            // console.log(this);
            if (this.value) {
                this.value = "true";
            } else {
                this.value = "false";
            }
            markCheckbox(this, true);
        });
    });
    let collapseDivs = document.querySelectorAll('.collapse-heading');
    collapseDivs.forEach(function(collapseDiv) {
        collapseDiv.addEventListener("click", function() {

            toggleCollapse(this);
        });
    });
    /* TODO:

        1. fix toggle function
        2. add mark checkbox the ability of mark children
        3. build id systematic for accordion
    */
});
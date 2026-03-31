/**
 * Bootstrap 2/3 to Bootstrap 5 Compatibility Shim
 * Maps old data attributes to BS5 equivalents at runtime
 */
$(document).ready(function() {
    // Map old data-toggle to data-bs-toggle
    $('[data-toggle]').each(function() {
        if (!$(this).attr('data-bs-toggle')) {
            $(this).attr('data-bs-toggle', $(this).attr('data-toggle'));
        }
    });

    // Map old data-dismiss to data-bs-dismiss
    $('[data-dismiss]').each(function() {
        if (!$(this).attr('data-bs-dismiss')) {
            $(this).attr('data-bs-dismiss', $(this).attr('data-dismiss'));
        }
    });

    // Map old data-target to data-bs-target
    $('[data-target]').each(function() {
        if (!$(this).attr('data-bs-target')) {
            $(this).attr('data-bs-target', $(this).attr('data-target'));
        }
    });

    // Map old data-parent to data-bs-parent
    $('[data-parent]').each(function() {
        if (!$(this).attr('data-bs-parent')) {
            $(this).attr('data-bs-parent', $(this).attr('data-parent'));
        }
    });

    // Initialize BS5 tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Initialize BS5 popovers
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"], [rel="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
});

<script>

jQuery(document).ready(function () {
    // Get the current date and time in the correct format
    const now = new Date();
    const formattedDate = now.toISOString().slice(0, 16); // YYYY-MM-DDTHH:mm format

    // Set the min attribute to disable past dates ( add a custom class that will be e good approach )
    jQuery('#date_time').attr('min', formattedDate);
});

</script>

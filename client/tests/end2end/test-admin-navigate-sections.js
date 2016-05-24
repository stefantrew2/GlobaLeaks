describe('verify navigation of admin sections', function() {
  // Even if not performing real checks this test at least verify to be able to perform the
  // navigation of the admin section without triggering any exception

  it('should should navigate through admin sections', function(done) {
    element(by.cssContainingText("a", "General settings")).click().then(function() {
      element(by.cssContainingText("a", "Main configuration")).click();
      element(by.cssContainingText("a", "Theme customization")).click();
      element(by.cssContainingText("a", "Translation customization")).click();
    });

    element(by.cssContainingText("a", "User management")).click();
    element(by.cssContainingText("a", "Recipient configuration")).click();
    element(by.cssContainingText("a", "Context configuration")).click();
    element(by.cssContainingText("a", "Questionnaire configuration")).click();

    element(by.cssContainingText("a", "Notification settings")).click().then(function() {
      element(by.cssContainingText("a", "Main configuration")).click();
      element(by.cssContainingText("a", "Admin notification templates")).click();
      element(by.cssContainingText("a", "Recipient notification templates")).click();
      element(by.cssContainingText("a", "Exception notification")).click();
    });

    element(by.cssContainingText("a", "URL shortener")).click();

    element(by.cssContainingText("a", "Advanced settings")).click().then(function() {
      element(by.cssContainingText("a", "Main configuration")).click();
      element(by.cssContainingText("a", "HTTPS settings")).click();
      element(by.cssContainingText("a", "Anomaly detection thresholds")).click();
    });

    element(by.cssContainingText("a", "Recent activities")).click();
    element(by.cssContainingText("a", "System stats")).click();
    element(by.cssContainingText("a", "Anomalies")).click();
    element(by.cssContainingText("a", "User overview")).click();
    element(by.cssContainingText("a", "Submission overview")).click();
    element(by.cssContainingText("a", "File overview")).click();

    done();
  });
});
/// Sets a closure that is invoked to compare the current version and the latest version returned by the updater server.
/// The first argument is the current version, and the second one is the latest version.
///
/// The closure must return `true` if the update should be installed.
///
/// # Examples
///
/// - Always install the version returned by the server:
///
/// ```no_run
/// tauri::Builder::default()
///   .setup(|app| {
///     tauri::updater::builder(app.handle()).should_install(|_current, _latest| true);
///     Ok(())
///   });
/// ```
pub fn should_install<F: FnOnce(&Version, &RemoteRelease) -> bool + Send + 'static>(
    mut self,
    f: F,
) -> Self {
    self.inner = self.inner.should_install(f);
    self
}

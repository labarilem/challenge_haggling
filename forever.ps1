param (
  [Parameter(Mandatory=$true)][string]$script
 )

for(;;) {
 try {
  # invoke the worker script
  npm run $script
 }
 catch {
  # do something with $_, log it, more likely
 }

 # wait for a minute
 # Start-Sleep 60
}
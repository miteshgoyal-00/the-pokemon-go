# Git Command Reference

This file is a handy reference for various Git commands. It helps in remembering useful Git commands for future use. I wrote this content mainly for my own reference.

## Display Commit History

To display the commit history in a compact format, use the following command:

```sh
git log --oneline
```

## Reset Current Branch

To reset the current branch to a specified commit and discard all changes, use:

```sh
git reset --hard <commit-hash>
```

## Force Push to Remote Repository

To force push the current branch to the remote repository, overwriting history, use:

```sh
git push origin HEAD --force
```

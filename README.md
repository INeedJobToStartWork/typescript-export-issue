# Problem 
TS Error at `@packages/test-package-1` (./packages/test-package-2/src/functions/myFunction)

```
Module '"@packages/test-package-1"' has no exported member 'myFunction'
```


## Context
`test-package-2` use `myFunction` from `test-package-1` <br/><br/>

## Observations
When `test-package-1` export it as:
- `*` - Is not working, `test-package-2` do not see any export from this package
- `{myFunction}` - Is working everything, but have to use that "detailed" export
- `* as fun` - Is working everything, but have to use that "selection/wrapper/variable" export


## FAQ
### It's working for me.
- Check if it's true - If you have `dist` dir at `test-package-1` there is no problem because `turborepo` is copy that to `node_modules/@packages/test-package-2` instead using symlink, so delete that.

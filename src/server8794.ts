
const express = require('express')
import {handler8794} from "./handler8794";
const app = express()
app.get('/8794', handler8794)
app.listen(3000, () => {})
        
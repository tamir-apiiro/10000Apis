
const express = require('express')
import {handler1794} from "./handler1794";
const app = express()
app.get('/1794', handler1794)
app.listen(3000, () => {})
        
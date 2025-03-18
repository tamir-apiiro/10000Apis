
const express = require('express')
import {handler794} from "./handler794";
const app = express()
app.get('/794', handler794)
app.listen(3000, () => {})
        
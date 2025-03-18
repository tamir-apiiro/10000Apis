
const express = require('express')
import {handler7794} from "./handler7794";
const app = express()
app.get('/7794', handler7794)
app.listen(3000, () => {})
        
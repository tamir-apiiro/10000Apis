
const express = require('express')
import {handler3794} from "./handler3794";
const app = express()
app.get('/3794', handler3794)
app.listen(3000, () => {})
        
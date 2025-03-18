
const express = require('express')
import {handler7789} from "./handler7789";
const app = express()
app.get('/7789', handler7789)
app.listen(3000, () => {})
        
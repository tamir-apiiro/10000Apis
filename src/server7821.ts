
const express = require('express')
import {handler7821} from "./handler7821";
const app = express()
app.get('/7821', handler7821)
app.listen(3000, () => {})
        
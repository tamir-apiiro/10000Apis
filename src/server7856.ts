
const express = require('express')
import {handler7856} from "./handler7856";
const app = express()
app.get('/7856', handler7856)
app.listen(3000, () => {})
        
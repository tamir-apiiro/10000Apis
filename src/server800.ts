
const express = require('express')
import {handler800} from "./handler800";
const app = express()
app.get('/800', handler800)
app.listen(3000, () => {})
        
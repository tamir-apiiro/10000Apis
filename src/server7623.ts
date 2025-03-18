
const express = require('express')
import {handler7623} from "./handler7623";
const app = express()
app.get('/7623', handler7623)
app.listen(3000, () => {})
        
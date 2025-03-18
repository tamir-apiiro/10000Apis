
const express = require('express')
import {handler7509} from "./handler7509";
const app = express()
app.get('/7509', handler7509)
app.listen(3000, () => {})
        
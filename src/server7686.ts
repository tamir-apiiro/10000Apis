
const express = require('express')
import {handler7686} from "./handler7686";
const app = express()
app.get('/7686', handler7686)
app.listen(3000, () => {})
        
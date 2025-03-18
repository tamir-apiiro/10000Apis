
const express = require('express')
import {handler7118} from "./handler7118";
const app = express()
app.get('/7118', handler7118)
app.listen(3000, () => {})
        
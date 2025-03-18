
const express = require('express')
import {handler7172} from "./handler7172";
const app = express()
app.get('/7172', handler7172)
app.listen(3000, () => {})
        
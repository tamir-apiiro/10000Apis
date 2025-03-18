
const express = require('express')
import {handler7507} from "./handler7507";
const app = express()
app.get('/7507', handler7507)
app.listen(3000, () => {})
        
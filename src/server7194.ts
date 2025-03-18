
const express = require('express')
import {handler7194} from "./handler7194";
const app = express()
app.get('/7194', handler7194)
app.listen(3000, () => {})
        

const express = require('express')
import {handler7643} from "./handler7643";
const app = express()
app.get('/7643', handler7643)
app.listen(3000, () => {})
        
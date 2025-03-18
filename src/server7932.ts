
const express = require('express')
import {handler7932} from "./handler7932";
const app = express()
app.get('/7932', handler7932)
app.listen(3000, () => {})
        
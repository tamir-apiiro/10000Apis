
const express = require('express')
import {handler944} from "./handler944";
const app = express()
app.get('/944', handler944)
app.listen(3000, () => {})
        
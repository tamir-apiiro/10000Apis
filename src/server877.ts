
const express = require('express')
import {handler877} from "./handler877";
const app = express()
app.get('/877', handler877)
app.listen(3000, () => {})
        
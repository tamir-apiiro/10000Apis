
const express = require('express')
import {handler994} from "./handler994";
const app = express()
app.get('/994', handler994)
app.listen(3000, () => {})
        
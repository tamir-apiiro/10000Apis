
const express = require('express')
import {handler3597} from "./handler3597";
const app = express()
app.get('/3597', handler3597)
app.listen(3000, () => {})
        
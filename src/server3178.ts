
const express = require('express')
import {handler3178} from "./handler3178";
const app = express()
app.get('/3178', handler3178)
app.listen(3000, () => {})
        

const express = require('express')
import {handler3282} from "./handler3282";
const app = express()
app.get('/3282', handler3282)
app.listen(3000, () => {})
        
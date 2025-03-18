
const express = require('express')
import {handler3871} from "./handler3871";
const app = express()
app.get('/3871', handler3871)
app.listen(3000, () => {})
        
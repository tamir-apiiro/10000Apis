
const express = require('express')
import {handler3350} from "./handler3350";
const app = express()
app.get('/3350', handler3350)
app.listen(3000, () => {})
        
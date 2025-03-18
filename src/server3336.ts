
const express = require('express')
import {handler3336} from "./handler3336";
const app = express()
app.get('/3336', handler3336)
app.listen(3000, () => {})
        
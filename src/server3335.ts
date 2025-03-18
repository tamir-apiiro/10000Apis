
const express = require('express')
import {handler3335} from "./handler3335";
const app = express()
app.get('/3335', handler3335)
app.listen(3000, () => {})
        
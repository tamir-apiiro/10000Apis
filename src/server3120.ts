
const express = require('express')
import {handler3120} from "./handler3120";
const app = express()
app.get('/3120', handler3120)
app.listen(3000, () => {})
        
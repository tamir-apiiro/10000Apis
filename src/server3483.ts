
const express = require('express')
import {handler3483} from "./handler3483";
const app = express()
app.get('/3483', handler3483)
app.listen(3000, () => {})
        

const express = require('express')
import {handler3326} from "./handler3326";
const app = express()
app.get('/3326', handler3326)
app.listen(3000, () => {})
        
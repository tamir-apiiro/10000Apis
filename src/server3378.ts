
const express = require('express')
import {handler3378} from "./handler3378";
const app = express()
app.get('/3378', handler3378)
app.listen(3000, () => {})
        
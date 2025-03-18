
const express = require('express')
import {handler3770} from "./handler3770";
const app = express()
app.get('/3770', handler3770)
app.listen(3000, () => {})
        
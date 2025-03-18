
const express = require('express')
import {handler3517} from "./handler3517";
const app = express()
app.get('/3517', handler3517)
app.listen(3000, () => {})
        
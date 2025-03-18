
const express = require('express')
import {handler3019} from "./handler3019";
const app = express()
app.get('/3019', handler3019)
app.listen(3000, () => {})
        
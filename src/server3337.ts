
const express = require('express')
import {handler3337} from "./handler3337";
const app = express()
app.get('/3337', handler3337)
app.listen(3000, () => {})
        
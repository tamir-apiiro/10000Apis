
const express = require('express')
import {handler3969} from "./handler3969";
const app = express()
app.get('/3969', handler3969)
app.listen(3000, () => {})
        
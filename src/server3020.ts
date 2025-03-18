
const express = require('express')
import {handler3020} from "./handler3020";
const app = express()
app.get('/3020', handler3020)
app.listen(3000, () => {})
        
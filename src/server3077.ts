
const express = require('express')
import {handler3077} from "./handler3077";
const app = express()
app.get('/3077', handler3077)
app.listen(3000, () => {})
        
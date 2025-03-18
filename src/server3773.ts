
const express = require('express')
import {handler3773} from "./handler3773";
const app = express()
app.get('/3773', handler3773)
app.listen(3000, () => {})
        
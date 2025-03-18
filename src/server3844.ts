
const express = require('express')
import {handler3844} from "./handler3844";
const app = express()
app.get('/3844', handler3844)
app.listen(3000, () => {})
        
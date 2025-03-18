
const express = require('express')
import {handler3503} from "./handler3503";
const app = express()
app.get('/3503', handler3503)
app.listen(3000, () => {})
        
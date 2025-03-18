
const express = require('express')
import {handler3232} from "./handler3232";
const app = express()
app.get('/3232', handler3232)
app.listen(3000, () => {})
        
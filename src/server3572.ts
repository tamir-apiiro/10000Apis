
const express = require('express')
import {handler3572} from "./handler3572";
const app = express()
app.get('/3572', handler3572)
app.listen(3000, () => {})
        

const express = require('express')
import {handler3362} from "./handler3362";
const app = express()
app.get('/3362', handler3362)
app.listen(3000, () => {})
        
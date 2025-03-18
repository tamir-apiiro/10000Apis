
const express = require('express')
import {handler3599} from "./handler3599";
const app = express()
app.get('/3599', handler3599)
app.listen(3000, () => {})
        

const express = require('express')
import {handler3619} from "./handler3619";
const app = express()
app.get('/3619', handler3619)
app.listen(3000, () => {})
        
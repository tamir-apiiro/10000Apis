
const express = require('express')
import {handler3126} from "./handler3126";
const app = express()
app.get('/3126', handler3126)
app.listen(3000, () => {})
        
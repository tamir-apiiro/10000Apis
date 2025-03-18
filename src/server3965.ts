
const express = require('express')
import {handler3965} from "./handler3965";
const app = express()
app.get('/3965', handler3965)
app.listen(3000, () => {})
        
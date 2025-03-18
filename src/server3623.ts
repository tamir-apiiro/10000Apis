
const express = require('express')
import {handler3623} from "./handler3623";
const app = express()
app.get('/3623', handler3623)
app.listen(3000, () => {})
        
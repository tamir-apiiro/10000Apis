
const express = require('express')
import {handler3403} from "./handler3403";
const app = express()
app.get('/3403', handler3403)
app.listen(3000, () => {})
        
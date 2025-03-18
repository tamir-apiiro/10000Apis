
const express = require('express')
import {handler3220} from "./handler3220";
const app = express()
app.get('/3220', handler3220)
app.listen(3000, () => {})
        
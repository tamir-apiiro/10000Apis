
const express = require('express')
import {handler3213} from "./handler3213";
const app = express()
app.get('/3213', handler3213)
app.listen(3000, () => {})
        
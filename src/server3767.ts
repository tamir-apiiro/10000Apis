
const express = require('express')
import {handler3767} from "./handler3767";
const app = express()
app.get('/3767', handler3767)
app.listen(3000, () => {})
        
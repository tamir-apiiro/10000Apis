
const express = require('express')
import {handler3617} from "./handler3617";
const app = express()
app.get('/3617', handler3617)
app.listen(3000, () => {})
        
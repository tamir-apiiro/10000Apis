
const express = require('express')
import {handler3592} from "./handler3592";
const app = express()
app.get('/3592', handler3592)
app.listen(3000, () => {})
        
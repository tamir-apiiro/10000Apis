
const express = require('express')
import {handler3611} from "./handler3611";
const app = express()
app.get('/3611', handler3611)
app.listen(3000, () => {})
        
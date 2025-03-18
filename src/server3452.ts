
const express = require('express')
import {handler3452} from "./handler3452";
const app = express()
app.get('/3452', handler3452)
app.listen(3000, () => {})
        
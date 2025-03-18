
const express = require('express')
import {handler3801} from "./handler3801";
const app = express()
app.get('/3801', handler3801)
app.listen(3000, () => {})
        
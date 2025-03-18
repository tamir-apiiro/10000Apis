
const express = require('express')
import {handler3760} from "./handler3760";
const app = express()
app.get('/3760', handler3760)
app.listen(3000, () => {})
        
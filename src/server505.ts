
const express = require('express')
import {handler505} from "./handler505";
const app = express()
app.get('/505', handler505)
app.listen(3000, () => {})
        
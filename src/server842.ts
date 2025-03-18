
const express = require('express')
import {handler842} from "./handler842";
const app = express()
app.get('/842', handler842)
app.listen(3000, () => {})
        
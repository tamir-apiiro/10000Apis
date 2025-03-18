
const express = require('express')
import {handler4186} from "./handler4186";
const app = express()
app.get('/4186', handler4186)
app.listen(3000, () => {})
        
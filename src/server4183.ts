
const express = require('express')
import {handler4183} from "./handler4183";
const app = express()
app.get('/4183', handler4183)
app.listen(3000, () => {})
        
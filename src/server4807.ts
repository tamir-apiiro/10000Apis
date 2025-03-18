
const express = require('express')
import {handler4807} from "./handler4807";
const app = express()
app.get('/4807', handler4807)
app.listen(3000, () => {})
        
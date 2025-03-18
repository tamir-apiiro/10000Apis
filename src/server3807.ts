
const express = require('express')
import {handler3807} from "./handler3807";
const app = express()
app.get('/3807', handler3807)
app.listen(3000, () => {})
        

const express = require('express')
import {handler7337} from "./handler7337";
const app = express()
app.get('/7337', handler7337)
app.listen(3000, () => {})
        
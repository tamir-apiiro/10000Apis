
const express = require('express')
import {handler337} from "./handler337";
const app = express()
app.get('/337', handler337)
app.listen(3000, () => {})
        
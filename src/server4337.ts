
const express = require('express')
import {handler4337} from "./handler4337";
const app = express()
app.get('/4337', handler4337)
app.listen(3000, () => {})
        
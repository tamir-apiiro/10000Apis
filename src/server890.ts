
const express = require('express')
import {handler890} from "./handler890";
const app = express()
app.get('/890', handler890)
app.listen(3000, () => {})
        
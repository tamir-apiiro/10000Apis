
const express = require('express')
import {handler1360} from "./handler1360";
const app = express()
app.get('/1360', handler1360)
app.listen(3000, () => {})
        
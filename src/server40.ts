
const express = require('express')
import {handler40} from "./handler40";
const app = express()
app.get('/40', handler40)
app.listen(3000, () => {})
        
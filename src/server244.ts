
const express = require('express')
import {handler244} from "./handler244";
const app = express()
app.get('/244', handler244)
app.listen(3000, () => {})
        
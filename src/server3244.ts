
const express = require('express')
import {handler3244} from "./handler3244";
const app = express()
app.get('/3244', handler3244)
app.listen(3000, () => {})
        

const express = require('express')
import {handler4244} from "./handler4244";
const app = express()
app.get('/4244', handler4244)
app.listen(3000, () => {})
        
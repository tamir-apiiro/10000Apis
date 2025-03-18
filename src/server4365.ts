
const express = require('express')
import {handler4365} from "./handler4365";
const app = express()
app.get('/4365', handler4365)
app.listen(3000, () => {})
        

const express = require('express')
import {handler4220} from "./handler4220";
const app = express()
app.get('/4220', handler4220)
app.listen(3000, () => {})
        
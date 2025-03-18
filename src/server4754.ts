
const express = require('express')
import {handler4754} from "./handler4754";
const app = express()
app.get('/4754', handler4754)
app.listen(3000, () => {})
        
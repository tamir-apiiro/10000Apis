
const express = require('express')
import {handler4990} from "./handler4990";
const app = express()
app.get('/4990', handler4990)
app.listen(3000, () => {})
        
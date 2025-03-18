
const express = require('express')
import {handler4089} from "./handler4089";
const app = express()
app.get('/4089', handler4089)
app.listen(3000, () => {})
        
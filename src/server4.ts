
const express = require('express')
import {handler4} from "./handler4";
const app = express()
app.get('/4', handler4)
app.listen(3000, () => {})
        
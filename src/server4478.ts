
const express = require('express')
import {handler4478} from "./handler4478";
const app = express()
app.get('/4478', handler4478)
app.listen(3000, () => {})
        
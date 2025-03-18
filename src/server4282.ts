
const express = require('express')
import {handler4282} from "./handler4282";
const app = express()
app.get('/4282', handler4282)
app.listen(3000, () => {})
        
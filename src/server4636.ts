
const express = require('express')
import {handler4636} from "./handler4636";
const app = express()
app.get('/4636', handler4636)
app.listen(3000, () => {})
        
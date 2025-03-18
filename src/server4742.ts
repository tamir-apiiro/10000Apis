
const express = require('express')
import {handler4742} from "./handler4742";
const app = express()
app.get('/4742', handler4742)
app.listen(3000, () => {})
        
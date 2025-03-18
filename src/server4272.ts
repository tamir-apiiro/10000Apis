
const express = require('express')
import {handler4272} from "./handler4272";
const app = express()
app.get('/4272', handler4272)
app.listen(3000, () => {})
        
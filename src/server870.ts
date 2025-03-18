
const express = require('express')
import {handler870} from "./handler870";
const app = express()
app.get('/870', handler870)
app.listen(3000, () => {})
        
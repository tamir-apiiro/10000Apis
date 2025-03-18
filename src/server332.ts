
const express = require('express')
import {handler332} from "./handler332";
const app = express()
app.get('/332', handler332)
app.listen(3000, () => {})
        
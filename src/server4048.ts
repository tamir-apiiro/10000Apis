
const express = require('express')
import {handler4048} from "./handler4048";
const app = express()
app.get('/4048', handler4048)
app.listen(3000, () => {})
        

const express = require('express')
import {handler4804} from "./handler4804";
const app = express()
app.get('/4804', handler4804)
app.listen(3000, () => {})
        
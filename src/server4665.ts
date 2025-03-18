
const express = require('express')
import {handler4665} from "./handler4665";
const app = express()
app.get('/4665', handler4665)
app.listen(3000, () => {})
        
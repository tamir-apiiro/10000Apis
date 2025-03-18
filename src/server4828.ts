
const express = require('express')
import {handler4828} from "./handler4828";
const app = express()
app.get('/4828', handler4828)
app.listen(3000, () => {})
        
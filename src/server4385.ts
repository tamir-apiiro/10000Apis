
const express = require('express')
import {handler4385} from "./handler4385";
const app = express()
app.get('/4385', handler4385)
app.listen(3000, () => {})
        
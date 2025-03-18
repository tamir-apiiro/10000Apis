
const express = require('express')
import {handler4205} from "./handler4205";
const app = express()
app.get('/4205', handler4205)
app.listen(3000, () => {})
        

const express = require('express')
import {handler4149} from "./handler4149";
const app = express()
app.get('/4149', handler4149)
app.listen(3000, () => {})
        
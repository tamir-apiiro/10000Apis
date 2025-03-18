
const express = require('express')
import {handler4075} from "./handler4075";
const app = express()
app.get('/4075', handler4075)
app.listen(3000, () => {})
        
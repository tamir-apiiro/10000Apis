
const express = require('express')
import {handler4245} from "./handler4245";
const app = express()
app.get('/4245', handler4245)
app.listen(3000, () => {})
        
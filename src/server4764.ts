
const express = require('express')
import {handler4764} from "./handler4764";
const app = express()
app.get('/4764', handler4764)
app.listen(3000, () => {})
        
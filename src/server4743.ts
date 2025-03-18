
const express = require('express')
import {handler4743} from "./handler4743";
const app = express()
app.get('/4743', handler4743)
app.listen(3000, () => {})
        
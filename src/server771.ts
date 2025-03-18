
const express = require('express')
import {handler771} from "./handler771";
const app = express()
app.get('/771', handler771)
app.listen(3000, () => {})
        
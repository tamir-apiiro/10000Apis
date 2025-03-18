
const express = require('express')
import {handler995} from "./handler995";
const app = express()
app.get('/995', handler995)
app.listen(3000, () => {})
        
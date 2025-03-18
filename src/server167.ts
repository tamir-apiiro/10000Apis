
const express = require('express')
import {handler167} from "./handler167";
const app = express()
app.get('/167', handler167)
app.listen(3000, () => {})
        

const express = require('express')
import {handler8167} from "./handler8167";
const app = express()
app.get('/8167', handler8167)
app.listen(3000, () => {})
        
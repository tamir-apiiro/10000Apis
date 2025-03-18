
const express = require('express')
import {handler4167} from "./handler4167";
const app = express()
app.get('/4167', handler4167)
app.listen(3000, () => {})
        
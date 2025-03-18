
const express = require('express')
import {handler4231} from "./handler4231";
const app = express()
app.get('/4231', handler4231)
app.listen(3000, () => {})
        
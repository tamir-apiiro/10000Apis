
const express = require('express')
import {handler678} from "./handler678";
const app = express()
app.get('/678', handler678)
app.listen(3000, () => {})
        
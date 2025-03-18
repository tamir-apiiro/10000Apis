
const express = require('express')
import {handler186} from "./handler186";
const app = express()
app.get('/186', handler186)
app.listen(3000, () => {})
        
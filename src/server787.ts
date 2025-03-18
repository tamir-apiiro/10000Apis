
const express = require('express')
import {handler787} from "./handler787";
const app = express()
app.get('/787', handler787)
app.listen(3000, () => {})
        
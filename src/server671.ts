
const express = require('express')
import {handler671} from "./handler671";
const app = express()
app.get('/671', handler671)
app.listen(3000, () => {})
        
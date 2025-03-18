
const express = require('express')
import {handler743} from "./handler743";
const app = express()
app.get('/743', handler743)
app.listen(3000, () => {})
        
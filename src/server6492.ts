
const express = require('express')
import {handler6492} from "./handler6492";
const app = express()
app.get('/6492', handler6492)
app.listen(3000, () => {})
        
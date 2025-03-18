
const express = require('express')
import {handler9486} from "./handler9486";
const app = express()
app.get('/9486', handler9486)
app.listen(3000, () => {})
        

const express = require('express')
import {handler9872} from "./handler9872";
const app = express()
app.get('/9872', handler9872)
app.listen(3000, () => {})
        
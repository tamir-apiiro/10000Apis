
const express = require('express')
import {handler9645} from "./handler9645";
const app = express()
app.get('/9645', handler9645)
app.listen(3000, () => {})
        
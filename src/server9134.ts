
const express = require('express')
import {handler9134} from "./handler9134";
const app = express()
app.get('/9134', handler9134)
app.listen(3000, () => {})
        
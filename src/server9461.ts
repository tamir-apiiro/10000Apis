
const express = require('express')
import {handler9461} from "./handler9461";
const app = express()
app.get('/9461', handler9461)
app.listen(3000, () => {})
        
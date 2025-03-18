
const express = require('express')
import {handler9442} from "./handler9442";
const app = express()
app.get('/9442', handler9442)
app.listen(3000, () => {})
        
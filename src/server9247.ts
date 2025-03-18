
const express = require('express')
import {handler9247} from "./handler9247";
const app = express()
app.get('/9247', handler9247)
app.listen(3000, () => {})
        

const express = require('express')
import {handler9575} from "./handler9575";
const app = express()
app.get('/9575', handler9575)
app.listen(3000, () => {})
        
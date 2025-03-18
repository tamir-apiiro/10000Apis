
const express = require('express')
import {handler9245} from "./handler9245";
const app = express()
app.get('/9245', handler9245)
app.listen(3000, () => {})
        
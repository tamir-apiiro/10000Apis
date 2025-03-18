
const express = require('express')
import {handler9838} from "./handler9838";
const app = express()
app.get('/9838', handler9838)
app.listen(3000, () => {})
        
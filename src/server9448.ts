
const express = require('express')
import {handler9448} from "./handler9448";
const app = express()
app.get('/9448', handler9448)
app.listen(3000, () => {})
        

const express = require('express')
import {handler9650} from "./handler9650";
const app = express()
app.get('/9650', handler9650)
app.listen(3000, () => {})
        
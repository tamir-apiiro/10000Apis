
const express = require('express')
import {handler9709} from "./handler9709";
const app = express()
app.get('/9709', handler9709)
app.listen(3000, () => {})
        
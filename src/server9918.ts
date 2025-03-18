
const express = require('express')
import {handler9918} from "./handler9918";
const app = express()
app.get('/9918', handler9918)
app.listen(3000, () => {})
        
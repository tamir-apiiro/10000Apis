
const express = require('express')
import {handler9054} from "./handler9054";
const app = express()
app.get('/9054', handler9054)
app.listen(3000, () => {})
        
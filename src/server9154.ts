
const express = require('express')
import {handler9154} from "./handler9154";
const app = express()
app.get('/9154', handler9154)
app.listen(3000, () => {})
        
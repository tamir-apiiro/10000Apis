
const express = require('express')
import {handler9349} from "./handler9349";
const app = express()
app.get('/9349', handler9349)
app.listen(3000, () => {})
        
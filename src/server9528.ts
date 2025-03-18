
const express = require('express')
import {handler9528} from "./handler9528";
const app = express()
app.get('/9528', handler9528)
app.listen(3000, () => {})
        

const express = require('express')
import {handler9224} from "./handler9224";
const app = express()
app.get('/9224', handler9224)
app.listen(3000, () => {})
        
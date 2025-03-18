
const express = require('express')
import {handler9825} from "./handler9825";
const app = express()
app.get('/9825', handler9825)
app.listen(3000, () => {})
        
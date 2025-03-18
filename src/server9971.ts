
const express = require('express')
import {handler9971} from "./handler9971";
const app = express()
app.get('/9971', handler9971)
app.listen(3000, () => {})
        
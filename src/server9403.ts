
const express = require('express')
import {handler9403} from "./handler9403";
const app = express()
app.get('/9403', handler9403)
app.listen(3000, () => {})
        
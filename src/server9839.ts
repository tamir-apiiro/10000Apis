
const express = require('express')
import {handler9839} from "./handler9839";
const app = express()
app.get('/9839', handler9839)
app.listen(3000, () => {})
        
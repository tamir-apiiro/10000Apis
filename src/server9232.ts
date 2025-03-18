
const express = require('express')
import {handler9232} from "./handler9232";
const app = express()
app.get('/9232', handler9232)
app.listen(3000, () => {})
        

const express = require('express')
import {handler9916} from "./handler9916";
const app = express()
app.get('/9916', handler9916)
app.listen(3000, () => {})
        
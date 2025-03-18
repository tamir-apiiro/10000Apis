
const express = require('express')
import {handler9425} from "./handler9425";
const app = express()
app.get('/9425', handler9425)
app.listen(3000, () => {})
        
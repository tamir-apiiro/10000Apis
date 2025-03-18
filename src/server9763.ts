
const express = require('express')
import {handler9763} from "./handler9763";
const app = express()
app.get('/9763', handler9763)
app.listen(3000, () => {})
        
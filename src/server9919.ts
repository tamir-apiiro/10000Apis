
const express = require('express')
import {handler9919} from "./handler9919";
const app = express()
app.get('/9919', handler9919)
app.listen(3000, () => {})
        

const express = require('express')
import {handler9861} from "./handler9861";
const app = express()
app.get('/9861', handler9861)
app.listen(3000, () => {})
        

const express = require('express')
import {handler9395} from "./handler9395";
const app = express()
app.get('/9395', handler9395)
app.listen(3000, () => {})
        
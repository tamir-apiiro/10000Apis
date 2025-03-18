
const express = require('express')
import {handler9190} from "./handler9190";
const app = express()
app.get('/9190', handler9190)
app.listen(3000, () => {})
        